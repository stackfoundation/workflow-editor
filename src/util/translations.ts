(window as any).translations = Object.assign((window as any).translations || {}, {
    ADD_STEP: 'Add Step',
    CONFIGURE: 'Add additional configuration',
    CONFIGURE_HEALTH: 'Health check',
    CONFIGURE_ENVIRONMENT: 'Environment variables',
    CONFIGURE_FAILURE: 'Failure behavior',
    CONFIGURE_SOURCE: 'Source availability',
    CONFIGURE_VOLUMES: 'Volumes',
    CONFIGURE_PORTS: 'Ports',
    CONFIGURE_READINESS: 'Readiness check',
    DELETE: 'Delete',
    HELP_HEALTH_TEXT: 'Configure the check that determines whether the service started by this step is healthy',
    HELP_HEALTH_LINK: 'Read more about health checks in the documentation',
    HELP_ENVIRONMENT_TEXT: 'Environment variables that you want to be made available to the Docker container that is run for this step',
    HELP_ENVIRONMENT_LINK: 'Read more about environment variables in the documentation',
    HELP_FAILURE_TEXT: 'Configure what happens when a particular step fails',
    HELP_FAILURE_LINK: 'Read more about failure behavior in the documentation',
    HELP_SOURCE_TEXT: 'Change how your project source files are made available to the Docker container that is run for this step',
    HELP_SOURCE_LINK: 'Read more about source availability in the documentation',
    HELP_VOLUMES_TEXT: 'Volumes are paths relative to your project source folder that you want available in the Docker container for this step',
    HELP_VOLUMES_LINK: 'Read more about volumes in the documentation',
    HELP_PORTS_TEXT: 'Configure the ports on the Docker container for this step that should be exposed',
    HELP_PORTS_LINK: 'Read more about exposing ports in the documentation',
    HELP_READINESS_TEXT: 'Configure the check that determines whether the service started by this step is considered ready',
    HELP_READINESS_LINK: 'Read more about readiness checks in the documentation',
    INSTRUCTION_PORTS: 'Enter a valid port number ( format: [tcp|udp/]sourcePort[:targetContainerPort] )',
    INSTRUCTION_INCLUDE_VARIABLES: 'Add variables to include in the workflow. "*" will include all.',
    INSTRUCTION_EXCLUDE_VARIABLES: 'Add variables to exclude in the workflow. "*" will exclude all.',
    LABEL_DOCKERFILE: 'Dockerfile',
    LABEL_DOCKERIGNORE: 'dockerignore file',
    LABEL_EXCLUDE_VARIABLES: 'Variables to exclude',
    LABEL_FILE: 'File',
    LABEL_GENERATOR: 'Generator',
    LABEL_GRACE: 'Initial grace period (in seconds)',
    LABEL_HOST_PATH: 'Host path',
    LABEL_INCLUDE_VARIABLES: 'Variables to include',
    LABEL_INTERVAL: 'Interval between checks (in seconds)',
    LABEL_MOUNT_PATH: 'Mount path',
    LABEL_NAME: 'Name',
    LABEL_PATH: 'Path',
    LABEL_PORT: 'Port',
    LABEL_RETRIES: 'Number of retry attempts',
    LABEL_SCRIPT: 'Script',
    LABEL_SERVICE_NAME: 'Service Name',
    LABEL_TIMEOUT: 'Timeout for check (in seconds)',
    LABEL_VALUE: 'Value',
    LABEL_VARIABLE_PROMPT: 'Add variable {}',
    LABEL_WORKFLOW: 'Workflow',
    OPTION_HTTP: 'HTTP port readiness',
    OPTION_HTTPS: 'HTTPS port readiness',
    OPTION_IGNORE_FAILURE: 'If step fails, continue running rest of workflow',
    OPTION_IGNORE_MISSING: 'Ignore missing variables when expanding variable placeholders',
    OPTION_IGNORE_VALIDATION: 'Ignore any validation errors',
    OPTION_OMIT_SOURCE: 'Do not mount the project source for this step',
    OPTION_SKIP_WAIT: 'Skip waiting for this readiness check before starting following step',
    OPTION_SCRIPT: 'Health check script',
    OPTION_TCP: 'TCP port readiness',
    PLACEHOLDER_IMAGE: 'Select image for step...',
    PLACEHOLDER_PORTS: 'Add ports...',
    PLACEHOLDER_VERSION: 'Select version...',
    PLACEHOLDER_TYPE: 'Select step type...',
    PLACEHOLDER_VARIABLES: 'Add variables...',
    RUN_CALL: 'Call another workflow',
    RUN_GENERATED: 'Generate and run a workflow',
    RUN_SCRIPT: 'Run a script',
    RUN_DOCKERFILE: 'Use an existing Dockerfile',
    SELECT_TEXT_CREATE_PORT: 'Create {} port {} mapped to target container port {}',
    SOURCE_CATALOG: 'Use official Docker image',
    SOURCE_MANUAL: 'Use custom Docker image',
    SOURCE_STEP: 'Use final state of previous step as image',
    TITLE_ENVIRONMENT: 'Environment variables',
    TITLE_FAILURE: 'Behavior on step failure',
    TITLE_SOURCE: 'Project source availability',
    TITLE_VOLUMES: 'Volumes',
    TITLE_PORTS: 'Exposed ports',
    TITLE_READINESS: 'Readiness check',
    TITLE_HEALTH: 'Health check',
    TITLE_STEPS: 'Steps',
    TITLE_WORKFLOW: 'Workflow',
    TITLE_WORKFLOW_VARIABLES: 'Workflow Variables',
    TITLE_WORKFLOW_FAILURE: 'General behavior on step failure',
    STEP_HAS_ERRORS: 'This step had errors in the workflow definition in the following fields: {}.',
    TYPE_DESCRIPTION_COMPOUND: 'Wait for all sub-steps to complete or be healthy',
    TYPE_DESCRIPTION_SEQUENTIAL: 'Workflow will wait for the step to complete',
    TYPE_DESCRIPTION_PARALLEL: 'Workflow will not wait for this step to complete',
    TYPE_DESCRIPTION_SERVICE: 'Workflow will wait for this step to be healthy',
    TYPE_NAME_COMPOUND: 'Compound Step',
    TYPE_NAME_SEQUENTIAL: 'Sequential Step',
    TYPE_NAME_PARALLEL: 'Parallel Step',
    TYPE_NAME_SERVICE: 'Service Step'
});
