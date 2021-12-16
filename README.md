# MicroServicesCourse

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
