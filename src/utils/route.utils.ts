import chalk from "chalk";
import { Router } from "express";

export const displayRoutes = (prefix: string, routers: Router[]) => {
  const routes = routers
    .map((router: Router) => router.stack.map((routes: any) => routes.route))
    .flat();

  console.log(
    "\nAPI routes: \r\n\b",
    routes
      .map(
        (route: any) =>
          `${chalk.green(
            Object.keys(route.methods)[0].toUpperCase().padEnd(10)
          )} ${chalk.grey(prefix + route.path)}`
      )
      .join("\n"),
    "\n"
  );
};
