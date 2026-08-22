## Exercise 1: Hello Pod

## 1. Prerequisites

**Operating System:** Windows  
**Terminal:** Windows PowerShell

### Check Chocolatey

```powershell
choco --version
```

**Output:**

```text
2.7.4
```

### Install Minikube

```powershell
choco install minikube
```

**Result:**

```text
Chocolatey installed 2/2 packages.
```

Minikube and kubectl were installed successfully.

> **Note:** Minikube automatically selected **Hyper-V** as the driver, so no separate VirtualBox installation was required.

---

## 2. Start Minikube

### Command

```powershell
minikube start
```

**Result:**

```text
minikube v1.38.1
Kubernetes v1.35.1
Automatically selected the hyperv driver
Done! kubectl is now configured to use "minikube" cluster
```

Minikube started successfully.

---

## 3. Create the Nginx Pod

### Command

```powershell
kubectl run hello-k8s --image=nginx --port=80
```

**Output:**

```text
pod/hello-k8s created
```

The Nginx Pod was created successfully.

---

## 4. Check Pod Status

### Command

```powershell
kubectl get pods
```

### Initial Output

```text
NAME        READY   STATUS              RESTARTS   AGE
hello-k8s   0/1     ContainerCreating   0          14s
```

The Pod was still starting. After waiting for the Nginx container to start, the Pod became `Running`.

### Final Pod Status

```text
NAME        READY   STATUS    RESTARTS   AGE
hello-k8s   1/1     Running   0          ...
```

---

## 5. Expose the Pod

### Command

```powershell
kubectl expose pod hello-k8s --type=NodePort --port=80
```

**Output:**

```text
service/hello-k8s exposed
```

The NodePort Service was created successfully.

---

## 6. Access the Application

### Command

```powershell
minikube service hello-k8s
```

### Service URL

```text
http://172.31.156.237:31229
```

The Nginx Welcome Page was successfully opened in the browser.
