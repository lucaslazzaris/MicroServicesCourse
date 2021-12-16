# MicroServicesCourse

### Obs

- To rollout a deployment use:
```bash
docker build -t dockerid/repo
docker push dockerid/repo
kubectl rollout restart deployment depl_config_file
```