import strawberry

from .blog.schema import BlogQuery
from .conferences.schema import ConferenceQuery
from .orders.mutations import OrdersMutations
from .orders.query import OrdersQuery
from .pages.schema import PagesQuery
from .submissions.mutations import SubmissionsMutations
from .submissions.schema import SubmissionsQuery
from .users.mutations import UsersMutations
from .users.schema import CountryQuery, UsersQuery
from .voting.mutations import VotesMutations


@strawberry.type
class Query(
    UsersQuery,
    ConferenceQuery,
    BlogQuery,
    SubmissionsQuery,
    PagesQuery,
    CountryQuery,
    OrdersQuery,
):
    pass


@strawberry.type
class Mutation(UsersMutations, SubmissionsMutations, VotesMutations, OrdersMutations):
    pass


schema = strawberry.Schema(query=Query, mutation=Mutation)
