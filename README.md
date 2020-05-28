# @madebyheyday/env-util

- Loads environment variables from a `.env` file in the root package's base path
- Overrides environment variables from a `.env.local` file in the root package's base path (meant to be ignored in git)
- Environment variables already set overwrite variables defined in any of the config files

## Load additional .env files

```
import { loadEnvironment } from '@madebyheyday/env-util';

loadEnvironment('path/to/.env');
```
