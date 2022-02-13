"""Migration auto-generated at 2022-02-13 17:37:26.076083.

Revision ID: 502a6bfb7d5f
Revises: c05835d8ab3f
Create Date: 2022-02-13 17:37:26.445458

"""

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = "502a6bfb7d5f"
down_revision = "c05835d8ab3f"


def upgrade():
    schema_upgrades()


def downgrade():
    schema_downgrades()


def schema_upgrades():
    """schema upgrade migrations go here."""
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table(
        "item",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("uid", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("name", sa.String(), nullable=False),
        sa.Column("is_checked", sa.Boolean(), nullable=True),
        sa.Column("shopping_list_id", sa.Integer(), nullable=True),
        sa.ForeignKeyConstraint(
            ["shopping_list_id"],
            ["shopping_list.id"],
        ),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index(op.f("ix_item_uid"), "item", ["uid"], unique=True)
    # ### end Alembic commands ###


def schema_downgrades():
    """schema downgrade migrations go here."""
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f("ix_item_uid"), table_name="item")
    op.drop_table("item")
    # ### end Alembic commands ###