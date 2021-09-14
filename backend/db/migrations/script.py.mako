"""${message}

Revision ID: ${up_revision}
Revises: ${down_revision}
Create Date: ${create_date}

"""

import sqlalchemy as sa
from alembic import context, op
${imports if imports else ""}

# revision identifiers, used by Alembic.
revision = ${repr(up_revision)}
down_revision = ${repr(down_revision)}


def upgrade():
    schema_upgrades()


def downgrade():
    schema_downgrades()


def schema_upgrades():
    """schema upgrade migrations go here."""
    ${upgrades if upgrades else "pass"}


def schema_downgrades():
    """schema downgrade migrations go here."""
    ${downgrades if downgrades else "pass"}
