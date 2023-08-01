Running the dev server:

```bash
npm run dev
```

Building for deployment:

```bash
npm run build
npm run export
```

Deployment:

```bash
ansible-playbook ansible/deploy.yml
```
