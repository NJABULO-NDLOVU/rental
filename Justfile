# Show this message and exit.
help:
	@just list

clean:
	rm -rf build dist wheels *.egg-info
	find . -path '*/__pycache__/*' -delete
	find . -type d -name '__pycache__' -empty -delete
	rm -rf '.mypy_cache'
	rm -rf '.pytest_cache'
	rm -rf '.coverage'

install-pip-tools:
	pip install --quiet pip-tools

requirements:
    @just install-pip-tools
    pip-compile

setup:
    @just requirements
    pip install -r requirements.txt

# Auto-format the code.
fmt:
    isort .
    black .

# Run all lints
lint:
    flake8 .
    isort --diff --check .
    black --diff --check .
    mypy .

run:
	uvicorn --host=0.0.0.0 --port=5111 --reload backend.api.app:app

test:
    pytest .

makemigrations:
	python -m backend.db.cli auto-migrate

migrate:
	python -m backend.db.cli upgrade-db
