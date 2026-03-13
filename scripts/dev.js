import { spawn } from "node:child_process";
import path from "node:path";
import process from "node:process";

const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
const backendDir = path.join(process.cwd(), "backend");
const pythonCommand = process.platform === "win32"
  ? path.join(backendDir, ".venv", "Scripts", "python.exe")
  : path.join(backendDir, ".venv", "bin", "python");

const childProcesses = [
  spawn(pythonCommand, ["manage.py", "runserver", "127.0.0.1:8787"], {
    cwd: backendDir,
    stdio: "inherit"
  }),
  spawn(npmCommand, ["--prefix", "frontend", "run", "dev"], {
    stdio: "inherit"
  })
];

let isShuttingDown = false;

const shutdown = (signal = "SIGTERM") => {
  if (isShuttingDown) {
    return;
  }

  isShuttingDown = true;

  for (const child of childProcesses) {
    if (!child.killed) {
      child.kill(signal);
    }
  }
};

for (const child of childProcesses) {
  child.on("exit", (code) => {
    if (!isShuttingDown && code && code !== 0) {
      shutdown();
      process.exitCode = code;
    }
  });
}

process.on("SIGINT", () => {
  shutdown("SIGINT");
  process.exit(0);
});

process.on("SIGTERM", () => {
  shutdown("SIGTERM");
  process.exit(0);
});
