# Contributing to CriForge

Thank you for your interest in contributing to CriForge! We welcome contributions from the community and are excited to see what you'll build with us.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Submitting Changes](#submitting-changes)
- [Style Guidelines](#style-guidelines)
- [Issue Guidelines](#issue-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Community](#community)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [contact@justdiego.com](mailto:contact@justdiego.com).

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally
3. Set up the development environment
4. Create a branch for your changes
5. Make your changes
6. Test your changes
7. Submit a pull request

## Development Setup

CriForge is a monorepo built with Turborepo and pnpm. Follow these steps to set up your development environment:

### Prerequisites

- Node.js 18.0.0 or higher
- pnpm 8.0.0 or higher
- Git

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dewstouh/criforge.com.git
   cd criforge.com
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Generate Prisma client:**
   ```bash
   pnpm db:generate
   ```

5. **Run the development server:**
   ```bash
   pnpm dev
   ```

6. **Open your browser:**
   Navigate to `http://localhost:3000`

## Making Changes

### Branch Naming Convention

Use descriptive branch names that follow this pattern:
- `feature/description-of-feature`
- `fix/description-of-fix`
- `docs/description-of-docs-change`
- `refactor/description-of-refactor`

### Commit Message Convention

We follow the [Conventional Commits](https://conventionalcommits.org/) specification:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

**Examples:**
```
feat(auth): add social login support
fix(ui): resolve button hover state issue
docs(readme): update installation instructions
```

## Submitting Changes

### Before Submitting

1. **Test your changes:**
   ```bash
   pnpm test
   pnpm build
   ```

2. **Lint your code:**
   ```bash
   pnpm lint
   ```

3. **Format your code:**
   ```bash
   pnpm format
   ```

4. **Update documentation if needed**

### Creating a Pull Request

1. Push your changes to your fork
2. Create a pull request against the `main` branch
3. Fill out the pull request template
4. Link any related issues
5. Request review from maintainers

## Style Guidelines

### Code Style

- We use TypeScript for all code
- Follow the existing code style and patterns
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Keep functions small and focused

### File Organization

- Use the established folder structure
- Place files in appropriate directories
- Use PascalCase for components
- Use camelCase for functions and variables
- Use kebab-case for file names

### React/Next.js Guidelines

- Prefer server components when possible
- Use "use client" directive only when necessary
- Follow the route group organization pattern
- Use private folders (`_components`, `_hooks`, `_lib`) for route-specific code
- Implement proper error boundaries

## Issue Guidelines

### Before Creating an Issue

1. Search existing issues to avoid duplicates
2. Check if the issue is already fixed in the latest version
3. Read the documentation thoroughly

### Creating Good Issues

- Use the provided issue templates
- Provide a clear and descriptive title
- Include steps to reproduce (for bugs)
- Add relevant labels
- Include screenshots or code examples when helpful

## Pull Request Guidelines

### Before Creating a PR

- Ensure your branch is up to date with `main`
- Test your changes thoroughly
- Write or update tests as needed
- Update documentation if necessary

### PR Requirements

- [ ] Descriptive title and description
- [ ] Link to related issues
- [ ] Tests pass
- [ ] Code follows style guidelines
- [ ] Documentation updated (if needed)
- [ ] Changelog entry added (if needed)

### Review Process

1. Automated checks must pass
2. Code review by maintainers
3. Address any requested changes
4. Approval from at least one maintainer
5. Merge (squash and merge preferred)

## Community

### Communication Channels

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: General questions and ideas
- **Discord**: Real-time community chat
- **Email**: [contact@justdiego.com](mailto:contact@justdiego.com)

### Getting Help

- Check the documentation first
- Search existing issues and discussions
- Ask questions in the appropriate channel
- Be respectful and patient

## Recognition

Contributors are recognized in:
- GitHub contributor list
- Release notes for significant contributions
- Special thanks in documentation

## License

By contributing to CriForge, you agree that your contributions will be licensed under the same license as the project.

## Questions?

If you have questions about contributing, please:
1. Check this guide
2. Search existing issues and discussions
3. Ask in our Discord community
4. Email us at [contact@justdiego.com](mailto:contact@justdiego.com)

Thank you for contributing to CriForge! 🚀
