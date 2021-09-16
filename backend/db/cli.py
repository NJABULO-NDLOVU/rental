"""
CLI methods exposed by the library
"""

import code
import datetime
import os
from typing import Optional

import alembic
import alembic.command
import alembic.config
import click

import backend.db
from backend.config import DATABASE_URL
from backend.db import models  # noqa: F401
from backend.db.db import Session

PATH = os.path.dirname(backend.db.__file__)
MIGRATIONS_PATH = os.path.join(PATH, "migrations")


def _get_alembic_config() -> alembic.config.Config:
    alembic_cfg = alembic.config.Config()
    alembic_cfg.set_main_option("sqlalchemy.url", DATABASE_URL)
    alembic_cfg.set_main_option("script_location", MIGRATIONS_PATH)
    return alembic_cfg


@click.group()
def cli() -> None:
    """CLI Group"""
    pass


@cli.command("set-db-version")
@click.option("-r", "--revision", default="head")
def set_db_version(revision: str) -> None:
    """Tells the migration software what the current version of the DB is."""
    alembic.command.stamp(config=_get_alembic_config(), revision=revision)


@cli.command("auto-migrate")
@click.option("-m", "--message", default="")
def auto_migrate(message: str) -> None:
    """Computes an automatic migration. NOTE: Read up on the flaws of Alembic change detection."""
    now = datetime.datetime.now()
    _message = message if message else f"Migration auto-generated at {now}."
    try:
        alembic.command.revision(config=_get_alembic_config(), message=_message, autogenerate=True)
    except alembic.util.exc.CommandError as e:
        print(e)


@cli.command("manual-migrate")
@click.option("-m", "--message", default="")
def manual_migrate(message: str) -> None:
    """Creates an empty migration to be manually written."""
    now = datetime.datetime.now()
    _message = message if message else f"Migration manually generated at {now}."
    alembic.command.revision(config=_get_alembic_config(), message=_message)


@cli.command("upgrade-db")
@click.argument("revision", default="head")
@click.option("-t", "--tag", default=None)
def upgrade_db(revision: str, tag: Optional[str]) -> None:
    """Upgrades the DB to the latest revision or to the one given."""
    alembic.command.upgrade(config=_get_alembic_config(), revision=revision, tag=tag)


@cli.command("downgrade-db")
@click.argument("revision", default="-1")
def downgrade_db(revision: str) -> None:
    """Downgrades the DB a single revision or to the one given."""
    alembic.command.downgrade(config=_get_alembic_config(), revision=revision)


@cli.command("show-migrations")
@click.option("-v", "--verbose", is_flag=True)
def show_migrations(verbose: bool) -> None:
    """Shows all the migrations in the system."""
    alembic.command.history(config=_get_alembic_config(), verbose=verbose)


@cli.command("show-db-version")
@click.option("-v", "--verbose", is_flag=True)
def show_db_version(verbose: bool) -> None:
    """Shows the current migration of the DB."""
    alembic.command.current(config=_get_alembic_config(), verbose=verbose)


@cli.command("shell")
def shell() -> None:
    """Opens a shell to interact with the database"""
    alembic.command.current(config=_get_alembic_config(), verbose=True)

    session = Session()
    code.interact(local=locals())


if __name__ == "__main__":
    cli()
