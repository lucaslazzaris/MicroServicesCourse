# MicroServicesCourse

### my_blog
To run my blog add to /etc/hosts
`127.0.0.1 posts.com`

### Skaffold

To use skaffold in dev (sync containers and code):
```bash
skaffold dev
```

### Obs

- To rollout a deployment use:
```bash
docker build -t dockerid/repo
docker push dockerid/repo
kubectl rollout restart deployment depl_config_file
```
