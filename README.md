# AngularPrime
Angular project to work with few possible components including chatbot

Ideal folder structure for Angular projects
|-- app
     |-- modules
       |-- home
           |-- [+] components
           |-- [+] pages
           |-- home-routing.module.ts
           |-- home.module.ts
     |-- core
       |-- [+] authentication
       |-- [+] footer
       |-- [+] guards
       |-- [+] http
       |-- [+] interceptors
       |-- [+] mocks
       |-- [+] services
       |-- [+] header
       |-- core.module.ts
       |-- ensureModuleLoadedOnceGuard.ts
       |-- logger.service.ts
     |
     |-- shared
          |-- [+] components
          |-- [+] directives
          |-- [+] pipes
     |
     |-- [+] configs
|-- assets
     |-- scss
          |-- [+] partials
          |-- _base.scss
          |-- styles.scss
