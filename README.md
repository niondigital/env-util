# @madebyheyday/env-util

- Environment variables already set take precedence.
- Loads environment variables from a `.env.local` file in the root package's base path (meant to be ignored in git). Already existing environment variables take precedence.
- Loads environment variables from a `.env` file in the root package's base path. Already existing environment variables take precedence.

## Load additional .env files

```
import { loadEnvironment } from '@madebyheyday/env-util';

loadEnvironment('path/to/.env');
```
