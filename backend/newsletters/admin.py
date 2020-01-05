from django.conf.urls import url
from django.contrib import admin, messages
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.utils.html import format_html

from .models import Email, Subscription


@admin.register(Subscription)
class SubscriptionAdmin(admin.ModelAdmin):
    list_display = ("email", "date_subscribed")


@admin.register(Email)
class EmailAdmin(admin.ModelAdmin):
    list_display = ("subject", "recipients_type", "scheduled_date", "email_actions")
    readonly_fields = ("recipients", "email_actions")
    actions = ["send_emails"]

    def get_urls(self):
        urls = super().get_urls()
        custom_urls = [
            url(
                r"^(?P<email_id>.+)/send_email/$",
                self.admin_site.admin_view(self.send_email),
                name="send_email",
            )
        ]
        return custom_urls + urls

    def email_actions(self, obj):
        return format_html(
            '<a class="button" href="{}">Send Now!!</a>&nbsp;',
            reverse("admin:send_email", args=[obj.pk]),
        )

    email_actions.short_description = "Email Actions"
    email_actions.allow_tags = True

    def send_email(self, request, email_id):
        self._send_emails(request, [Email.objects.get(pk=email_id)])
        return HttpResponseRedirect(reverse("admin:newsletters_email_changelist"))

    def send_emails(self, request, queryset):
        self._send_emails(request, queryset)

    def _send_emails(self, request, emails):

        results = []
        for email in emails:
            results.append(email.send_email())

        if all(results):
            subjects = "', '".join([e.subject for e in emails])
            self.message_user(request, f"Successfully sent '{subjects}' Email(s).")
        else:
            self.message_user(
                request, "Mmmm... Something went wrong :(", level=messages.ERROR
            )

    send_emails.short_description = "Send selected Emails"
