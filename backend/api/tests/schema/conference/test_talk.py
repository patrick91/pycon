from pytest import mark
from schedule.models import ScheduleItem


@mark.django_db
def test_get_talk_not_found(conference_factory, graphql_client):
    conference = conference_factory()

    resp = graphql_client.query(
        """
        query($code: String!) {
            conference(code: $code) {
                talk(slug: "example") {
                    title
                    speakers {
                        name
                    }
                }
            }
        }
        """,
        variables={"code": conference.code},
    )

    assert "errors" not in resp
    assert resp["data"]["conference"]["talk"] is None


@mark.django_db
def test_get_talk_by_slug(conference_factory, schedule_item_factory, graphql_client):
    conference = conference_factory()

    schedule_item_factory(conference=conference, type=ScheduleItem.TYPES.submission)
    keynote = schedule_item_factory(
        conference=conference, type=ScheduleItem.TYPES.keynote
    )

    resp = graphql_client.query(
        """
        query($code: String!, $slug: String!) {
            conference(code: $code) {
                talk(slug: $slug) {
                    title
                    slug
                    speakers {
                        name
                    }
                }
            }
        }
        """,
        variables={"code": conference.code, "slug": keynote.slug},
    )

    assert "errors" not in resp

    talk_data = resp["data"]["conference"]["talk"]

    assert talk_data["title"] == keynote.submission.title
    assert talk_data["slug"] == keynote.slug
    assert len(talk_data["speakers"]) == 1

    speaker_data = talk_data["speakers"][0]

    assert speaker_data["name"] == keynote.submission.speaker.name
