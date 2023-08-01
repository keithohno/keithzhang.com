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

Copy secure data into `private/keyth-aws.pem` and `private/hosts`

```bash
cd ansible
ansible-playbook deploy.yml
```
