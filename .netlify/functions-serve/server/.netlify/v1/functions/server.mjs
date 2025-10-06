
import {createRequire as ___nfyCreateRequire} from "module";
import {fileURLToPath as ___nfyFileURLToPath} from "url";
import {dirname as ___nfyPathDirname} from "path";
let __filename=___nfyFileURLToPath(import.meta.url);
let __dirname=___nfyPathDirname(___nfyFileURLToPath(import.meta.url));
let require=___nfyCreateRequire(import.meta.url);

var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// dist/server/assets/_tanstack-start-manifest_v-CCGwh-zN.js
var tanstack_start_manifest_v_CCGwh_zN_exports = {};
__export(tanstack_start_manifest_v_CCGwh_zN_exports, {
  tsrStartManifest: () => tsrStartManifest
});
var tsrStartManifest;
var init_tanstack_start_manifest_v_CCGwh_zN = __esm({
  "dist/server/assets/_tanstack-start-manifest_v-CCGwh-zN.js"() {
    "use strict";
    tsrStartManifest = () => ({ "routes": { "__root__": { "filePath": "/Users/jesse.hall/Documents/workspace/tanstack/fresh-start/src/routes/__root.tsx", "children": ["/", "/todos"], "preloads": ["/assets/main-CSusnc3h.js"], "assets": [] }, "/": { "filePath": "/Users/jesse.hall/Documents/workspace/tanstack/fresh-start/src/routes/index.tsx", "assets": [], "preloads": ["/assets/index-D6p1mbyR.js", "/assets/badge-eZmb1fTl.js"] }, "/todos": { "filePath": "/Users/jesse.hall/Documents/workspace/tanstack/fresh-start/src/routes/todos.tsx", "assets": [], "preloads": ["/assets/todos-BtTGQEvH.js", "/assets/badge-eZmb1fTl.js"] } }, "clientEntry": "/assets/main-CSusnc3h.js" });
  }
});

// dist/server/assets/theme-BovS8PqH.js
var theme_BovS8PqH_exports = {};
__export(theme_BovS8PqH_exports, {
  getServerTheme_createServerFn_handler: () => getServerTheme_createServerFn_handler
});
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-router";
var THEME_COOKIE_NAME, getServerTheme_createServerFn_handler, getServerTheme;
var init_theme_BovS8PqH = __esm({
  "dist/server/assets/theme-BovS8PqH.js"() {
    "use strict";
    init_server();
    THEME_COOKIE_NAME = "ui-theme";
    getServerTheme_createServerFn_handler = createServerRpc("src_server_theme_ts--getServerTheme_createServerFn_handler", (opts, signal) => {
      return getServerTheme.__executeServer(opts, signal);
    });
    getServerTheme = createServerFn().handler(getServerTheme_createServerFn_handler, () => {
      const theme = getCookie(THEME_COOKIE_NAME);
      if (theme === "dark" || theme === "light" || theme === "system") {
        return theme;
      }
      return "system";
    });
  }
});

// dist/server/assets/mongodb-DBEA2zFe.js
import { MongoClient } from "mongodb";
function getConnectionErrorMessage(error) {
  const errorMsg = error.message.toLowerCase();
  if (errorMsg.includes("bad auth") || errorMsg.includes("authentication failed")) {
    return "Authentication failed";
  }
  if (errorMsg.includes("enotfound") || errorMsg.includes("getaddrinfo")) {
    return "Cannot reach MongoDB server";
  }
  if (errorMsg.includes("timeout") || errorMsg.includes("timed out")) {
    return "Connection timeout";
  }
  if (errorMsg.includes("ip") && errorMsg.includes("not") && errorMsg.includes("whitelist")) {
    return "IP address not whitelisted";
  }
  if (errorMsg.includes("invalid connection string") || errorMsg.includes("uri must")) {
    return "Invalid connection string format";
  }
  if (errorMsg.includes("server selection")) {
    return "Cannot connect to MongoDB";
  }
  return "MongoDB connection error";
}
async function connectToDatabase() {
  if (cached.client && cached.db) {
    return { client: cached.client, db: cached.db };
  }
  if (cached.promise) {
    return cached.promise;
  }
  if (!MONGODB_URI) {
    throw new Error("Missing MONGODB_URI configuration");
  }
  cached.promise = MongoClient.connect(MONGODB_URI, options).then((client) => {
    const db = client.db(DB_NAME);
    cached.client = client;
    cached.db = db;
    cached.promise = null;
    return { client, db };
  }).catch((error) => {
    cached.promise = null;
    const message = getConnectionErrorMessage(error);
    throw new Error(message);
  });
  return cached.promise;
}
async function getTodosCollection() {
  const { db } = await connectToDatabase();
  return db.collection("todos");
}
var MONGODB_URI, DB_NAME, options, cached;
var init_mongodb_DBEA2zFe = __esm({
  "dist/server/assets/mongodb-DBEA2zFe.js"() {
    "use strict";
    MONGODB_URI = process.env.MONGODB_URI;
    DB_NAME = "tanstack-todos";
    options = {
      appName: "devrel.template.tanstack-start-todo",
      maxPoolSize: 10,
      // Limit connection pool size for serverless
      minPoolSize: 1,
      maxIdleTimeMS: 5e3,
      // Close idle connections after 5s
      serverSelectionTimeoutMS: 5e3,
      // Timeout after 5s if can't find server
      socketTimeoutMS: 3e4
      // Close sockets after 30s of inactivity
    };
    cached = {
      client: null,
      db: null,
      promise: null
    };
  }
});

// dist/server/assets/mongodb-status-Be4TXb8e.js
var mongodb_status_Be4TXb8e_exports = {};
__export(mongodb_status_Be4TXb8e_exports, {
  checkMongoDBConnection_createServerFn_handler: () => checkMongoDBConnection_createServerFn_handler
});
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-router";
import "mongodb";
var checkMongoDBConnection_createServerFn_handler, checkMongoDBConnection;
var init_mongodb_status_Be4TXb8e = __esm({
  "dist/server/assets/mongodb-status-Be4TXb8e.js"() {
    "use strict";
    init_server();
    init_mongodb_DBEA2zFe();
    checkMongoDBConnection_createServerFn_handler = createServerRpc("src_server_mongodb-status_ts--checkMongoDBConnection_createServerFn_handler", (opts, signal) => {
      return checkMongoDBConnection.__executeServer(opts, signal);
    });
    checkMongoDBConnection = createServerFn({
      method: "GET"
    }).handler(checkMongoDBConnection_createServerFn_handler, async () => {
      try {
        if (!process.env.MONGODB_URI) {
          return {
            connected: false
          };
        }
        const {
          db
        } = await connectToDatabase();
        await db.admin().ping();
        return {
          connected: true
        };
      } catch (error) {
        return {
          connected: false
        };
      }
    });
  }
});

// dist/server/assets/types-Bn6jFS_B.js
import { z } from "zod";
function todoToResponse(todo) {
  return {
    id: todo._id.toString(),
    title: todo.title,
    completed: todo.completed,
    createdAt: todo.createdAt.toISOString(),
    updatedAt: todo.updatedAt.toISOString()
  };
}
var CreateTodoSchema, UpdateTodoSchema, DeleteTodoSchema;
var init_types_Bn6jFS_B = __esm({
  "dist/server/assets/types-Bn6jFS_B.js"() {
    "use strict";
    CreateTodoSchema = z.object({
      title: z.string().min(1, "Title must not be empty").max(500, "Title must be less than 500 characters").transform((val) => val.trim())
    });
    UpdateTodoSchema = z.object({
      id: z.string().refine((val) => /^[0-9a-fA-F]{24}$/.test(val), {
        message: "Invalid ID format"
      }),
      title: z.string().min(1, "Title must not be empty").max(500, "Title must be less than 500 characters").transform((val) => val.trim()).optional(),
      completed: z.boolean().optional()
    });
    DeleteTodoSchema = z.object({
      id: z.string().refine((val) => /^[0-9a-fA-F]{24}$/.test(val), {
        message: "Invalid ID format"
      })
    });
  }
});

// dist/server/assets/todos-CG35TK-i.js
var todos_CG35TK_i_exports = {};
__export(todos_CG35TK_i_exports, {
  createTodo_createServerFn_handler: () => createTodo_createServerFn_handler,
  deleteTodo_createServerFn_handler: () => deleteTodo_createServerFn_handler,
  getTodos_createServerFn_handler: () => getTodos_createServerFn_handler,
  updateTodo_createServerFn_handler: () => updateTodo_createServerFn_handler
});
import { ObjectId } from "mongodb";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-router";
import "zod";
var getTodos_createServerFn_handler, createTodo_createServerFn_handler, updateTodo_createServerFn_handler, deleteTodo_createServerFn_handler, getTodos, createTodo, updateTodo, deleteTodo;
var init_todos_CG35TK_i = __esm({
  "dist/server/assets/todos-CG35TK-i.js"() {
    "use strict";
    init_server();
    init_mongodb_DBEA2zFe();
    init_types_Bn6jFS_B();
    getTodos_createServerFn_handler = createServerRpc("src_server_todos_ts--getTodos_createServerFn_handler", (opts, signal) => {
      return getTodos.__executeServer(opts, signal);
    });
    createTodo_createServerFn_handler = createServerRpc("src_server_todos_ts--createTodo_createServerFn_handler", (opts, signal) => {
      return createTodo.__executeServer(opts, signal);
    });
    updateTodo_createServerFn_handler = createServerRpc("src_server_todos_ts--updateTodo_createServerFn_handler", (opts, signal) => {
      return updateTodo.__executeServer(opts, signal);
    });
    deleteTodo_createServerFn_handler = createServerRpc("src_server_todos_ts--deleteTodo_createServerFn_handler", (opts, signal) => {
      return deleteTodo.__executeServer(opts, signal);
    });
    getTodos = createServerFn().handler(getTodos_createServerFn_handler, async () => {
      const collection = await getTodosCollection();
      const todos = await collection.find({}).sort({
        createdAt: -1
      }).toArray();
      return todos.map(todoToResponse);
    });
    createTodo = createServerFn({
      method: "POST"
    }).inputValidator(CreateTodoSchema).handler(createTodo_createServerFn_handler, async ({
      data
    }) => {
      const collection = await getTodosCollection();
      const now = /* @__PURE__ */ new Date();
      const newTodo = {
        title: data.title,
        completed: false,
        createdAt: now,
        updatedAt: now
      };
      const result = await collection.insertOne(newTodo);
      const createdTodo = {
        id: result.insertedId.toString(),
        title: newTodo.title,
        completed: newTodo.completed,
        createdAt: newTodo.createdAt.toISOString(),
        updatedAt: newTodo.updatedAt.toISOString()
      };
      return createdTodo;
    });
    updateTodo = createServerFn({
      method: "POST"
    }).inputValidator(UpdateTodoSchema).handler(updateTodo_createServerFn_handler, async ({
      data
    }) => {
      const collection = await getTodosCollection();
      const {
        id,
        ...updates
      } = data;
      if (!updates.title && updates.completed === void 0) {
        throw new Error("Must provide at least one field to update (title or completed)");
      }
      const updateData = {
        updatedAt: /* @__PURE__ */ new Date()
      };
      if (updates.title !== void 0) {
        updateData.title = updates.title;
      }
      if (updates.completed !== void 0) {
        updateData.completed = updates.completed;
      }
      const result = await collection.findOneAndUpdate({
        _id: new ObjectId(id)
      }, {
        $set: updateData
      }, {
        returnDocument: "after"
      });
      if (!result) {
        throw new Error(`Todo with id ${id} not found`);
      }
      return todoToResponse(result);
    });
    deleteTodo = createServerFn({
      method: "POST"
    }).inputValidator(DeleteTodoSchema).handler(deleteTodo_createServerFn_handler, async ({
      data
    }) => {
      const collection = await getTodosCollection();
      const result = await collection.deleteOne({
        _id: new ObjectId(data.id)
      });
      if (result.deletedCount === 0) {
        throw new Error(`Todo with id ${data.id} not found`);
      }
      return;
    });
  }
});

// dist/server/assets/_tanstack-start-server-fn-manifest_v-CHrJyVSn.js
var tanstack_start_server_fn_manifest_v_CHrJyVSn_exports = {};
__export(tanstack_start_server_fn_manifest_v_CHrJyVSn_exports, {
  default: () => _tanstackStartServerFnManifest_v
});
var _tanstackStartServerFnManifest_v;
var init_tanstack_start_server_fn_manifest_v_CHrJyVSn = __esm({
  "dist/server/assets/_tanstack-start-server-fn-manifest_v-CHrJyVSn.js"() {
    "use strict";
    _tanstackStartServerFnManifest_v = { "src_server_theme_ts--getServerTheme_createServerFn_handler": {
      functionName: "getServerTheme_createServerFn_handler",
      importer: () => Promise.resolve().then(() => (init_theme_BovS8PqH(), theme_BovS8PqH_exports))
    }, "src_server_mongodb-status_ts--checkMongoDBConnection_createServerFn_handler": {
      functionName: "checkMongoDBConnection_createServerFn_handler",
      importer: () => Promise.resolve().then(() => (init_mongodb_status_Be4TXb8e(), mongodb_status_Be4TXb8e_exports))
    }, "src_server_todos_ts--getTodos_createServerFn_handler": {
      functionName: "getTodos_createServerFn_handler",
      importer: () => Promise.resolve().then(() => (init_todos_CG35TK_i(), todos_CG35TK_i_exports))
    }, "src_server_todos_ts--createTodo_createServerFn_handler": {
      functionName: "createTodo_createServerFn_handler",
      importer: () => Promise.resolve().then(() => (init_todos_CG35TK_i(), todos_CG35TK_i_exports))
    }, "src_server_todos_ts--updateTodo_createServerFn_handler": {
      functionName: "updateTodo_createServerFn_handler",
      importer: () => Promise.resolve().then(() => (init_todos_CG35TK_i(), todos_CG35TK_i_exports))
    }, "src_server_todos_ts--deleteTodo_createServerFn_handler": {
      functionName: "deleteTodo_createServerFn_handler",
      importer: () => Promise.resolve().then(() => (init_todos_CG35TK_i(), todos_CG35TK_i_exports))
    } };
  }
});

// dist/server/assets/_tanstack-start-injected-head-scripts_v-cda0Ky0D.js
var tanstack_start_injected_head_scripts_v_cda0Ky0D_exports = {};
__export(tanstack_start_injected_head_scripts_v_cda0Ky0D_exports, {
  injectedHeadScripts: () => injectedHeadScripts
});
var injectedHeadScripts;
var init_tanstack_start_injected_head_scripts_v_cda0Ky0D = __esm({
  "dist/server/assets/_tanstack-start-injected-head-scripts_v-cda0Ky0D.js"() {
    "use strict";
    injectedHeadScripts = void 0;
  }
});

// dist/server/assets/badge-8GRzUCJL.js
import { jsx } from "react/jsx-runtime";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}
var badgeVariants;
var init_badge_8GRzUCJL = __esm({
  "dist/server/assets/badge-8GRzUCJL.js"() {
    "use strict";
    init_router_BLkbJw6K();
    badgeVariants = cva(
      "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
      {
        variants: {
          variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
          }
        },
        defaultVariants: {
          variant: "default"
        }
      }
    );
  }
});

// dist/server/assets/todos-0ywKcbWT.js
var todos_0ywKcbWT_exports = {};
__export(todos_0ywKcbWT_exports, {
  component: () => TodosPage
});
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
import { Plus, CheckIcon, Trash2, CheckSquare } from "lucide-react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { cva as cva2 } from "class-variance-authority";
import { useState } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import "@tanstack/react-router";
import "@tanstack/react-router-ssr-query";
import "@tanstack/react-router-devtools";
import "@tanstack/react-devtools";
import "@radix-ui/react-dialog";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "@radix-ui/react-dropdown-menu";
import "@tanstack/react-query-devtools";
import "@tanstack/react-router/ssr/server";
import "mongodb";
import "zod";
function useGetTodos() {
  return useQuery(todoQueries.list());
}
function useCreateTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["todos", "create"],
    mutationFn: (data) => createTodo2({ data }),
    // Optimistic update: add todo to cache immediately
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: todoQueries.list().queryKey });
      const previousTodos = queryClient.getQueryData(
        todoQueries.list().queryKey
      );
      queryClient.setQueryData(
        todoQueries.list().queryKey,
        (old) => [
          {
            id: "temp-" + Date.now(),
            title: newTodo.title,
            completed: false,
            createdAt: (/* @__PURE__ */ new Date()).toISOString(),
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          },
          ...old || []
        ]
      );
      return { previousTodos };
    },
    // Rollback on error
    onError: (_error, _newTodo, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(
          todoQueries.list().queryKey,
          context.previousTodos
        );
      }
    },
    // Update cache with server response (replace temp todo with real one)
    onSettled: (createdTodo) => {
      if (createdTodo) {
        queryClient.setQueryData(
          todoQueries.list().queryKey,
          (old) => (old || []).map(
            (todo) => todo.id.startsWith("temp-") ? createdTodo : todo
          )
        );
      }
    }
  });
}
function useUpdateTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["todos", "update"],
    mutationFn: (data) => updateTodo2({ data }),
    // Optimistic update: update todo in cache immediately
    onMutate: async ({ id, ...updates }) => {
      await queryClient.cancelQueries({ queryKey: todoQueries.list().queryKey });
      const previousTodos = queryClient.getQueryData(
        todoQueries.list().queryKey
      );
      queryClient.setQueryData(
        todoQueries.list().queryKey,
        (old) => (old || []).map(
          (todo) => todo.id === id ? { ...todo, ...updates, updatedAt: (/* @__PURE__ */ new Date()).toISOString() } : todo
        )
      );
      return { previousTodos };
    },
    onError: (_error, _variables, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(
          todoQueries.list().queryKey,
          context.previousTodos
        );
      }
    },
    onSettled: (updatedTodo) => {
      if (updatedTodo) {
        queryClient.setQueryData(
          todoQueries.list().queryKey,
          (old) => (old || []).map(
            (todo) => todo.id === updatedTodo.id ? updatedTodo : todo
          )
        );
      }
    }
  });
}
function useDeleteTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["todos", "delete"],
    mutationFn: (id) => deleteTodo2({ data: { id } }),
    // Optimistic update: remove todo from cache immediately
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: todoQueries.list().queryKey });
      const previousTodos = queryClient.getQueryData(
        todoQueries.list().queryKey
      );
      queryClient.setQueryData(
        todoQueries.list().queryKey,
        (old) => old?.filter((todo) => todo.id !== id) || []
      );
      return { previousTodos };
    },
    onError: (_error, _id, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(
          todoQueries.list().queryKey,
          context.previousTodos
        );
      }
    },
    // Deletion already reflected in optimistic update, but onSettled ensures consistency
    onSettled: () => {
    }
  });
}
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx2(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx2(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx2(
    "div",
    {
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx2(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx2(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx2(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-accent animate-pulse rounded-md", className),
      ...props
    }
  );
}
function Empty({ className, ...props }) {
  return /* @__PURE__ */ jsx2(
    "div",
    {
      "data-slot": "empty",
      className: cn(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",
        className
      ),
      ...props
    }
  );
}
function EmptyHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx2(
    "div",
    {
      "data-slot": "empty-header",
      className: cn(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        className
      ),
      ...props
    }
  );
}
function EmptyMedia({
  className,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx2(
    "div",
    {
      "data-slot": "empty-icon",
      "data-variant": variant,
      className: cn(emptyMediaVariants({ variant, className })),
      ...props
    }
  );
}
function EmptyTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx2(
    "div",
    {
      "data-slot": "empty-title",
      className: cn("text-lg font-medium tracking-tight", className),
      ...props
    }
  );
}
function EmptyDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx2(
    "div",
    {
      "data-slot": "empty-description",
      className: cn(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        className
      ),
      ...props
    }
  );
}
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx2(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
function AddTodoForm() {
  const [title, setTitle] = useState("");
  const createTodo22 = useCreateTodo();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      createTodo22.mutate({ title: title.trim() });
      setTitle("");
    }
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "flex gap-2", children: [
    /* @__PURE__ */ jsx2(
      Input,
      {
        type: "text",
        placeholder: "Add a new todo...",
        value: title,
        onChange: (e) => setTitle(e.target.value),
        disabled: createTodo22.isPending,
        className: "flex-1"
      }
    ),
    /* @__PURE__ */ jsxs(Button, { type: "submit", disabled: createTodo22.isPending || !title.trim(), children: [
      /* @__PURE__ */ jsx2(Plus, { className: "w-4 h-4 mr-2" }),
      "Add"
    ] })
  ] });
}
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx2(
    CheckboxPrimitive.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx2(
        CheckboxPrimitive.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ jsx2(CheckIcon, { className: "size-3.5" })
        }
      )
    }
  );
}
function TodoItem({ todo }) {
  const updateTodo22 = useUpdateTodo();
  const deleteTodo22 = useDeleteTodo();
  const handleToggle = () => {
    updateTodo22.mutate({
      id: todo.id,
      completed: !todo.completed
    });
  };
  const handleDelete = () => {
    deleteTodo22.mutate(todo.id);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-4 rounded-lg border hover:border-border/80 transition-colors bg-card", children: [
    /* @__PURE__ */ jsx2(
      Checkbox,
      {
        checked: todo.completed,
        onCheckedChange: handleToggle,
        disabled: updateTodo22.isPending
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsx2(
        "p",
        {
          className: cn(
            "text-sm font-medium truncate",
            todo.completed && "line-through text-muted-foreground"
          ),
          children: todo.title
        }
      ),
      /* @__PURE__ */ jsx2("p", { className: "text-xs text-muted-foreground mt-1", children: new Date(todo.createdAt).toLocaleDateString() })
    ] }),
    todo.completed && /* @__PURE__ */ jsx2(Badge, { variant: "secondary", className: "text-xs", children: "Done" }),
    /* @__PURE__ */ jsx2(
      Button,
      {
        variant: "ghost",
        size: "icon",
        onClick: handleDelete,
        disabled: deleteTodo22.isPending,
        className: "text-muted-foreground hover:text-destructive",
        children: /* @__PURE__ */ jsx2(Trash2, { className: "w-4 h-4" })
      }
    )
  ] });
}
function TodoList() {
  const { data: todos, isLoading, error } = useGetTodos();
  if (error) throw error;
  const activeTodos = todos?.filter((todo) => !todo.completed) || [];
  const completedTodos = todos?.filter((todo) => todo.completed) || [];
  return /* @__PURE__ */ jsxs(Card, { className: "w-full max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsx2(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx2(CardTitle, { children: "My Todos" }),
        /* @__PURE__ */ jsx2(CardDescription, { children: "Manage your tasks with MongoDB + TanStack" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxs(Badge, { variant: "outline", children: [
          activeTodos.length,
          " active"
        ] }),
        /* @__PURE__ */ jsxs(Badge, { variant: "secondary", children: [
          completedTodos.length,
          " done"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
      /* @__PURE__ */ jsx2(AddTodoForm, {}),
      isLoading && /* @__PURE__ */ jsx2("div", { className: "space-y-3", children: [...Array(3)].map((_2, i) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex items-center gap-3 p-4 rounded-lg border",
          children: [
            /* @__PURE__ */ jsx2(Skeleton, { className: "w-5 h-5" }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-2", children: [
              /* @__PURE__ */ jsx2(Skeleton, { className: "h-4 w-3/4" }),
              /* @__PURE__ */ jsx2(Skeleton, { className: "h-3 w-1/4" })
            ] })
          ]
        },
        i
      )) }),
      !isLoading && todos && todos.length === 0 && /* @__PURE__ */ jsx2(Empty, { children: /* @__PURE__ */ jsxs(EmptyHeader, { children: [
        /* @__PURE__ */ jsx2(EmptyMedia, { variant: "icon", children: /* @__PURE__ */ jsx2(CheckSquare, {}) }),
        /* @__PURE__ */ jsx2(EmptyTitle, { children: "No todos yet" }),
        /* @__PURE__ */ jsx2(EmptyDescription, { children: "Add your first task to get started!" })
      ] }) }),
      !isLoading && activeTodos.length > 0 && /* @__PURE__ */ jsx2("div", { className: "space-y-3", children: activeTodos.map((todo) => /* @__PURE__ */ jsx2(TodoItem, { todo }, todo.id)) }),
      !isLoading && completedTodos.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx2("h3", { className: "text-sm font-medium text-muted-foreground mb-3 mt-6", children: "Completed" }),
        /* @__PURE__ */ jsx2("div", { className: "space-y-3", children: completedTodos.map((todo) => /* @__PURE__ */ jsx2(TodoItem, { todo }, todo.id)) })
      ] })
    ] })
  ] });
}
function TodosPage() {
  return /* @__PURE__ */ jsx2("div", { className: "min-h-screen bg-gradient-to-b from-background to-secondary/20 py-12 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx2("h1", { className: "text-4xl font-bold text-foreground mb-3", children: "Todo Demo" }),
      /* @__PURE__ */ jsx2("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "A full-stack CRUD application demonstrating MongoDB integration with TanStack Start. Features type-safe API routes, optimistic updates, and smart caching." })
    ] }),
    /* @__PURE__ */ jsx2(TodoList, {})
  ] }) });
}
var emptyMediaVariants;
var init_todos_0ywKcbWT = __esm({
  "dist/server/assets/todos-0ywKcbWT.js"() {
    "use strict";
    init_router_BLkbJw6K();
    init_badge_8GRzUCJL();
    init_server();
    init_mongodb_DBEA2zFe();
    init_types_Bn6jFS_B();
    emptyMediaVariants = cva2(
      "flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      {
        variants: {
          variant: {
            default: "bg-transparent",
            icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6"
          }
        },
        defaultVariants: {
          variant: "default"
        }
      }
    );
  }
});

// dist/server/assets/index-CRTxBryq.js
var index_CRTxBryq_exports = {};
__export(index_CRTxBryq_exports, {
  component: () => Home
});
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Database, ArrowRight, Shield, Zap } from "lucide-react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import "@tanstack/react-router-ssr-query";
import "@tanstack/react-router-devtools";
import "@tanstack/react-devtools";
import "@radix-ui/react-dialog";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dropdown-menu";
import "react";
import "@tanstack/react-query-devtools";
import "mongodb";
import "zod";
import "@tanstack/react-router/ssr/server";
function HoverCard({
  ...props
}) {
  return /* @__PURE__ */ jsx3(HoverCardPrimitive.Root, { "data-slot": "hover-card", ...props });
}
function HoverCardTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx3(HoverCardPrimitive.Trigger, { "data-slot": "hover-card-trigger", ...props });
}
function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx3(HoverCardPrimitive.Portal, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ jsx3(
    HoverCardPrimitive.Content,
    {
      "data-slot": "hover-card-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border-2 p-4 shadow-lg dark:shadow-2xl outline-hidden",
        className
      ),
      ...props
    }
  ) });
}
function Home() {
  const {
    data
  } = useSuspenseQuery({
    queryKey: ["mongodb-connection-status"],
    queryFn: () => checkMongoDBConnection2(),
    staleTime: 1e4,
    // Check every 10 seconds
    refetchInterval: 1e4
  });
  return /* @__PURE__ */ jsxs2("div", { className: "min-h-screen bg-gradient-to-b from-background to-secondary/20", children: [
    /* @__PURE__ */ jsxs2("section", { className: "max-w-5xl mx-auto px-6 pt-20 pb-16 text-center", children: [
      /* @__PURE__ */ jsxs2(Badge, { variant: "secondary", className: "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8", children: [
        /* @__PURE__ */ jsx3(Database, { className: "w-4 h-4" }),
        "MongoDB + TanStack Start Demo",
        /* @__PURE__ */ jsx3(Badge, { variant: data.connected ? "default" : "destructive", className: "ml-1", children: data.connected ? "Connected" : "Disconnected" })
      ] }),
      /* @__PURE__ */ jsxs2("h1", { className: "text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight", children: [
        "Type-safe full-stack",
        /* @__PURE__ */ jsx3("br", {}),
        /* @__PURE__ */ jsx3("span", { className: "bg-gradient-to-r from-[#00684A] to-[#00ED64] bg-clip-text text-transparent", children: "todos with MongoDB" })
      ] }),
      /* @__PURE__ */ jsx3("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed", children: "A demonstration of MongoDB integration with TanStack Start, featuring end-to-end type safety and serverless-optimized connection pooling." }),
      /* @__PURE__ */ jsx3(Link, { to: "/todos", children: /* @__PURE__ */ jsxs2(Button, { size: "lg", className: "group bg-[#00ED64] hover:bg-[#00ED64]/90 text-[#001E2B]", children: [
        "View Demo",
        /* @__PURE__ */ jsx3(ArrowRight, { className: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx3("section", { className: "max-w-5xl mx-auto px-6 pb-20", children: /* @__PURE__ */ jsxs2("div", { className: "grid md:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxs2(HoverCard, { children: [
        /* @__PURE__ */ jsx3(HoverCardTrigger, { asChild: true, children: /* @__PURE__ */ jsxs2("div", { className: "p-6 rounded-xl border bg-card hover:shadow-lg hover:border-[#00ED64] transition-all", children: [
          /* @__PURE__ */ jsx3("div", { className: "w-12 h-12 rounded-lg bg-[#00ED64]/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx3(Shield, { className: "w-6 h-6 text-[#00684A] dark:text-[#00ED64]" }) }),
          /* @__PURE__ */ jsx3("h3", { className: "text-lg font-semibold text-card-foreground mb-2", children: "End-to-End Type Safety" }),
          /* @__PURE__ */ jsx3("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "Fully typed from MongoDB documents to API routes to React components. No manual type assertions needed." })
        ] }) }),
        /* @__PURE__ */ jsx3(HoverCardContent, { className: "w-80", children: /* @__PURE__ */ jsxs2("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx3("h4", { className: "text-sm font-semibold", children: "Type Safety Features" }),
          /* @__PURE__ */ jsx3("p", { className: "text-sm text-muted-foreground", children: "Leverages TypeScript throughout the stack with Zod schemas for runtime validation, ensuring type consistency from database queries to UI components." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs2(HoverCard, { children: [
        /* @__PURE__ */ jsx3(HoverCardTrigger, { asChild: true, children: /* @__PURE__ */ jsxs2("div", { className: "p-6 rounded-xl border bg-card hover:shadow-lg hover:border-[#00ED64] transition-all", children: [
          /* @__PURE__ */ jsx3("div", { className: "w-12 h-12 rounded-lg bg-[#00ED64]/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx3(Database, { className: "w-6 h-6 text-[#00684A] dark:text-[#00ED64]" }) }),
          /* @__PURE__ */ jsx3("h3", { className: "text-lg font-semibold text-card-foreground mb-2", children: "Serverless Optimized" }),
          /* @__PURE__ */ jsx3("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "Connection pooling and caching patterns prevent connection exhaustion in serverless environments." })
        ] }) }),
        /* @__PURE__ */ jsx3(HoverCardContent, { className: "w-80", children: /* @__PURE__ */ jsxs2("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx3("h4", { className: "text-sm font-semibold", children: "Serverless Best Practices" }),
          /* @__PURE__ */ jsx3("p", { className: "text-sm text-muted-foreground", children: "Implements singleton connection pattern with global caching, configurable pool sizes, and automatic idle connection cleanup for optimal serverless performance." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs2(HoverCard, { children: [
        /* @__PURE__ */ jsx3(HoverCardTrigger, { asChild: true, children: /* @__PURE__ */ jsxs2("div", { className: "p-6 rounded-xl border bg-card hover:shadow-lg hover:border-[#00ED64] transition-all", children: [
          /* @__PURE__ */ jsx3("div", { className: "w-12 h-12 rounded-lg bg-[#00ED64]/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx3(Zap, { className: "w-6 h-6 text-[#00684A] dark:text-[#00ED64]" }) }),
          /* @__PURE__ */ jsx3("h3", { className: "text-lg font-semibold text-card-foreground mb-2", children: "Smart Caching" }),
          /* @__PURE__ */ jsx3("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "TanStack Query with optimistic updates, cache invalidation, and stale-while-revalidate strategies." })
        ] }) }),
        /* @__PURE__ */ jsx3(HoverCardContent, { className: "w-80", children: /* @__PURE__ */ jsxs2("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx3("h4", { className: "text-sm font-semibold", children: "Advanced Caching Strategy" }),
          /* @__PURE__ */ jsx3("p", { className: "text-sm text-muted-foreground", children: "Optimistic UI updates provide instant feedback while mutations are in flight. Automatic cache invalidation and background refetching keep data fresh." })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx3("footer", { className: "mt-12 border-t bg-gradient-to-b from-background to-secondary/20", children: /* @__PURE__ */ jsxs2("div", { className: "max-w-6xl mx-auto px-6 py-12", children: [
      /* @__PURE__ */ jsxs2("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsx3("h3", { className: "text-lg font-semibold mb-2", children: "Built with Modern Technologies" }),
        /* @__PURE__ */ jsx3("p", { className: "text-sm text-muted-foreground", children: "A powerful stack for type-safe full-stack development" })
      ] }),
      /* @__PURE__ */ jsxs2("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-8", children: [
        /* @__PURE__ */ jsxs2("a", { href: "https://tanstack.com/start", target: "_blank", rel: "noopener noreferrer", className: "flex flex-col items-center p-4 rounded-lg bg-card/50 border border-border/50 hover:border-border hover:bg-card transition-all group cursor-pointer", children: [
          /* @__PURE__ */ jsx3("span", { className: "text-xs text-muted-foreground mb-1", children: "Framework" }),
          /* @__PURE__ */ jsx3("span", { className: "font-semibold text-sm group-hover:text-foreground transition-colors", children: "TanStack Start" })
        ] }),
        /* @__PURE__ */ jsxs2("a", { href: "https://www.mongodb.com", target: "_blank", rel: "noopener noreferrer", className: "flex flex-col items-center p-4 rounded-lg bg-[#00ED64]/5 border border-[#00ED64]/20 hover:border-[#00ED64]/40 hover:bg-[#00ED64]/10 transition-all group cursor-pointer", children: [
          /* @__PURE__ */ jsx3("span", { className: "text-xs text-muted-foreground mb-1", children: "Database" }),
          /* @__PURE__ */ jsx3("span", { className: "font-bold text-sm group-hover:text-foreground transition-colors", children: "MongoDB" })
        ] }),
        /* @__PURE__ */ jsxs2("a", { href: "https://www.typescriptlang.org", target: "_blank", rel: "noopener noreferrer", className: "flex flex-col items-center p-4 rounded-lg bg-card/50 border border-border/50 hover:border-border hover:bg-card transition-all group cursor-pointer", children: [
          /* @__PURE__ */ jsx3("span", { className: "text-xs text-muted-foreground mb-1", children: "Language" }),
          /* @__PURE__ */ jsx3("span", { className: "font-semibold text-sm group-hover:text-foreground transition-colors", children: "TypeScript" })
        ] })
      ] }),
      /* @__PURE__ */ jsx3("div", { className: "text-center pt-6 border-t border-border/50", children: /* @__PURE__ */ jsx3("p", { className: "text-xs text-muted-foreground", children: "Demo application showcasing modern full-stack development patterns" }) })
    ] }) })
  ] });
}
var checkMongoDBConnection_createServerFn_handler2, checkMongoDBConnection2;
var init_index_CRTxBryq = __esm({
  "dist/server/assets/index-CRTxBryq.js"() {
    "use strict";
    init_router_BLkbJw6K();
    init_badge_8GRzUCJL();
    init_server();
    init_mongodb_DBEA2zFe();
    init_types_Bn6jFS_B();
    checkMongoDBConnection_createServerFn_handler2 = createServerRpc("src_server_mongodb-status_ts--checkMongoDBConnection_createServerFn_handler", (opts, signal) => {
      return checkMongoDBConnection2.__executeServer(opts, signal);
    });
    checkMongoDBConnection2 = createServerFn({
      method: "GET"
    }).handler(checkMongoDBConnection_createServerFn_handler2, async () => {
      try {
        if (!process.env.MONGODB_URI) {
          return {
            connected: false
          };
        }
        const {
          db
        } = await connectToDatabase();
        await db.admin().ping();
        return {
          connected: true
        };
      } catch (error) {
        return {
          connected: false
        };
      }
    });
  }
});

// dist/server/assets/router-BLkbJw6K.js
var router_BLkbJw6K_exports = {};
__export(router_BLkbJw6K_exports, {
  B: () => Button,
  a: () => cn,
  c: () => createTodo2,
  d: () => deleteTodo2,
  r: () => router,
  t: () => todoQueries,
  u: () => updateTodo2
});
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
import { Link as Link2, createRootRouteWithContext, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import { QueryClient, QueryClientProvider, queryOptions } from "@tanstack/react-query";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { XIcon, Sun, Moon, Menu, AlertCircle } from "lucide-react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Slot as Slot2 } from "@radix-ui/react-slot";
import { cva as cva3 } from "class-variance-authority";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { useState as useState2, useEffect, createContext, useContext, Component } from "react";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import { ObjectId as ObjectId2 } from "mongodb";
function getContext() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // Consider data fresh for 30 seconds (prevents immediate refetch on client after SSR)
        staleTime: 30 * 1e3,
        // Keep unused data in cache for 5 minutes
        gcTime: 5 * 60 * 1e3,
        // Retry failed requests 3 times with exponential backoff
        retry: 3,
        // Refetch on window focus for data freshness
        refetchOnWindowFocus: true,
        // Refetch on reconnect after network issues
        refetchOnReconnect: true
      },
      mutations: {
        // Retry mutations once on failure
        retry: 1
      }
    }
  });
  return {
    queryClient
  };
}
function Provider({
  children,
  queryClient
}) {
  return /* @__PURE__ */ jsx4(QueryClientProvider, { client: queryClient, children });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx4(SheetPrimitive.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx4(SheetPrimitive.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx4(SheetPrimitive.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx4(
    SheetPrimitive.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}) {
  return /* @__PURE__ */ jsxs3(SheetPortal, { children: [
    /* @__PURE__ */ jsx4(SheetOverlay, {}),
    /* @__PURE__ */ jsxs3(
      SheetPrimitive.Content,
      {
        "data-slot": "sheet-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxs3(SheetPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ jsx4(XIcon, { className: "size-4" }),
            /* @__PURE__ */ jsx4("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx4(
    "div",
    {
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-1.5 p-4", className),
      ...props
    }
  );
}
function SheetTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx4(
    SheetPrimitive.Title,
    {
      "data-slot": "sheet-title",
      className: cn("text-foreground font-semibold", className),
      ...props
    }
  );
}
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot2 : "button";
  return /* @__PURE__ */ jsx4(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ jsx4(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx4(
    DropdownMenuPrimitive.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...props
    }
  );
}
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx4(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx4(
    DropdownMenuPrimitive.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      ),
      ...props
    }
  ) });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx4(
    DropdownMenuPrimitive.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function getCookie2(name) {
  if (typeof document === "undefined") return void 0;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift();
}
function setCookie(name, value) {
  if (typeof document === "undefined") return;
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `${name}=${value}; max-age=${maxAge}; path=/; samesite=lax`;
}
function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "ui-theme",
  ...props
}) {
  const [theme, setTheme] = useState2(
    () => {
      if (typeof window === "undefined") return defaultTheme;
      const cookieTheme = getCookie2(storageKey);
      return cookieTheme ?? defaultTheme;
    }
  );
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
      return;
    }
    root.classList.add(theme);
  }, [theme]);
  useEffect(() => {
    if (theme !== "system") return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(e.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);
  const value = {
    theme,
    setTheme: (newTheme) => {
      setCookie(storageKey, newTheme);
      setTheme(newTheme);
    }
  };
  return /* @__PURE__ */ jsx4(ThemeProviderContext.Provider, { ...props, value, children });
}
function ThemeToggle() {
  const { setTheme } = useTheme();
  return /* @__PURE__ */ jsxs3(DropdownMenu, { children: [
    /* @__PURE__ */ jsx4(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs3(Button, { variant: "ghost", size: "icon", children: [
      /* @__PURE__ */ jsx4(Sun, { className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
      /* @__PURE__ */ jsx4(Moon, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
      /* @__PURE__ */ jsx4("span", { className: "sr-only", children: "Toggle theme" })
    ] }) }),
    /* @__PURE__ */ jsxs3(DropdownMenuContent, { align: "end", children: [
      /* @__PURE__ */ jsx4(DropdownMenuItem, { onClick: () => setTheme("light"), children: "Light" }),
      /* @__PURE__ */ jsx4(DropdownMenuItem, { onClick: () => setTheme("dark"), children: "Dark" }),
      /* @__PURE__ */ jsx4(DropdownMenuItem, { onClick: () => setTheme("system"), children: "System" })
    ] })
  ] });
}
function Header() {
  return /* @__PURE__ */ jsx4("header", { className: "sticky top-0 z-50 w-full px-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", children: /* @__PURE__ */ jsxs3("div", { className: "container flex h-14 max-w-screen-2xl items-center", children: [
    /* @__PURE__ */ jsxs3(Sheet, { children: [
      /* @__PURE__ */ jsx4(SheetTrigger, { asChild: true, className: "mr-2 md:hidden", children: /* @__PURE__ */ jsx4(Button, { variant: "ghost", size: "icon", "aria-label": "Open menu", children: /* @__PURE__ */ jsx4(Menu, { className: "h-5 w-5" }) }) }),
      /* @__PURE__ */ jsxs3(SheetContent, { side: "left", className: "w-[300px] sm:w-[400px]", children: [
        /* @__PURE__ */ jsx4(SheetHeader, { children: /* @__PURE__ */ jsx4(SheetTitle, { children: "Navigation" }) }),
        /* @__PURE__ */ jsxs3("nav", { className: "flex flex-col gap-4 mt-8", children: [
          /* @__PURE__ */ jsx4(
            Link2,
            {
              to: "/",
              className: "text-foreground/60 transition-colors hover:text-foreground text-sm font-medium",
              activeProps: {
                className: "text-foreground transition-colors hover:text-foreground text-sm font-medium"
              },
              children: "Home"
            }
          ),
          /* @__PURE__ */ jsx4(
            Link2,
            {
              to: "/todos",
              className: "text-foreground/60 transition-colors hover:text-foreground text-sm font-medium",
              activeProps: {
                className: "text-foreground transition-colors hover:text-foreground text-sm font-medium"
              },
              children: "Todo Demo"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx4(Link2, { to: "/", className: "mr-6 flex items-center space-x-2", children: /* @__PURE__ */ jsx4(
      "img",
      {
        src: "/tanstack-word-logo-white.svg",
        alt: "TanStack",
        className: "h-6 dark:invert-0 invert"
      }
    ) }),
    /* @__PURE__ */ jsxs3("nav", { className: "hidden md:flex items-center gap-6 text-sm", children: [
      /* @__PURE__ */ jsx4(
        Link2,
        {
          to: "/",
          className: "text-foreground/60 transition-colors hover:text-foreground font-medium",
          activeProps: {
            className: "text-foreground transition-colors hover:text-foreground font-medium"
          },
          children: "Home"
        }
      ),
      /* @__PURE__ */ jsx4(
        Link2,
        {
          to: "/todos",
          className: "text-foreground/60 transition-colors hover:text-foreground font-medium",
          activeProps: {
            className: "text-foreground transition-colors hover:text-foreground font-medium"
          },
          children: "Todo Demo"
        }
      )
    ] }),
    /* @__PURE__ */ jsx4("div", { className: "flex flex-1 items-center justify-end space-x-2", children: /* @__PURE__ */ jsx4(ThemeToggle, {}) })
  ] }) });
}
function Alert({
  className,
  variant,
  ...props
}) {
  return /* @__PURE__ */ jsx4(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: cn(alertVariants({ variant }), className),
      ...props
    }
  );
}
function AlertTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx4(
    "div",
    {
      "data-slot": "alert-title",
      className: cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      ),
      ...props
    }
  );
}
function AlertDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx4(
    "div",
    {
      "data-slot": "alert-description",
      className: cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      ),
      ...props
    }
  );
}
function getErrorTips() {
  return [
    "Check your MONGODB_URI in the .env file",
    "Verify your MongoDB credentials (username/password)",
    "Ensure your IP address is whitelisted in MongoDB Atlas",
    "Confirm MongoDB server is running and accessible"
  ];
}
function RootDocument({ children }) {
  const { theme } = Route$2.useRouteContext();
  const htmlClassName = theme === "dark" ? "dark" : theme === "light" ? "light" : void 0;
  return /* @__PURE__ */ jsxs3("html", { lang: "en", className: htmlClassName, suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsxs3("head", { children: [
      /* @__PURE__ */ jsx4(HeadContent, {}),
      /* @__PURE__ */ jsx4(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `(function(){const e="ui-theme",t="; "+document.cookie,n=t.split("; "+e+"=");let o="system";if(2===n.length){const e=n.pop().split(";").shift();e&&(o=e)}const c=document.documentElement;if("dark"===o)c.classList.add("dark");else if("light"===o)c.classList.add("light");else if("system"===o){const e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";c.classList.add(e)}})();`
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxs3("body", { children: [
      /* @__PURE__ */ jsx4(ThemeProvider, { defaultTheme: "system", storageKey: "ui-theme", children: /* @__PURE__ */ jsxs3(ErrorBoundary, { children: [
        /* @__PURE__ */ jsx4(Header, {}),
        children,
        /* @__PURE__ */ jsx4(
          TanStackDevtools,
          {
            config: {
              position: "bottom-right"
            },
            plugins: [
              {
                name: "Tanstack Router",
                render: /* @__PURE__ */ jsx4(TanStackRouterDevtoolsPanel, {})
              },
              TanStackQueryDevtools
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx4(Scripts, {})
    ] })
  ] });
}
var buttonVariants, ThemeProviderContext, useTheme, alertVariants, ErrorBoundary, TanStackQueryDevtools, appCss, THEME_COOKIE_NAME2, getServerTheme_createServerFn_handler2, getServerTheme2, Route$2, getTodos_createServerFn_handler2, getTodos2, createTodo_createServerFn_handler2, createTodo2, updateTodo_createServerFn_handler2, updateTodo2, deleteTodo_createServerFn_handler2, deleteTodo2, todoQueries, $$splitComponentImporter$1, Route$1, $$splitComponentImporter, Route, TodosRoute, IndexRoute, rootRouteChildren, routeTree, getRouter, router;
var init_router_BLkbJw6K = __esm({
  "dist/server/assets/router-BLkbJw6K.js"() {
    "use strict";
    init_server();
    init_mongodb_DBEA2zFe();
    init_types_Bn6jFS_B();
    buttonVariants = cva3(
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
      {
        variants: {
          variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
          },
          size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
          }
        },
        defaultVariants: {
          variant: "default",
          size: "default"
        }
      }
    );
    ThemeProviderContext = createContext(
      void 0
    );
    useTheme = () => {
      const context = useContext(ThemeProviderContext);
      if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
      }
      return context;
    };
    alertVariants = cva3(
      "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
      {
        variants: {
          variant: {
            default: "bg-card text-card-foreground",
            destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
          }
        },
        defaultVariants: {
          variant: "default"
        }
      }
    );
    ErrorBoundary = class extends Component {
      constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
      }
      static getDerivedStateFromError(error) {
        return { hasError: true, error };
      }
      componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
      }
      reset = () => {
        this.setState({ hasError: false, error: null });
      };
      render() {
        if (this.state.hasError && this.state.error) {
          if (this.props.fallback) {
            return this.props.fallback(this.state.error, this.reset);
          }
          return /* @__PURE__ */ jsx4("div", { className: "flex flex-col items-center justify-center min-h-[60vh] px-4 max-w-lg mx-auto", children: /* @__PURE__ */ jsxs3(Alert, { variant: "destructive", className: "border-2", children: [
            /* @__PURE__ */ jsx4(AlertCircle, {}),
            /* @__PURE__ */ jsx4(AlertTitle, { children: this.state.error.message }),
            /* @__PURE__ */ jsxs3(AlertDescription, { children: [
              /* @__PURE__ */ jsx4("p", { children: "Please check the following:" }),
              /* @__PURE__ */ jsx4("ul", { className: "list-inside list-disc text-sm", children: getErrorTips().map((tip, index) => /* @__PURE__ */ jsx4("li", { className: "leading-relaxed", children: tip }, index)) }),
              /* @__PURE__ */ jsx4(Button, { onClick: this.reset, variant: "default", className: "mt-4", children: "Try again" })
            ] })
          ] }) });
        }
        return this.props.children;
      }
    };
    TanStackQueryDevtools = {
      name: "Tanstack Query",
      render: /* @__PURE__ */ jsx4(ReactQueryDevtoolsPanel, {})
    };
    appCss = "/assets/styles-Cb5HZsEn.css";
    THEME_COOKIE_NAME2 = "ui-theme";
    getServerTheme_createServerFn_handler2 = createServerRpc("src_server_theme_ts--getServerTheme_createServerFn_handler", (opts, signal) => {
      return getServerTheme2.__executeServer(opts, signal);
    });
    getServerTheme2 = createServerFn().handler(getServerTheme_createServerFn_handler2, () => {
      const theme = getCookie(THEME_COOKIE_NAME2);
      if (theme === "dark" || theme === "light" || theme === "system") {
        return theme;
      }
      return "system";
    });
    Route$2 = createRootRouteWithContext()({
      beforeLoad: async () => {
        const theme = await getServerTheme2();
        return { theme };
      },
      head: () => ({
        meta: [
          {
            charSet: "utf-8"
          },
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
          },
          {
            name: "color-scheme",
            content: "light dark"
          },
          {
            title: "TanStack Start Starter"
          }
        ],
        links: [
          {
            rel: "stylesheet",
            href: appCss
          }
        ]
      }),
      notFoundComponent: () => /* @__PURE__ */ jsx4("div", { className: "flex flex-col items-center justify-center min-h-[60vh] px-4 max-w-md mx-auto", children: /* @__PURE__ */ jsxs3(Alert, { className: "border-2", children: [
        /* @__PURE__ */ jsx4(AlertCircle, { className: "h-5 w-5" }),
        /* @__PURE__ */ jsx4(AlertTitle, { className: "text-xl", children: "404 - Page Not Found" }),
        /* @__PURE__ */ jsxs3(AlertDescription, { className: "mt-2", children: [
          /* @__PURE__ */ jsx4("p", { className: "mb-4", children: "The page you're looking for doesn't exist." }),
          /* @__PURE__ */ jsx4(Button, { asChild: true, variant: "default", className: "mt-2", children: /* @__PURE__ */ jsx4("a", { href: "/", children: "Go back home" }) })
        ] })
      ] }) }),
      shellComponent: RootDocument
    });
    getTodos_createServerFn_handler2 = createServerRpc("src_server_todos_ts--getTodos_createServerFn_handler", (opts, signal) => {
      return getTodos2.__executeServer(opts, signal);
    });
    getTodos2 = createServerFn().handler(getTodos_createServerFn_handler2, async () => {
      const collection = await getTodosCollection();
      const todos = await collection.find({}).sort({
        createdAt: -1
      }).toArray();
      return todos.map(todoToResponse);
    });
    createTodo_createServerFn_handler2 = createServerRpc("src_server_todos_ts--createTodo_createServerFn_handler", (opts, signal) => {
      return createTodo2.__executeServer(opts, signal);
    });
    createTodo2 = createServerFn({
      method: "POST"
    }).inputValidator(CreateTodoSchema).handler(createTodo_createServerFn_handler2, async ({
      data
    }) => {
      const collection = await getTodosCollection();
      const now = /* @__PURE__ */ new Date();
      const newTodo = {
        title: data.title,
        completed: false,
        createdAt: now,
        updatedAt: now
      };
      const result = await collection.insertOne(newTodo);
      const createdTodo = {
        id: result.insertedId.toString(),
        title: newTodo.title,
        completed: newTodo.completed,
        createdAt: newTodo.createdAt.toISOString(),
        updatedAt: newTodo.updatedAt.toISOString()
      };
      return createdTodo;
    });
    updateTodo_createServerFn_handler2 = createServerRpc("src_server_todos_ts--updateTodo_createServerFn_handler", (opts, signal) => {
      return updateTodo2.__executeServer(opts, signal);
    });
    updateTodo2 = createServerFn({
      method: "POST"
    }).inputValidator(UpdateTodoSchema).handler(updateTodo_createServerFn_handler2, async ({
      data
    }) => {
      const collection = await getTodosCollection();
      const {
        id,
        ...updates
      } = data;
      if (!updates.title && updates.completed === void 0) {
        throw new Error("Must provide at least one field to update (title or completed)");
      }
      const updateData = {
        updatedAt: /* @__PURE__ */ new Date()
      };
      if (updates.title !== void 0) {
        updateData.title = updates.title;
      }
      if (updates.completed !== void 0) {
        updateData.completed = updates.completed;
      }
      const result = await collection.findOneAndUpdate({
        _id: new ObjectId2(id)
      }, {
        $set: updateData
      }, {
        returnDocument: "after"
      });
      if (!result) {
        throw new Error(`Todo with id ${id} not found`);
      }
      return todoToResponse(result);
    });
    deleteTodo_createServerFn_handler2 = createServerRpc("src_server_todos_ts--deleteTodo_createServerFn_handler", (opts, signal) => {
      return deleteTodo2.__executeServer(opts, signal);
    });
    deleteTodo2 = createServerFn({
      method: "POST"
    }).inputValidator(DeleteTodoSchema).handler(deleteTodo_createServerFn_handler2, async ({
      data
    }) => {
      const collection = await getTodosCollection();
      const result = await collection.deleteOne({
        _id: new ObjectId2(data.id)
      });
      if (result.deletedCount === 0) {
        throw new Error(`Todo with id ${data.id} not found`);
      }
      return;
    });
    todoQueries = {
      /**
       * Query configuration for fetching all todos
       * Uses server function for type-safe data fetching
       */
      list: () => queryOptions({
        queryKey: ["todos", "list"],
        queryFn: () => getTodos2()
        // staleTime and gcTime are configured globally in root-provider.tsx
        // Override here only if this query needs different settings
      })
    };
    $$splitComponentImporter$1 = () => Promise.resolve().then(() => (init_todos_0ywKcbWT(), todos_0ywKcbWT_exports));
    Route$1 = createFileRoute("/todos")({
      // Prefetch todos data on the server for faster initial load
      loader: ({
        context
      }) => context.queryClient.ensureQueryData(todoQueries.list()),
      component: lazyRouteComponent($$splitComponentImporter$1, "component")
    });
    $$splitComponentImporter = () => Promise.resolve().then(() => (init_index_CRTxBryq(), index_CRTxBryq_exports));
    Route = createFileRoute("/")({
      component: lazyRouteComponent($$splitComponentImporter, "component")
    });
    TodosRoute = Route$1.update({
      id: "/todos",
      path: "/todos",
      getParentRoute: () => Route$2
    });
    IndexRoute = Route.update({
      id: "/",
      path: "/",
      getParentRoute: () => Route$2
    });
    rootRouteChildren = {
      IndexRoute,
      TodosRoute
    };
    routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
    getRouter = () => {
      const rqContext = getContext();
      const router2 = createRouter({
        routeTree,
        context: { ...rqContext },
        defaultPreload: "intent",
        Wrap: (props) => {
          return /* @__PURE__ */ jsx4(Provider, { ...rqContext, children: props.children });
        }
      });
      setupRouterSsrQueryIntegration({ router: router2, queryClient: rqContext.queryClient });
      return router2;
    };
    router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      getRouter
    }, Symbol.toStringTag, { value: "Module" }));
  }
});

// dist/server/assets/start-HYkvq4Ni.js
var start_HYkvq4Ni_exports = {};
__export(start_HYkvq4Ni_exports, {
  startInstance: () => startInstance
});
var startInstance;
var init_start_HYkvq4Ni = __esm({
  "dist/server/assets/start-HYkvq4Ni.js"() {
    "use strict";
    startInstance = void 0;
  }
});

// dist/server/server.js
import { AsyncLocalStorage } from "node:async_hooks";
import { jsx as jsx5 } from "react/jsx-runtime";
import { defineHandlerCallback, renderRouterToStream } from "@tanstack/react-router/ssr/server";
import { RouterProvider } from "@tanstack/react-router";
function StartServer(props) {
  return /* @__PURE__ */ jsx5(RouterProvider, { router: props.router });
}
function createHistory(opts) {
  let location = opts.getLocation();
  const subscribers = /* @__PURE__ */ new Set();
  const notify = (action) => {
    location = opts.getLocation();
    subscribers.forEach((subscriber) => subscriber({ location, action }));
  };
  const handleIndexChange = (action) => {
    if (opts.notifyOnIndexChange ?? true) notify(action);
    else location = opts.getLocation();
  };
  const tryNavigation = async ({
    task,
    navigateOpts,
    ...actionInfo
  }) => {
    const ignoreBlocker = navigateOpts?.ignoreBlocker ?? false;
    if (ignoreBlocker) {
      task();
      return;
    }
    const blockers = opts.getBlockers?.() ?? [];
    const isPushOrReplace = actionInfo.type === "PUSH" || actionInfo.type === "REPLACE";
    if (typeof document !== "undefined" && blockers.length && isPushOrReplace) {
      for (const blocker of blockers) {
        const nextLocation = parseHref(actionInfo.path, actionInfo.state);
        const isBlocked = await blocker.blockerFn({
          currentLocation: location,
          nextLocation,
          action: actionInfo.type
        });
        if (isBlocked) {
          opts.onBlocked?.();
          return;
        }
      }
    }
    task();
  };
  return {
    get location() {
      return location;
    },
    get length() {
      return opts.getLength();
    },
    subscribers,
    subscribe: (cb) => {
      subscribers.add(cb);
      return () => {
        subscribers.delete(cb);
      };
    },
    push: (path, state, navigateOpts) => {
      const currentIndex = location.state[stateIndexKey];
      state = assignKeyAndIndex(currentIndex + 1, state);
      tryNavigation({
        task: () => {
          opts.pushState(path, state);
          notify({ type: "PUSH" });
        },
        navigateOpts,
        type: "PUSH",
        path,
        state
      });
    },
    replace: (path, state, navigateOpts) => {
      const currentIndex = location.state[stateIndexKey];
      state = assignKeyAndIndex(currentIndex, state);
      tryNavigation({
        task: () => {
          opts.replaceState(path, state);
          notify({ type: "REPLACE" });
        },
        navigateOpts,
        type: "REPLACE",
        path,
        state
      });
    },
    go: (index, navigateOpts) => {
      tryNavigation({
        task: () => {
          opts.go(index);
          handleIndexChange({ type: "GO", index });
        },
        navigateOpts,
        type: "GO"
      });
    },
    back: (navigateOpts) => {
      tryNavigation({
        task: () => {
          opts.back(navigateOpts?.ignoreBlocker ?? false);
          handleIndexChange({ type: "BACK" });
        },
        navigateOpts,
        type: "BACK"
      });
    },
    forward: (navigateOpts) => {
      tryNavigation({
        task: () => {
          opts.forward(navigateOpts?.ignoreBlocker ?? false);
          handleIndexChange({ type: "FORWARD" });
        },
        navigateOpts,
        type: "FORWARD"
      });
    },
    canGoBack: () => location.state[stateIndexKey] !== 0,
    createHref: (str) => opts.createHref(str),
    block: (blocker) => {
      if (!opts.setBlockers) return () => {
      };
      const blockers = opts.getBlockers?.() ?? [];
      opts.setBlockers([...blockers, blocker]);
      return () => {
        const blockers2 = opts.getBlockers?.() ?? [];
        opts.setBlockers?.(blockers2.filter((b) => b !== blocker));
      };
    },
    flush: () => opts.flush?.(),
    destroy: () => opts.destroy?.(),
    notify
  };
}
function assignKeyAndIndex(index, state) {
  if (!state) {
    state = {};
  }
  const key = createRandomKey();
  return {
    ...state,
    key,
    // TODO: Remove in v2 - use __TSR_key instead
    __TSR_key: key,
    [stateIndexKey]: index
  };
}
function createMemoryHistory(opts = {
  initialEntries: ["/"]
}) {
  const entries = opts.initialEntries;
  let index = opts.initialIndex ? Math.min(Math.max(opts.initialIndex, 0), entries.length - 1) : entries.length - 1;
  const states = entries.map(
    (_entry, index2) => assignKeyAndIndex(index2, void 0)
  );
  const getLocation = () => parseHref(entries[index], states[index]);
  return createHistory({
    getLocation,
    getLength: () => entries.length,
    pushState: (path, state) => {
      if (index < entries.length - 1) {
        entries.splice(index + 1);
        states.splice(index + 1);
      }
      states.push(state);
      entries.push(path);
      index = Math.max(entries.length - 1, 0);
    },
    replaceState: (path, state) => {
      states[index] = state;
      entries[index] = path;
    },
    back: () => {
      index = Math.max(index - 1, 0);
    },
    forward: () => {
      index = Math.min(index + 1, entries.length - 1);
    },
    go: (n) => {
      index = Math.min(Math.max(index + n, 0), entries.length - 1);
    },
    createHref: (path) => path
  });
}
function parseHref(href, state) {
  const hashIndex = href.indexOf("#");
  const searchIndex = href.indexOf("?");
  const addedKey = createRandomKey();
  return {
    href,
    pathname: href.substring(
      0,
      hashIndex > 0 ? searchIndex > 0 ? Math.min(hashIndex, searchIndex) : hashIndex : searchIndex > 0 ? searchIndex : href.length
    ),
    hash: hashIndex > -1 ? href.substring(hashIndex) : "",
    search: searchIndex > -1 ? href.slice(searchIndex, hashIndex === -1 ? void 0 : hashIndex) : "",
    state: state || { [stateIndexKey]: 0, key: addedKey, __TSR_key: addedKey }
  };
}
function createRandomKey() {
  return (Math.random() + 1).toString(36).substring(7);
}
function parse(str, options2) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = {};
  const opt = {};
  const dec = opt.decode || decode;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (opt?.filter && !opt?.filter(key)) {
      index = endIdx + 1;
      continue;
    }
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function decode(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}
function splitSetCookieString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitSetCookieString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start));
    }
  }
  return cookiesStrings;
}
function toHeadersInstance(init) {
  if (init instanceof Headers) {
    return new Headers(init);
  } else if (Array.isArray(init)) {
    return new Headers(init);
  } else if (typeof init === "object") {
    return new Headers(init);
  } else {
    return new Headers();
  }
}
function mergeHeaders(...headers) {
  return headers.reduce((acc, header) => {
    const headersInstance = toHeadersInstance(header);
    for (const [key, value] of headersInstance.entries()) {
      if (key === "set-cookie") {
        const splitCookies = splitSetCookieString(value);
        splitCookies.forEach((cookie) => acc.append("set-cookie", cookie));
      } else {
        acc.set(key, value);
      }
    }
    return acc;
  }, new Headers());
}
function json(payload, init) {
  return new Response(JSON.stringify(payload), {
    ...init,
    headers: mergeHeaders(
      { "content-type": "application/json" },
      init?.headers
    )
  });
}
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix);
  }
  var provided = typeof message === "function" ? message() : message;
  var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
  throw new Error(value);
}
function createControlledPromise(onResolve) {
  let resolveLoadPromise;
  let rejectLoadPromise;
  const controlledPromise = new Promise((resolve, reject) => {
    resolveLoadPromise = resolve;
    rejectLoadPromise = reject;
  });
  controlledPromise.status = "pending";
  controlledPromise.resolve = (value) => {
    controlledPromise.status = "resolved";
    controlledPromise.value = value;
    resolveLoadPromise(value);
  };
  controlledPromise.reject = (e) => {
    controlledPromise.status = "rejected";
    rejectLoadPromise(e);
  };
  return controlledPromise;
}
function isNotFound(obj) {
  return !!obj?.isNotFound;
}
function isRedirect(obj) {
  return obj instanceof Response && !!obj.options;
}
function isResolvedRedirect(obj) {
  return isRedirect(obj) && !!obj.options.href;
}
function executeRewriteInput(rewrite, url) {
  const res = rewrite?.input?.({ url });
  if (res) {
    if (typeof res === "string") {
      return new URL(res);
    } else if (res instanceof URL) {
      return res;
    }
  }
  return url;
}
function Nr(o) {
  switch (o) {
    case '"':
      return '\\"';
    case "\\":
      return "\\\\";
    case `
`:
      return "\\n";
    case "\r":
      return "\\r";
    case "\b":
      return "\\b";
    case "	":
      return "\\t";
    case "\f":
      return "\\f";
    case "<":
      return "\\x3C";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return;
  }
}
function d(o) {
  let e = "", r = 0, t;
  for (let n = 0, a = o.length; n < a; n++) t = Nr(o[n]), t && (e += o.slice(r, n) + t, r = n + 1);
  return r === 0 ? e = o : e += o.slice(r), e;
}
function br(o) {
  switch (o) {
    case "\\\\":
      return "\\";
    case '\\"':
      return '"';
    case "\\n":
      return `
`;
    case "\\r":
      return "\r";
    case "\\b":
      return "\b";
    case "\\t":
      return "	";
    case "\\f":
      return "\f";
    case "\\x3C":
      return "<";
    case "\\u2028":
      return "\u2028";
    case "\\u2029":
      return "\u2029";
    default:
      return o;
  }
}
function N(o) {
  return o.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, br);
}
function xr(o) {
  return o == null ? `${ae}=${ae}||[]` : `(${ae}=${ae}||{})["${d(o)}"]=[]`;
}
function f(o, e) {
  if (!o) throw e;
}
function je(o) {
  return Be.has(o);
}
function Ar(o) {
  return C.has(o);
}
function Ke(o) {
  return f(je(o), new ie(o)), Be.get(o);
}
function Je(o) {
  return f(Ar(o), new le(o)), C.get(o);
}
function Hr(o) {
  return o;
}
function Ye(o, e) {
  for (let r = 0, t = e.length; r < t; r++) {
    let n = e[r];
    o.has(n) || (o.add(n), n.extends && Ye(o, n.extends));
  }
}
function m(o) {
  if (o) {
    let e = /* @__PURE__ */ new Set();
    return Ye(e, o), [...e];
  }
}
function u$1(o, e, r, t, n, a, i, l, c, p2, h, X) {
  return { t: o, i: e, s: r, l: t, c: n, m: a, p: i, e: l, a: c, f: p2, b: h, o: X };
}
function x(o) {
  return u$1(2, s, o, s, s, s, s, s, s, s, s, s);
}
function me(o) {
  return o instanceof EvalError ? 1 : o instanceof RangeError ? 2 : o instanceof ReferenceError ? 3 : o instanceof SyntaxError ? 4 : o instanceof TypeError ? 5 : o instanceof URIError ? 6 : 0;
}
function wr(o) {
  let e = ue[me(o)];
  return o.name !== e ? { name: o.name } : o.constructor.name !== e ? { name: o.constructor.name } : {};
}
function j(o, e) {
  let r = wr(o), t = Object.getOwnPropertyNames(o);
  for (let n = 0, a = t.length, i; n < a; n++) i = t[n], i !== "name" && i !== "message" && (i === "stack" ? e & 4 && (r = r || {}, r[i] = o[i]) : (r = r || {}, r[i] = o[i]));
  return r;
}
function fe(o) {
  return Object.isFrozen(o) ? 3 : Object.isSealed(o) ? 2 : Object.isExtensible(o) ? 0 : 1;
}
function ge(o) {
  switch (o) {
    case Number.POSITIVE_INFINITY:
      return Qe;
    case Number.NEGATIVE_INFINITY:
      return er;
  }
  return o !== o ? rr : Object.is(o, -0) ? Xe : u$1(0, s, o, s, s, s, s, s, s, s, s, s);
}
function w(o) {
  return u$1(1, s, d(o), s, s, s, s, s, s, s, s, s);
}
function Se(o) {
  return u$1(3, s, "" + o, s, s, s, s, s, s, s, s, s);
}
function sr(o) {
  return u$1(4, o, s, s, s, s, s, s, s, s, s, s);
}
function he(o, e) {
  let r = e.valueOf();
  return u$1(5, o, r !== r ? "" : e.toISOString(), s, s, s, s, s, s, s, s, s);
}
function ye(o, e) {
  return u$1(6, o, s, s, d(e.source), e.flags, s, s, s, s, s, s);
}
function ve(o, e) {
  let r = new Uint8Array(e), t = r.length, n = new Array(t);
  for (let a = 0; a < t; a++) n[a] = r[a];
  return u$1(19, o, n, s, s, s, s, s, s, s, s, s);
}
function or(o, e) {
  return u$1(17, o, ce[e], s, s, s, s, s, s, s, s, s);
}
function nr(o, e) {
  return u$1(18, o, d(Ke(e)), s, s, s, s, s, s, s, s, s);
}
function _(o, e, r) {
  return u$1(25, o, r, s, d(e), s, s, s, s, s, s, s);
}
function Ne(o, e, r) {
  return u$1(9, o, s, e.length, s, s, s, s, r, s, s, fe(e));
}
function be(o, e) {
  return u$1(21, o, s, s, s, s, s, s, s, e, s, s);
}
function xe(o, e, r) {
  return u$1(15, o, s, e.length, e.constructor.name, s, s, s, s, r, e.byteOffset, s);
}
function Ie(o, e, r) {
  return u$1(16, o, s, e.length, e.constructor.name, s, s, s, s, r, e.byteOffset, s);
}
function Ae(o, e, r) {
  return u$1(20, o, s, e.byteLength, s, s, s, s, s, r, e.byteOffset, s);
}
function we(o, e, r) {
  return u$1(13, o, me(e), s, s, d(e.message), r, s, s, s, s, s);
}
function Ee(o, e, r) {
  return u$1(14, o, me(e), s, s, d(e.message), r, s, s, s, s, s);
}
function Pe(o, e, r) {
  return u$1(7, o, s, e, s, s, s, s, r, s, s, s);
}
function M(o, e) {
  return u$1(28, s, s, s, s, s, s, s, [o, e], s, s, s);
}
function U(o, e) {
  return u$1(30, s, s, s, s, s, s, s, [o, e], s, s, s);
}
function L(o, e, r) {
  return u$1(31, o, s, s, s, s, s, s, r, e, s, s);
}
function Re(o, e) {
  return u$1(32, o, s, s, s, s, s, s, s, e, s, s);
}
function Oe(o, e) {
  return u$1(33, o, s, s, s, s, s, s, s, e, s, s);
}
function Ce(o, e) {
  return u$1(34, o, s, s, s, s, s, s, s, e, s, s);
}
function Er(o, e) {
  return e instanceof Error ? `Seroval caught an error during the ${o} process.
  
${e.name}
${e.message}

- For more information, please check the "cause" property of this error.
- If you believe this is an error in Seroval, please submit an issue at https://github.com/lxsmnsyc/seroval/issues/new` : `Seroval caught an error during the ${o} process.

"${_e.call(e)}"

For more information, please check the "cause" property of this error.`;
}
function z$1(o, e, r) {
  return o & 2 ? (e.length === 1 ? e[0] : "(" + e.join(",") + ")") + "=>" + (r.startsWith("{") ? "(" + r + ")" : r) : "function(" + e.join(",") + "){return " + r + "}";
}
function S(o, e, r) {
  return o & 2 ? (e.length === 1 ? e[0] : "(" + e.join(",") + ")") + "=>{" + r + "}" : "function(" + e.join(",") + "){" + r + "}";
}
function Pr(o) {
  return z$1(o, ["r"], "(r.p=new Promise(" + S(o, ["s", "f"], "r.s=s,r.f=f") + "))");
}
function Rr(o) {
  return S(o, ["r", "d"], "r.s(d),r.p.s=1,r.p.v=d");
}
function Or(o) {
  return S(o, ["r", "d"], "r.f(d),r.p.s=2,r.p.v=d");
}
function Cr(o) {
  return z$1(o, ["b", "a", "s", "l", "p", "f", "e", "n"], "(b=[],a=!0,s=!1,l=[],p=0,f=" + S(o, ["v", "m", "x"], "for(x=0;x<p;x++)l[x]&&l[x][m](v)") + ",n=" + S(o, ["o", "x", "z", "c"], 'for(x=0,z=b.length;x<z;x++)(c=b[x],(!a&&x===z-1)?o[s?"return":"throw"](c):o.next(c))') + ",e=" + z$1(o, ["o", "t"], "(a&&(l[t=p++]=o),n(o)," + S(o, [], "a&&(l[t]=void 0)") + ")") + ",{__SEROVAL_STREAM__:!0,on:" + z$1(o, ["o"], "e(o)") + ",next:" + S(o, ["v"], 'a&&(b.push(v),f(v,"next"))') + ",throw:" + S(o, ["v"], 'a&&(b.push(v),f(v,"throw"),a=s=!1,l.length=0)') + ",return:" + S(o, ["v"], 'a&&(b.push(v),f(v,"return"),a=!1,s=!0,l.length=0)') + "})");
}
function cr(o, e) {
  switch (e) {
    case 0:
      return "[]";
    case 1:
      return Pr(o);
    case 2:
      return Rr(o);
    case 3:
      return Or(o);
    case 4:
      return Cr(o);
    default:
      return "";
  }
}
function re$1() {
  let o, e;
  return { promise: new Promise((r, t) => {
    o = r, e = t;
  }), resolve(r) {
    o(r);
  }, reject(r) {
    e(r);
  } };
}
function Fe(o) {
  return "__SEROVAL_STREAM__" in o;
}
function K() {
  let o = /* @__PURE__ */ new Set(), e = [], r = true, t = true;
  function n(l) {
    for (let c of o.keys()) c.next(l);
  }
  function a(l) {
    for (let c of o.keys()) c.throw(l);
  }
  function i(l) {
    for (let c of o.keys()) c.return(l);
  }
  return { __SEROVAL_STREAM__: true, on(l) {
    r && o.add(l);
    for (let c = 0, p2 = e.length; c < p2; c++) {
      let h = e[c];
      c === p2 - 1 && !r ? t ? l.return(h) : l.throw(h) : l.next(h);
    }
    return () => {
      r && o.delete(l);
    };
  }, next(l) {
    r && (e.push(l), n(l));
  }, throw(l) {
    r && (e.push(l), a(l), r = false, t = false, o.clear());
  }, return(l) {
    r && (e.push(l), i(l), r = false, t = true, o.clear());
  } };
}
function Ve(o) {
  let e = K(), r = o[Symbol.asyncIterator]();
  async function t() {
    try {
      let n = await r.next();
      n.done ? e.return(n.value) : (e.next(n.value), await t());
    } catch (n) {
      e.throw(n);
    }
  }
  return t().catch(() => {
  }), e;
}
function ur(o) {
  return () => {
    let e = [], r = [], t = 0, n = -1, a = false;
    function i() {
      for (let c = 0, p2 = r.length; c < p2; c++) r[c].resolve({ done: true, value: void 0 });
    }
    o.on({ next(c) {
      let p2 = r.shift();
      p2 && p2.resolve({ done: false, value: c }), e.push(c);
    }, throw(c) {
      let p2 = r.shift();
      p2 && p2.reject(c), i(), n = e.length, e.push(c), a = true;
    }, return(c) {
      let p2 = r.shift();
      p2 && p2.resolve({ done: true, value: c }), i(), n = e.length, e.push(c);
    } });
    function l() {
      let c = t++, p2 = e[c];
      if (c !== n) return { done: false, value: p2 };
      if (a) throw p2;
      return { done: true, value: p2 };
    }
    return { [Symbol.asyncIterator]() {
      return this;
    }, async next() {
      if (n === -1) {
        let c = t++;
        if (c >= e.length) {
          let p2 = re$1();
          return r.push(p2), await p2.promise;
        }
        return { done: false, value: e[c] };
      }
      return t > n ? { done: true, value: void 0 } : l();
    } };
  };
}
function J(o) {
  let e = [], r = -1, t = -1, n = o[Symbol.iterator]();
  for (; ; ) try {
    let a = n.next();
    if (e.push(a.value), a.done) {
      t = e.length - 1;
      break;
    }
  } catch (a) {
    r = e.length, e.push(a);
  }
  return { v: e, t: r, d: t };
}
function pr(o) {
  return () => {
    let e = 0;
    return { [Symbol.iterator]() {
      return this;
    }, next() {
      if (e > o.d) return { done: true, value: s };
      let r = e++, t = o.v[r];
      if (r === o.t) throw t;
      return { done: r === o.d, value: t };
    } };
  };
}
async function Me(o) {
  try {
    return [1, await o];
  } catch (e) {
    return [0, e];
  }
}
function dr(o) {
  switch (o) {
    case "Int8Array":
      return Int8Array;
    case "Int16Array":
      return Int16Array;
    case "Int32Array":
      return Int32Array;
    case "Uint8Array":
      return Uint8Array;
    case "Uint16Array":
      return Uint16Array;
    case "Uint32Array":
      return Uint32Array;
    case "Uint8ClampedArray":
      return Uint8ClampedArray;
    case "Float32Array":
      return Float32Array;
    case "Float64Array":
      return Float64Array;
    case "BigInt64Array":
      return BigInt64Array;
    case "BigUint64Array":
      return BigUint64Array;
    default:
      throw new ke(o);
  }
}
function mr(o, e) {
  switch (e) {
    case 3:
      return Object.freeze(o);
    case 1:
      return Object.preventExtensions(o);
    case 2:
      return Object.seal(o);
    default:
      return o;
  }
}
function Le(o) {
  let e = o[0];
  return (e === "$" || e === "_" || e >= "A" && e <= "Z" || e >= "a" && e <= "z") && kr.test(o);
}
function se(o) {
  switch (o.t) {
    case 0:
      return o.s + "=" + o.v;
    case 2:
      return o.s + ".set(" + o.k + "," + o.v + ")";
    case 1:
      return o.s + ".add(" + o.v + ")";
    case 3:
      return o.s + ".delete(" + o.k + ")";
  }
}
function Fr(o) {
  let e = [], r = o[0];
  for (let t = 1, n = o.length, a, i = r; t < n; t++) a = o[t], a.t === 0 && a.v === i.v ? r = { t: 0, s: a.s, k: s, v: se(r) } : a.t === 2 && a.s === i.s ? r = { t: 2, s: se(r), k: a.k, v: a.v } : a.t === 1 && a.s === i.s ? r = { t: 1, s: se(r), k: s, v: a.v } : a.t === 3 && a.s === i.s ? r = { t: 3, s: se(r), k: a.k, v: s } : (e.push(r), r = a), i = a;
  return e.push(r), e;
}
function fr(o) {
  if (o.length) {
    let e = "", r = Fr(o);
    for (let t = 0, n = r.length; t < n; t++) e += se(r[t]) + ",";
    return e;
  }
  return s;
}
async function go(o, e = {}) {
  let r = m(e.plugins);
  return await new $({ plugins: r, disabledFeatures: e.disabledFeatures, refs: e.refs }).parseTop(o);
}
function gr(o, e) {
  let r = m(e.plugins), t = new G({ plugins: r, refs: e.refs, disabledFeatures: e.disabledFeatures, onParse(n, a) {
    let i = new D({ plugins: r, features: t.features, scopeId: e.scopeId, markedRefs: t.marked }), l;
    try {
      l = i.serializeTop(n);
    } catch (c) {
      e.onError && e.onError(c);
      return;
    }
    e.onSerialize(l, a);
  }, onError: e.onError, onDone: e.onDone });
  return t.start(o), t.destroy.bind(t);
}
function So(o, e) {
  let r = m(e.plugins), t = new G({ plugins: r, refs: e.refs, disabledFeatures: e.disabledFeatures, onParse: e.onParse, onError: e.onError, onDone: e.onDone });
  return t.start(o), t.destroy.bind(t);
}
function Lo(o, e = {}) {
  let r = m(e.plugins);
  return new ne({ plugins: r, markedRefs: o.m }).deserializeTop(o.t);
}
function createSerializationAdapter(opts) {
  return opts;
}
function makeSsrSerovalPlugin(serializationAdapter, options2) {
  return Hr({
    tag: "$TSR/t/" + serializationAdapter.key,
    test: serializationAdapter.test,
    parse: {
      stream(value, ctx) {
        return ctx.parse(serializationAdapter.toSerializable(value));
      }
    },
    serialize(node, ctx) {
      options2.didRun = true;
      return GLOBAL_TSR + '.t.get("' + serializationAdapter.key + '")(' + ctx.serialize(node) + ")";
    },
    // we never deserialize on the server during SSR
    deserialize: void 0
  });
}
function makeSerovalPlugin(serializationAdapter) {
  return Hr({
    tag: "$TSR/t/" + serializationAdapter.key,
    test: serializationAdapter.test,
    parse: {
      sync(value, ctx) {
        return ctx.parse(serializationAdapter.toSerializable(value));
      },
      async async(value, ctx) {
        return await ctx.parse(serializationAdapter.toSerializable(value));
      },
      stream(value, ctx) {
        return ctx.parse(serializationAdapter.toSerializable(value));
      }
    },
    // we don't generate JS code outside of SSR (for now)
    serialize: void 0,
    deserialize(node, ctx) {
      return serializationAdapter.fromSerializable(ctx.deserialize(node));
    }
  });
}
function z2(e) {
  let r = K(), a = e.getReader();
  async function t() {
    try {
      let n = await a.read();
      n.done ? r.return(n.value) : (r.next(n.value), await t());
    } catch (n) {
      r.throw(n);
    }
  }
  return t().catch(() => {
  }), r;
}
async function runWithStartContext(context, fn) {
  return startStorage.run(context, fn);
}
function getStartContext(opts) {
  const context = startStorage.getStore();
  if (!context && opts?.throwIfNotFound !== false) {
    throw new Error(
      `No Start context found in AsyncLocalStorage. Make sure you are using the function within the server runtime.`
    );
  }
  return context;
}
async function executeMiddleware$1(middlewares, env, opts) {
  const globalMiddlewares = getStartOptions()?.functionMiddleware || [];
  const flattenedMiddlewares = flattenMiddlewares([
    ...globalMiddlewares,
    ...middlewares
  ]);
  const next = async (ctx) => {
    const nextMiddleware = flattenedMiddlewares.shift();
    if (!nextMiddleware) {
      return ctx;
    }
    if ("inputValidator" in nextMiddleware.options && nextMiddleware.options.inputValidator && env === "server") {
      ctx.data = await execValidator(
        nextMiddleware.options.inputValidator,
        ctx.data
      );
    }
    const middlewareFn = env === "client" && "client" in nextMiddleware.options ? nextMiddleware.options.client : nextMiddleware.options.server;
    if (middlewareFn) {
      return applyMiddleware(middlewareFn, ctx, async (newCtx) => {
        return next(newCtx).catch((error) => {
          if (isRedirect(error) || isNotFound(error)) {
            return {
              ...newCtx,
              error
            };
          }
          throw error;
        });
      });
    }
    return next(ctx);
  };
  return next({
    ...opts,
    headers: opts.headers || {},
    sendContext: opts.sendContext || {},
    context: opts.context || {}
  });
}
function flattenMiddlewares(middlewares) {
  const seen = /* @__PURE__ */ new Set();
  const flattened = [];
  const recurse = (middleware) => {
    middleware.forEach((m2) => {
      if (m2.options.middleware) {
        recurse(m2.options.middleware);
      }
      if (!seen.has(m2)) {
        seen.add(m2);
        flattened.push(m2);
      }
    });
  };
  recurse(middlewares);
  return flattened;
}
function execValidator(validator, input) {
  if (validator == null) return {};
  if ("~standard" in validator) {
    const result = validator["~standard"].validate(input);
    if (result instanceof Promise)
      throw new Error("Async validation not supported");
    if (result.issues)
      throw new Error(JSON.stringify(result.issues, void 0, 2));
    return result.value;
  }
  if ("parse" in validator) {
    return validator.parse(input);
  }
  if (typeof validator === "function") {
    return validator(input);
  }
  throw new Error("Invalid validator type!");
}
function serverFnBaseToMiddleware(options2) {
  return {
    _types: void 0,
    options: {
      inputValidator: options2.inputValidator,
      client: async ({ next, sendContext, ...ctx }) => {
        const payload = {
          ...ctx,
          // switch the sendContext over to context
          context: sendContext
        };
        const res = await options2.extractedFn?.(payload);
        return next(res);
      },
      server: async ({ next, ...ctx }) => {
        const result = await options2.serverFn?.(ctx);
        return next({
          ...ctx,
          result
        });
      }
    }
  };
}
function getDefaultSerovalPlugins() {
  const start = getStartOptions();
  const adapters = start?.serializationAdapters;
  return [
    ...adapters?.map(makeSerovalPlugin) ?? [],
    ...defaultSerovalPlugins
  ];
}
function dehydrateMatch(match) {
  const dehydratedMatch = {
    i: match.id,
    u: match.updatedAt,
    s: match.status
  };
  const properties = [
    ["__beforeLoadContext", "b"],
    ["loaderData", "l"],
    ["error", "e"],
    ["ssr", "ssr"]
  ];
  for (const [key, shorthand] of properties) {
    if (match[key] !== void 0) {
      dehydratedMatch[shorthand] = match[key];
    }
  }
  return dehydratedMatch;
}
function attachRouterServerSsrUtils({
  router: router2,
  manifest
}) {
  router2.ssr = {
    manifest
  };
  let initialScriptSent = false;
  const getInitialScript = () => {
    if (initialScriptSent) {
      return "";
    }
    initialScriptSent = true;
    return `${xr(SCOPE_ID)};${minifiedTsrBootStrapScript};`;
  };
  let _dehydrated = false;
  const listeners = [];
  router2.serverSsr = {
    injectedHtml: [],
    injectHtml: (getHtml) => {
      const promise = Promise.resolve().then(getHtml);
      router2.serverSsr.injectedHtml.push(promise);
      router2.emit({
        type: "onInjectedHtml",
        promise
      });
      return promise.then(() => {
      });
    },
    injectScript: (getScript) => {
      return router2.serverSsr.injectHtml(async () => {
        const script = await getScript();
        return `<script ${router2.options.ssr?.nonce ? `nonce='${router2.options.ssr.nonce}'` : ""} class='$tsr'>${getInitialScript()}${script};$_TSR.c()</script>`;
      });
    },
    dehydrate: async () => {
      invariant(!_dehydrated, "router is already dehydrated!");
      let matchesToDehydrate = router2.state.matches;
      if (router2.isShell()) {
        matchesToDehydrate = matchesToDehydrate.slice(0, 1);
      }
      const matches = matchesToDehydrate.map(dehydrateMatch);
      const dehydratedRouter = {
        manifest: router2.ssr.manifest,
        matches
      };
      const lastMatchId = matchesToDehydrate[matchesToDehydrate.length - 1]?.id;
      if (lastMatchId) {
        dehydratedRouter.lastMatchId = lastMatchId;
      }
      dehydratedRouter.dehydratedData = await router2.options.dehydrate?.();
      _dehydrated = true;
      const p2 = createControlledPromise();
      const trackPlugins = { didRun: false };
      const plugins = router2.options.serializationAdapters?.map((t) => makeSsrSerovalPlugin(t, trackPlugins)) ?? [];
      gr(dehydratedRouter, {
        refs: /* @__PURE__ */ new Map(),
        plugins: [...plugins, ...defaultSerovalPlugins],
        onSerialize: (data, initial) => {
          let serialized = initial ? GLOBAL_TSR + ".router=" + data : data;
          if (trackPlugins.didRun) {
            serialized = GLOBAL_TSR + ".p(()=>" + serialized + ")";
          }
          router2.serverSsr.injectScript(() => serialized);
        },
        scopeId: SCOPE_ID,
        onDone: () => p2.resolve(""),
        onError: (err) => p2.reject(err)
      });
      router2.serverSsr.injectHtml(() => p2);
    },
    isDehydrated() {
      return _dehydrated;
    },
    onRenderFinished: (listener) => listeners.push(listener),
    setRenderFinished: () => {
      listeners.forEach((l) => l());
    }
  };
}
function getOrigin(request) {
  const originHeader = request.headers.get("Origin");
  if (originHeader) {
    try {
      new URL(originHeader);
      return originHeader;
    } catch {
    }
  }
  try {
    return new URL(request.url).origin;
  } catch {
  }
  return "http://localhost";
}
function inheritProps(target, source, sourceKey) {
  for (const key of Object.getOwnPropertyNames(source)) {
    if (key in target) continue;
    const desc = Object.getOwnPropertyDescriptor(source, key);
    if (desc.get) Object.defineProperty(target, key, {
      ...desc,
      get() {
        return this[sourceKey][key];
      }
    });
    else if (typeof desc.value === "function") Object.defineProperty(target, key, {
      ...desc,
      value(...args) {
        return this[sourceKey][key](...args);
      }
    });
    else Object.defineProperty(target, key, desc);
  }
}
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) return defaultStatusCode;
  if (typeof statusCode === "string") statusCode = +statusCode;
  if (statusCode < 100 || statusCode > 599) return defaultStatusCode;
  return statusCode;
}
function isJSONSerializable(value, _type) {
  if (value === null || value === void 0) return true;
  if (_type !== "object") return _type === "boolean" || _type === "number" || _type === "string";
  if (typeof value.toJSON === "function") return true;
  if (Array.isArray(value)) return true;
  if (typeof value.pipe === "function" || typeof value.pipeTo === "function") return false;
  if (value instanceof NullProtoObj) return true;
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}
function toResponse(val, event, config2 = {}) {
  if (typeof val?.then === "function") return (val.catch?.((error) => error) || Promise.resolve(val)).then((resolvedVal) => toResponse(resolvedVal, event, config2));
  const response = prepareResponse(val, event, config2);
  if (typeof response?.then === "function") return toResponse(response, event, config2);
  const { onResponse: onResponse$1 } = config2;
  return onResponse$1 ? Promise.resolve(onResponse$1(response, event)).then(() => response) : response;
}
function prepareResponse(val, event, config2, nested) {
  if (val === kHandled) return new NodeResponse(null);
  if (val === kNotFound) val = new HTTPError({
    status: 404,
    message: `Cannot find any route matching [${event.req.method}] ${event.url}`
  });
  if (val && val instanceof Error) {
    const isHTTPError = HTTPError.isError(val);
    const error = isHTTPError ? val : new HTTPError(val);
    if (!isHTTPError) {
      error.unhandled = true;
      if (val?.stack) error.stack = val.stack;
    }
    if (error.unhandled && !config2.silent) console.error(error);
    const { onError: onError$1 } = config2;
    return onError$1 && !nested ? Promise.resolve(onError$1(error, event)).catch((error$1) => error$1).then((newVal) => prepareResponse(newVal ?? val, event, config2, true)) : errorResponse(error, config2.debug);
  }
  const eventHeaders = event.res._headers;
  if (!(val instanceof Response)) {
    const res = prepareResponseBody(val, event, config2);
    const status = event.res.status;
    return new NodeResponse(nullBody(event.req.method, status) ? null : res.body, {
      status,
      statusText: event.res.statusText,
      headers: res.headers && eventHeaders ? mergeHeaders$1(res.headers, eventHeaders) : res.headers || eventHeaders
    });
  }
  if (!eventHeaders) return val;
  return new NodeResponse(nullBody(event.req.method, val.status) ? null : val.body, {
    status: val.status,
    statusText: val.statusText,
    headers: mergeHeaders$1(eventHeaders, val.headers)
  });
}
function mergeHeaders$1(base, merge) {
  const mergedHeaders = new Headers(base);
  for (const [name, value] of merge) if (name === "set-cookie") mergedHeaders.append(name, value);
  else mergedHeaders.set(name, value);
  return mergedHeaders;
}
function prepareResponseBody(val, event, config2) {
  if (val === null || val === void 0) return {
    body: "",
    headers: emptyHeaders
  };
  const valType = typeof val;
  if (valType === "string") return { body: val };
  if (val instanceof Uint8Array) {
    event.res.headers.set("content-length", val.byteLength.toString());
    return { body: val };
  }
  if (isJSONSerializable(val, valType)) return {
    body: JSON.stringify(val, void 0, config2.debug ? 2 : void 0),
    headers: jsonHeaders
  };
  if (valType === "bigint") return {
    body: val.toString(),
    headers: jsonHeaders
  };
  if (val instanceof Blob) {
    const headers = {
      "content-type": val.type,
      "content-length": val.size.toString()
    };
    let filename = val.name;
    if (filename) {
      filename = encodeURIComponent(filename);
      headers["content-disposition"] = `filename="${filename}"; filename*=UTF-8''${filename}`;
    }
    return {
      body: val.stream(),
      headers
    };
  }
  if (valType === "symbol") return { body: val.toString() };
  if (valType === "function") return { body: `${val.name}()` };
  return { body: val };
}
function nullBody(method, status) {
  return method === "HEAD" || status === 100 || status === 101 || status === 102 || status === 204 || status === 205 || status === 304;
}
function errorResponse(error, debug) {
  return new NodeResponse(JSON.stringify({
    ...error.toJSON(),
    stack: debug && error.stack ? error.stack.split("\n").map((l) => l.trim()) : void 0
  }, void 0, debug ? 2 : void 0), {
    status: error.status,
    statusText: error.statusText,
    headers: error.headers ? mergeHeaders$1(jsonHeaders, error.headers) : jsonHeaders
  });
}
function parseCookies(event) {
  return parse(event.req.headers.get("cookie") || "");
}
function requestHandler(handler) {
  return (request, requestOpts) => {
    const h3Event = new H3Event(request);
    const response = eventStorage.run(
      { h3Event },
      () => handler(request, requestOpts)
    );
    return toResponse(response, h3Event);
  };
}
function getH3Event() {
  const event = eventStorage.getStore();
  if (!event) {
    throw new Error(
      `No StartEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.`
    );
  }
  return event.h3Event;
}
function getCookies() {
  const event = getH3Event();
  return parseCookies(event);
}
function getCookie(name) {
  return getCookies()[name] || void 0;
}
function getResponse() {
  const event = getH3Event();
  return event._res;
}
async function loadVirtualModule(id) {
  switch (id) {
    case VIRTUAL_MODULES.startManifest:
      return await Promise.resolve().then(() => (init_tanstack_start_manifest_v_CCGwh_zN(), tanstack_start_manifest_v_CCGwh_zN_exports));
    case VIRTUAL_MODULES.serverFnManifest:
      return await Promise.resolve().then(() => (init_tanstack_start_server_fn_manifest_v_CHrJyVSn(), tanstack_start_server_fn_manifest_v_CHrJyVSn_exports));
    case VIRTUAL_MODULES.injectedHeadScripts:
      return await Promise.resolve().then(() => (init_tanstack_start_injected_head_scripts_v_cda0Ky0D(), tanstack_start_injected_head_scripts_v_cda0Ky0D_exports));
    default:
      throw new Error(`Unknown virtual module: ${id}`);
  }
}
async function getStartManifest() {
  const { tsrStartManifest: tsrStartManifest2 } = await loadVirtualModule(
    VIRTUAL_MODULES.startManifest
  );
  const startManifest = tsrStartManifest2();
  const rootRoute = startManifest.routes[rootRouteId] = startManifest.routes[rootRouteId] || {};
  rootRoute.assets = rootRoute.assets || [];
  let script = `import('${startManifest.clientEntry}')`;
  rootRoute.assets.push({
    tag: "script",
    attrs: {
      type: "module",
      suppressHydrationWarning: true,
      async: true
    },
    children: script
  });
  const manifest = {
    ...startManifest,
    routes: Object.fromEntries(
      Object.entries(startManifest.routes).map(([k2, v2]) => {
        const { preloads, assets } = v2;
        return [
          k2,
          {
            preloads,
            assets
          }
        ];
      })
    )
  };
  return manifest;
}
async function getServerFnById(serverFnId) {
  const { default: serverFnManifest } = await loadVirtualModule(
    VIRTUAL_MODULES.serverFnManifest
  );
  const serverFnInfo = serverFnManifest[serverFnId];
  if (!serverFnInfo) {
    console.info("serverFnManifest", serverFnManifest);
    throw new Error("Server function info not found for " + serverFnId);
  }
  const fnModule = await serverFnInfo.importer();
  if (!fnModule) {
    console.info("serverFnInfo", serverFnInfo);
    throw new Error("Server function module not resolved for " + serverFnId);
  }
  const action = fnModule[serverFnInfo.functionName];
  if (!action) {
    console.info("serverFnInfo", serverFnInfo);
    console.info("fnModule", fnModule);
    throw new Error(
      `Server function module export not resolved for serverFn ID: ${serverFnId}`
    );
  }
  return action;
}
function isNotFoundResponse(error) {
  const { headers, ...rest } = error;
  return new Response(JSON.stringify(rest), {
    status: 404,
    headers: {
      "Content-Type": "application/json",
      ...headers || {}
    }
  });
}
function getStartResponseHeaders(opts) {
  const headers = mergeHeaders(
    {
      "Content-Type": "text/html; charset=utf-8"
    },
    ...opts.router.state.matches.map((match) => {
      return match.headers;
    })
  );
  return headers;
}
function createStartHandler(cb) {
  const ROUTER_BASEPATH = "/";
  let startRoutesManifest = null;
  let startEntry = null;
  let routerEntry = null;
  const getEntries = async () => {
    if (routerEntry === null) {
      routerEntry = await Promise.resolve().then(() => (init_router_BLkbJw6K(), router_BLkbJw6K_exports)).then((n) => n.r);
    }
    if (startEntry === null) {
      startEntry = await Promise.resolve().then(() => (init_start_HYkvq4Ni(), start_HYkvq4Ni_exports));
    }
    return {
      startEntry,
      routerEntry
    };
  };
  const originalFetch = globalThis.fetch;
  const startRequestResolver = async (request, requestOpts) => {
    const origin = getOrigin(request);
    globalThis.fetch = async function(input, init) {
      function resolve(url2, requestOptions) {
        const fetchRequest = new Request(url2, requestOptions);
        return startRequestResolver(fetchRequest, requestOpts);
      }
      if (typeof input === "string" && input.startsWith("/")) {
        const url2 = new URL(input, origin);
        return resolve(url2, init);
      } else if (typeof input === "object" && "url" in input && typeof input.url === "string" && input.url.startsWith("/")) {
        const url2 = new URL(input.url, origin);
        return resolve(url2, init);
      }
      return originalFetch(input, init);
    };
    const url = new URL(request.url);
    const href = url.href.replace(url.origin, "");
    let router2 = null;
    const getRouter2 = async () => {
      if (router2) return router2;
      router2 = await (await getEntries()).routerEntry.getRouter();
      const isPrerendering = process.env.TSS_PRERENDERING === "true";
      let isShell = process.env.TSS_SHELL === "true";
      if (isPrerendering && !isShell) {
        isShell = request.headers.get(HEADERS.TSS_SHELL) === "true";
      }
      const history = createMemoryHistory({
        initialEntries: [href]
      });
      router2.update({
        history,
        isShell,
        isPrerendering,
        origin: router2.options.origin ?? origin,
        ...{
          defaultSsr: startOptions.defaultSsr,
          serializationAdapters: startOptions.serializationAdapters
        },
        basepath: ROUTER_BASEPATH
      });
      return router2;
    };
    const startOptions = await (await getEntries()).startEntry.startInstance?.getOptions() || {};
    startOptions.serializationAdapters = startOptions.serializationAdapters || [];
    startOptions.serializationAdapters.push(ServerFunctionSerializationAdapter);
    const requestHandlerMiddleware = handlerToMiddleware(
      async ({ context }) => {
        const response2 = await runWithStartContext(
          {
            getRouter: getRouter2,
            startOptions,
            contextAfterGlobalMiddlewares: context
          },
          async () => {
            try {
              if (href.startsWith("/_serverFn/")) {
                return await handleServerAction({
                  request,
                  context: requestOpts?.context
                });
              }
              const executeRouter = async ({
                serverContext
              }) => {
                const requestAcceptHeader = request.headers.get("Accept") || "*/*";
                const splitRequestAcceptHeader = requestAcceptHeader.split(",");
                const supportedMimeTypes = ["*/*", "text/html"];
                const isRouterAcceptSupported = supportedMimeTypes.some(
                  (mimeType) => splitRequestAcceptHeader.some(
                    (acceptedMimeType) => acceptedMimeType.trim().startsWith(mimeType)
                  )
                );
                if (!isRouterAcceptSupported) {
                  return json(
                    {
                      error: "Only HTML requests are supported here"
                    },
                    {
                      status: 500
                    }
                  );
                }
                if (startRoutesManifest === null) {
                  startRoutesManifest = await getStartManifest();
                }
                const router22 = await getRouter2();
                attachRouterServerSsrUtils({
                  router: router22,
                  manifest: startRoutesManifest
                });
                router22.update({ additionalContext: { serverContext } });
                await router22.load();
                if (router22.state.redirect) {
                  return router22.state.redirect;
                }
                await router22.serverSsr.dehydrate();
                const responseHeaders = getStartResponseHeaders({ router: router22 });
                const response4 = await cb({
                  request,
                  router: router22,
                  responseHeaders
                });
                return response4;
              };
              const response3 = await handleServerRoutes({
                getRouter: getRouter2,
                request,
                executeRouter
              });
              return response3;
            } catch (err) {
              if (err instanceof Response) {
                return err;
              }
              throw err;
            }
          }
        );
        return response2;
      }
    );
    const flattenedMiddlewares = startOptions.requestMiddleware ? flattenMiddlewares(startOptions.requestMiddleware) : [];
    const middlewares = flattenedMiddlewares.map((d2) => d2.options.server);
    const ctx = await executeMiddleware(
      [...middlewares, requestHandlerMiddleware],
      {
        request,
        context: requestOpts?.context || {}
      }
    );
    const response = ctx.response;
    if (isRedirect(response)) {
      if (isResolvedRedirect(response)) {
        if (request.headers.get("x-tsr-redirect") === "manual") {
          return json(
            {
              ...response.options,
              isSerializedRedirect: true
            },
            {
              headers: response.headers
            }
          );
        }
        return response;
      }
      if (response.options.to && typeof response.options.to === "string" && !response.options.to.startsWith("/")) {
        throw new Error(
          `Server side redirects must use absolute paths via the 'href' or 'to' options. The redirect() method's "to" property accepts an internal path only. Use the "href" property to provide an external URL. Received: ${JSON.stringify(response.options)}`
        );
      }
      if (["params", "search", "hash"].some(
        (d2) => typeof response.options[d2] === "function"
      )) {
        throw new Error(
          `Server side redirects must use static search, params, and hash values and do not support functional values. Received functional values for: ${Object.keys(
            response.options
          ).filter((d2) => typeof response.options[d2] === "function").map((d2) => `"${d2}"`).join(", ")}`
        );
      }
      const router22 = await getRouter2();
      const redirect = router22.resolveRedirect(response);
      if (request.headers.get("x-tsr-redirect") === "manual") {
        return json(
          {
            ...response.options,
            isSerializedRedirect: true
          },
          {
            headers: response.headers
          }
        );
      }
      return redirect;
    }
    return response;
  };
  return requestHandler(startRequestResolver);
}
async function handleServerRoutes({
  getRouter: getRouter2,
  request,
  executeRouter
}) {
  const router2 = await getRouter2();
  let url = new URL(request.url);
  url = executeRewriteInput(router2.rewrite, url);
  const pathname = url.pathname;
  const { matchedRoutes, foundRoute, routeParams } = router2.getMatchedRoutes(
    pathname,
    void 0
  );
  const middlewares = flattenMiddlewares(
    matchedRoutes.flatMap((r) => r.options.server?.middleware).filter(Boolean)
  ).map((d2) => d2.options.server);
  const server2 = foundRoute?.options.server;
  if (server2) {
    if (server2.handlers) {
      const handlers = typeof server2.handlers === "function" ? server2.handlers({
        createHandlers: (d2) => d2
      }) : server2.handlers;
      const requestMethod = request.method.toLowerCase();
      let method = Object.keys(handlers).find(
        (method2) => method2.toLowerCase() === requestMethod
      );
      if (!method) {
        method = Object.keys(handlers).find(
          (method2) => method2.toLowerCase() === "all"
        ) ? "all" : void 0;
      }
      if (method) {
        const handler = handlers[method];
        if (handler) {
          const mayDefer = !!foundRoute.options.component;
          if (typeof handler === "function") {
            middlewares.push(handlerToMiddleware(handler, mayDefer));
          } else {
            const { middleware } = handler;
            if (middleware && middleware.length) {
              middlewares.push(
                ...flattenMiddlewares(middleware).map((d2) => d2.options.server)
              );
            }
            if (handler.handler) {
              middlewares.push(handlerToMiddleware(handler.handler, mayDefer));
            }
          }
        }
      }
    }
  }
  middlewares.push(
    handlerToMiddleware((ctx2) => executeRouter({ serverContext: ctx2.context }))
  );
  const ctx = await executeMiddleware(middlewares, {
    request,
    context: {},
    params: routeParams,
    pathname
  });
  const response = ctx.response;
  return response;
}
function throwRouteHandlerError() {
  if (process.env.NODE_ENV === "development") {
    throw new Error(
      `It looks like you forgot to return a response from your server route handler. If you want to defer to the app router, make sure to have a component set in this route.`
    );
  }
  throw new Error("Internal Server Error");
}
function throwIfMayNotDefer() {
  if (process.env.NODE_ENV === "development") {
    throw new Error(
      `You cannot defer to the app router if there is no component defined on this route.`
    );
  }
  throw new Error("Internal Server Error");
}
function handlerToMiddleware(handler, mayDefer = false) {
  if (mayDefer) {
    return handler;
  }
  return async ({ next: _next, ...rest }) => {
    const response = await handler({ ...rest, next: throwIfMayNotDefer });
    if (!response) {
      throwRouteHandlerError();
    }
    return response;
  };
}
function executeMiddleware(middlewares, ctx) {
  let index = -1;
  const next = async (ctx2) => {
    index++;
    const middleware = middlewares[index];
    if (!middleware) return ctx2;
    let result;
    try {
      result = await middleware({
        ...ctx2,
        // Allow the middleware to call the next middleware in the chain
        next: async (nextCtx) => {
          const nextResult = await next({
            ...ctx2,
            ...nextCtx,
            context: {
              ...ctx2.context,
              ...nextCtx?.context || {}
            }
          });
          return Object.assign(ctx2, handleCtxResult(nextResult));
        }
        // Allow the middleware result to extend the return context
      });
    } catch (err) {
      if (isSpecialResponse(err)) {
        result = {
          response: err
        };
      } else {
        throw err;
      }
    }
    return Object.assign(ctx2, handleCtxResult(result));
  };
  return handleCtxResult(next(ctx));
}
function handleCtxResult(result) {
  if (isSpecialResponse(result)) {
    return {
      response: result
    };
  }
  return result;
}
function isSpecialResponse(err) {
  return isResponse(err) || isRedirect(err);
}
function isResponse(response) {
  return response instanceof Response;
}
var defaultStreamHandler, stateIndexKey, isProduction, prefix, rootRouteId, R, O, Q, ae, Be, C, $e, ce, Ge, qe, He, ue, Ze, s, I, A, pe, de, Xe, Qe, er, rr, _e, ee$1, E, Te, ze, g, y, W, P, ie, le, ke, T, ar, ir, lr, Y, k, $, F, kr, Vr, Dr, Br, jr, _r, Mr, V, D, v, oe, G, ne, GLOBAL_TSR, p, ee2, re, u, ShallowErrorPlugin, defaultSerovalPlugins, TSS_FORMDATA_CONTEXT, TSS_SERVER_FUNCTION, TSS_SERVER_FUNCTION_FACTORY, X_TSS_SERIALIZED, X_TSS_RAW_RESPONSE, startStorage, getServerContextAfterGlobalMiddlewares, getStartOptions, createServerFn, applyMiddleware, minifiedTsrBootStrapScript, SCOPE_ID, NullProtoObj, FastURL, NodeResponse, H3Event, H3EventResponse, DISALLOWED_STATUS_CHARS, HTTPError, kNotFound, kHandled, emptyHeaders, jsonHeaders, eventStorage, VIRTUAL_MODULES, regex, handleServerAction, HEADERS, createServerRpc, ServerFunctionSerializationAdapter, fetch, server;
var init_server = __esm({
  "dist/server/server.js"() {
    "use strict";
    defaultStreamHandler = defineHandlerCallback(
      ({ request, router: router2, responseHeaders }) => renderRouterToStream({
        request,
        router: router2,
        responseHeaders,
        children: /* @__PURE__ */ jsx5(StartServer, { router: router2 })
      })
    );
    stateIndexKey = "__TSR_index";
    isProduction = process.env.NODE_ENV === "production";
    prefix = "Invariant failed";
    rootRouteId = "__root__";
    R = ((a) => (a[a.AggregateError = 1] = "AggregateError", a[a.ArrowFunction = 2] = "ArrowFunction", a[a.ErrorPrototypeStack = 4] = "ErrorPrototypeStack", a[a.ObjectAssign = 8] = "ObjectAssign", a[a.BigIntTypedArray = 16] = "BigIntTypedArray", a))(R || {});
    O = "__SEROVAL_REFS__";
    Q = "$R";
    ae = `self.${Q}`;
    Be = /* @__PURE__ */ new Map();
    C = /* @__PURE__ */ new Map();
    typeof globalThis != "undefined" ? Object.defineProperty(globalThis, O, { value: C, configurable: true, writable: false, enumerable: false }) : typeof window != "undefined" ? Object.defineProperty(window, O, { value: C, configurable: true, writable: false, enumerable: false }) : typeof self != "undefined" ? Object.defineProperty(self, O, { value: C, configurable: true, writable: false, enumerable: false }) : typeof global != "undefined" && Object.defineProperty(global, O, { value: C, configurable: true, writable: false, enumerable: false });
    $e = { 0: "Symbol.asyncIterator", 1: "Symbol.hasInstance", 2: "Symbol.isConcatSpreadable", 3: "Symbol.iterator", 4: "Symbol.match", 5: "Symbol.matchAll", 6: "Symbol.replace", 7: "Symbol.search", 8: "Symbol.species", 9: "Symbol.split", 10: "Symbol.toPrimitive", 11: "Symbol.toStringTag", 12: "Symbol.unscopables" };
    ce = { [Symbol.asyncIterator]: 0, [Symbol.hasInstance]: 1, [Symbol.isConcatSpreadable]: 2, [Symbol.iterator]: 3, [Symbol.match]: 4, [Symbol.matchAll]: 5, [Symbol.replace]: 6, [Symbol.search]: 7, [Symbol.species]: 8, [Symbol.split]: 9, [Symbol.toPrimitive]: 10, [Symbol.toStringTag]: 11, [Symbol.unscopables]: 12 };
    Ge = { 0: Symbol.asyncIterator, 1: Symbol.hasInstance, 2: Symbol.isConcatSpreadable, 3: Symbol.iterator, 4: Symbol.match, 5: Symbol.matchAll, 6: Symbol.replace, 7: Symbol.search, 8: Symbol.species, 9: Symbol.split, 10: Symbol.toPrimitive, 11: Symbol.toStringTag, 12: Symbol.unscopables };
    qe = { 2: "!0", 3: "!1", 1: "void 0", 0: "null", 4: "-0", 5: "1/0", 6: "-1/0", 7: "0/0" };
    He = { 2: true, 3: false, 1: void 0, 0: null, 4: -0, 5: Number.POSITIVE_INFINITY, 6: Number.NEGATIVE_INFINITY, 7: Number.NaN };
    ue = { 0: "Error", 1: "EvalError", 2: "RangeError", 3: "ReferenceError", 4: "SyntaxError", 5: "TypeError", 6: "URIError" };
    Ze = { 0: Error, 1: EvalError, 2: RangeError, 3: ReferenceError, 4: SyntaxError, 5: TypeError, 6: URIError };
    s = void 0;
    I = x(2);
    A = x(3);
    pe = x(1);
    de = x(0);
    Xe = x(4);
    Qe = x(5);
    er = x(6);
    rr = x(7);
    ({ toString: _e } = Object.prototype);
    ee$1 = class ee extends Error {
      constructor(r, t) {
        super(Er(r, t));
        this.cause = t;
      }
    };
    E = class extends ee$1 {
      constructor(e) {
        super("parsing", e);
      }
    };
    Te = class extends ee$1 {
      constructor(e) {
        super("serialization", e);
      }
    };
    ze = class extends ee$1 {
      constructor(e) {
        super("deserialization", e);
      }
    };
    g = class extends Error {
      constructor(r) {
        super(`The value ${_e.call(r)} of type "${typeof r}" cannot be parsed/serialized.
      
There are few workarounds for this problem:
- Transform the value in a way that it can be serialized.
- If the reference is present on multiple runtimes (isomorphic), you can use the Reference API to map the references.`);
        this.value = r;
      }
    };
    y = class extends Error {
      constructor(e) {
        super('Unsupported node type "' + e.t + '".');
      }
    };
    W = class extends Error {
      constructor(e) {
        super('Missing plugin for tag "' + e + '".');
      }
    };
    P = class extends Error {
      constructor(e) {
        super('Missing "' + e + '" instance.');
      }
    };
    ie = class extends Error {
      constructor(r) {
        super('Missing reference for the value "' + _e.call(r) + '" of type "' + typeof r + '"');
        this.value = r;
      }
    };
    le = class extends Error {
      constructor(e) {
        super('Missing reference for id "' + d(e) + '"');
      }
    };
    ke = class extends Error {
      constructor(e) {
        super('Unknown TypedArray "' + e + '"');
      }
    };
    T = class {
      constructor(e, r) {
        this.value = e;
        this.replacement = r;
      }
    };
    ar = {};
    ir = {};
    lr = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {} };
    Y = class {
      constructor(e) {
        this.marked = /* @__PURE__ */ new Set();
        this.plugins = e.plugins, this.features = 31 ^ (e.disabledFeatures || 0), this.refs = e.refs || /* @__PURE__ */ new Map();
      }
      markRef(e) {
        this.marked.add(e);
      }
      isMarked(e) {
        return this.marked.has(e);
      }
      createIndex(e) {
        let r = this.refs.size;
        return this.refs.set(e, r), r;
      }
      getIndexedValue(e) {
        let r = this.refs.get(e);
        return r != null ? (this.markRef(r), { type: 1, value: sr(r) }) : { type: 0, value: this.createIndex(e) };
      }
      getReference(e) {
        let r = this.getIndexedValue(e);
        return r.type === 1 ? r : je(e) ? { type: 2, value: nr(r.value, e) } : r;
      }
      parseWellKnownSymbol(e) {
        let r = this.getReference(e);
        return r.type !== 0 ? r.value : (f(e in ce, new g(e)), or(r.value, e));
      }
      parseSpecialReference(e) {
        let r = this.getIndexedValue(lr[e]);
        return r.type === 1 ? r.value : u$1(26, r.value, e, s, s, s, s, s, s, s, s, s);
      }
      parseIteratorFactory() {
        let e = this.getIndexedValue(ar);
        return e.type === 1 ? e.value : u$1(27, e.value, s, s, s, s, s, s, s, this.parseWellKnownSymbol(Symbol.iterator), s, s);
      }
      parseAsyncIteratorFactory() {
        let e = this.getIndexedValue(ir);
        return e.type === 1 ? e.value : u$1(29, e.value, s, s, s, s, s, s, [this.parseSpecialReference(1), this.parseWellKnownSymbol(Symbol.asyncIterator)], s, s, s);
      }
      createObjectNode(e, r, t, n) {
        return u$1(t ? 11 : 10, e, s, s, s, s, n, s, s, s, s, fe(r));
      }
      createMapNode(e, r, t, n) {
        return u$1(8, e, s, s, s, s, s, { k: r, v: t, s: n }, s, this.parseSpecialReference(0), s, s);
      }
      createPromiseConstructorNode(e, r) {
        return u$1(22, e, r, s, s, s, s, s, s, this.parseSpecialReference(1), s, s);
      }
    };
    k = class extends Y {
      async parseItems(e) {
        let r = [];
        for (let t = 0, n = e.length; t < n; t++) t in e && (r[t] = await this.parse(e[t]));
        return r;
      }
      async parseArray(e, r) {
        return Ne(e, r, await this.parseItems(r));
      }
      async parseProperties(e) {
        let r = Object.entries(e), t = [], n = [];
        for (let i = 0, l = r.length; i < l; i++) t.push(d(r[i][0])), n.push(await this.parse(r[i][1]));
        let a = Symbol.iterator;
        return a in e && (t.push(this.parseWellKnownSymbol(a)), n.push(M(this.parseIteratorFactory(), await this.parse(J(e))))), a = Symbol.asyncIterator, a in e && (t.push(this.parseWellKnownSymbol(a)), n.push(U(this.parseAsyncIteratorFactory(), await this.parse(Ve(e))))), a = Symbol.toStringTag, a in e && (t.push(this.parseWellKnownSymbol(a)), n.push(w(e[a]))), a = Symbol.isConcatSpreadable, a in e && (t.push(this.parseWellKnownSymbol(a)), n.push(e[a] ? I : A)), { k: t, v: n, s: t.length };
      }
      async parsePlainObject(e, r, t) {
        return this.createObjectNode(e, r, t, await this.parseProperties(r));
      }
      async parseBoxed(e, r) {
        return be(e, await this.parse(r.valueOf()));
      }
      async parseTypedArray(e, r) {
        return xe(e, r, await this.parse(r.buffer));
      }
      async parseBigIntTypedArray(e, r) {
        return Ie(e, r, await this.parse(r.buffer));
      }
      async parseDataView(e, r) {
        return Ae(e, r, await this.parse(r.buffer));
      }
      async parseError(e, r) {
        let t = j(r, this.features);
        return we(e, r, t ? await this.parseProperties(t) : s);
      }
      async parseAggregateError(e, r) {
        let t = j(r, this.features);
        return Ee(e, r, t ? await this.parseProperties(t) : s);
      }
      async parseMap(e, r) {
        let t = [], n = [];
        for (let [a, i] of r.entries()) t.push(await this.parse(a)), n.push(await this.parse(i));
        return this.createMapNode(e, t, n, r.size);
      }
      async parseSet(e, r) {
        let t = [];
        for (let n of r.keys()) t.push(await this.parse(n));
        return Pe(e, r.size, t);
      }
      async parsePromise(e, r) {
        let [t, n] = await Me(r);
        return u$1(12, e, t, s, s, s, s, s, s, await this.parse(n), s, s);
      }
      async parsePlugin(e, r) {
        let t = this.plugins;
        if (t) for (let n = 0, a = t.length; n < a; n++) {
          let i = t[n];
          if (i.parse.async && i.test(r)) return _(e, i.tag, await i.parse.async(r, this, { id: e }));
        }
        return s;
      }
      async parseStream(e, r) {
        return L(e, this.parseSpecialReference(4), await new Promise((t, n) => {
          let a = [], i = r.on({ next: (l) => {
            this.markRef(e), this.parse(l).then((c) => {
              a.push(Re(e, c));
            }, (c) => {
              n(c), i();
            });
          }, throw: (l) => {
            this.markRef(e), this.parse(l).then((c) => {
              a.push(Oe(e, c)), t(a), i();
            }, (c) => {
              n(c), i();
            });
          }, return: (l) => {
            this.markRef(e), this.parse(l).then((c) => {
              a.push(Ce(e, c)), t(a), i();
            }, (c) => {
              n(c), i();
            });
          } });
        }));
      }
      async parseObject(e, r) {
        if (Array.isArray(r)) return this.parseArray(e, r);
        if (Fe(r)) return this.parseStream(e, r);
        let t = r.constructor;
        if (t === T) return this.parse(r.replacement);
        let n = await this.parsePlugin(e, r);
        if (n) return n;
        switch (t) {
          case Object:
            return this.parsePlainObject(e, r, false);
          case s:
            return this.parsePlainObject(e, r, true);
          case Date:
            return he(e, r);
          case RegExp:
            return ye(e, r);
          case Error:
          case EvalError:
          case RangeError:
          case ReferenceError:
          case SyntaxError:
          case TypeError:
          case URIError:
            return this.parseError(e, r);
          case Number:
          case Boolean:
          case String:
          case BigInt:
            return this.parseBoxed(e, r);
          case ArrayBuffer:
            return ve(e, r);
          case Int8Array:
          case Int16Array:
          case Int32Array:
          case Uint8Array:
          case Uint16Array:
          case Uint32Array:
          case Uint8ClampedArray:
          case Float32Array:
          case Float64Array:
            return this.parseTypedArray(e, r);
          case DataView:
            return this.parseDataView(e, r);
          case Map:
            return this.parseMap(e, r);
          case Set:
            return this.parseSet(e, r);
        }
        if (t === Promise || r instanceof Promise) return this.parsePromise(e, r);
        let a = this.features;
        if (a & 16) switch (t) {
          case BigInt64Array:
          case BigUint64Array:
            return this.parseBigIntTypedArray(e, r);
        }
        if (a & 1 && typeof AggregateError != "undefined" && (t === AggregateError || r instanceof AggregateError)) return this.parseAggregateError(e, r);
        if (r instanceof Error) return this.parseError(e, r);
        if (Symbol.iterator in r || Symbol.asyncIterator in r) return this.parsePlainObject(e, r, !!t);
        throw new g(r);
      }
      async parseFunction(e) {
        let r = this.getReference(e);
        if (r.type !== 0) return r.value;
        let t = await this.parsePlugin(r.value, e);
        if (t) return t;
        throw new g(e);
      }
      async parse(e) {
        switch (typeof e) {
          case "boolean":
            return e ? I : A;
          case "undefined":
            return pe;
          case "string":
            return w(e);
          case "number":
            return ge(e);
          case "bigint":
            return Se(e);
          case "object": {
            if (e) {
              let r = this.getReference(e);
              return r.type === 0 ? await this.parseObject(r.value, e) : r.value;
            }
            return de;
          }
          case "symbol":
            return this.parseWellKnownSymbol(e);
          case "function":
            return this.parseFunction(e);
          default:
            throw new g(e);
        }
      }
      async parseTop(e) {
        try {
          return await this.parse(e);
        } catch (r) {
          throw r instanceof E ? r : new E(r);
        }
      }
    };
    $ = class extends k {
      constructor() {
        super(...arguments);
        this.mode = "cross";
      }
    };
    F = class {
      constructor(e) {
        this.plugins = e.plugins, this.refs = e.refs || /* @__PURE__ */ new Map();
      }
      deserializeReference(e) {
        return this.assignIndexedValue(e.i, Je(N(e.s)));
      }
      deserializeArray(e) {
        let r = e.l, t = this.assignIndexedValue(e.i, new Array(r)), n;
        for (let a = 0; a < r; a++) n = e.a[a], n && (t[a] = this.deserialize(n));
        return mr(t, e.o), t;
      }
      deserializeProperties(e, r) {
        let t = e.s;
        if (t) {
          let n = e.k, a = e.v;
          for (let i = 0, l; i < t; i++) l = n[i], typeof l == "string" ? r[N(l)] = this.deserialize(a[i]) : r[this.deserialize(l)] = this.deserialize(a[i]);
        }
        return r;
      }
      deserializeObject(e) {
        let r = this.assignIndexedValue(e.i, e.t === 10 ? {} : /* @__PURE__ */ Object.create(null));
        return this.deserializeProperties(e.p, r), mr(r, e.o), r;
      }
      deserializeDate(e) {
        return this.assignIndexedValue(e.i, new Date(e.s));
      }
      deserializeRegExp(e) {
        return this.assignIndexedValue(e.i, new RegExp(N(e.c), e.m));
      }
      deserializeSet(e) {
        let r = this.assignIndexedValue(e.i, /* @__PURE__ */ new Set()), t = e.a;
        for (let n = 0, a = e.l; n < a; n++) r.add(this.deserialize(t[n]));
        return r;
      }
      deserializeMap(e) {
        let r = this.assignIndexedValue(e.i, /* @__PURE__ */ new Map()), t = e.e.k, n = e.e.v;
        for (let a = 0, i = e.e.s; a < i; a++) r.set(this.deserialize(t[a]), this.deserialize(n[a]));
        return r;
      }
      deserializeArrayBuffer(e) {
        let r = new Uint8Array(e.s);
        return this.assignIndexedValue(e.i, r.buffer);
      }
      deserializeTypedArray(e) {
        let r = dr(e.c), t = this.deserialize(e.f);
        return this.assignIndexedValue(e.i, new r(t, e.b, e.l));
      }
      deserializeDataView(e) {
        let r = this.deserialize(e.f);
        return this.assignIndexedValue(e.i, new DataView(r, e.b, e.l));
      }
      deserializeDictionary(e, r) {
        if (e.p) {
          let t = this.deserializeProperties(e.p, {});
          Object.assign(r, t);
        }
        return r;
      }
      deserializeAggregateError(e) {
        let r = this.assignIndexedValue(e.i, new AggregateError([], N(e.m)));
        return this.deserializeDictionary(e, r);
      }
      deserializeError(e) {
        let r = Ze[e.s], t = this.assignIndexedValue(e.i, new r(N(e.m)));
        return this.deserializeDictionary(e, t);
      }
      deserializePromise(e) {
        let r = re$1(), t = this.assignIndexedValue(e.i, r), n = this.deserialize(e.f);
        return e.s ? r.resolve(n) : r.reject(n), t.promise;
      }
      deserializeBoxed(e) {
        return this.assignIndexedValue(e.i, Object(this.deserialize(e.f)));
      }
      deserializePlugin(e) {
        let r = this.plugins;
        if (r) {
          let t = N(e.c);
          for (let n = 0, a = r.length; n < a; n++) {
            let i = r[n];
            if (i.tag === t) return this.assignIndexedValue(e.i, i.deserialize(e.s, this, { id: e.i }));
          }
        }
        throw new W(e.c);
      }
      deserializePromiseConstructor(e) {
        return this.assignIndexedValue(e.i, this.assignIndexedValue(e.s, re$1()).promise);
      }
      deserializePromiseResolve(e) {
        let r = this.refs.get(e.i);
        f(r, new P("Promise")), r.resolve(this.deserialize(e.a[1]));
      }
      deserializePromiseReject(e) {
        let r = this.refs.get(e.i);
        f(r, new P("Promise")), r.reject(this.deserialize(e.a[1]));
      }
      deserializeIteratorFactoryInstance(e) {
        this.deserialize(e.a[0]);
        let r = this.deserialize(e.a[1]);
        return pr(r);
      }
      deserializeAsyncIteratorFactoryInstance(e) {
        this.deserialize(e.a[0]);
        let r = this.deserialize(e.a[1]);
        return ur(r);
      }
      deserializeStreamConstructor(e) {
        let r = this.assignIndexedValue(e.i, K()), t = e.a.length;
        if (t) for (let n = 0; n < t; n++) this.deserialize(e.a[n]);
        return r;
      }
      deserializeStreamNext(e) {
        let r = this.refs.get(e.i);
        f(r, new P("Stream")), r.next(this.deserialize(e.f));
      }
      deserializeStreamThrow(e) {
        let r = this.refs.get(e.i);
        f(r, new P("Stream")), r.throw(this.deserialize(e.f));
      }
      deserializeStreamReturn(e) {
        let r = this.refs.get(e.i);
        f(r, new P("Stream")), r.return(this.deserialize(e.f));
      }
      deserializeIteratorFactory(e) {
        this.deserialize(e.f);
      }
      deserializeAsyncIteratorFactory(e) {
        this.deserialize(e.a[1]);
      }
      deserializeTop(e) {
        try {
          return this.deserialize(e);
        } catch (r) {
          throw new ze(r);
        }
      }
      deserialize(e) {
        switch (e.t) {
          case 2:
            return He[e.s];
          case 0:
            return e.s;
          case 1:
            return N(e.s);
          case 3:
            return BigInt(e.s);
          case 4:
            return this.refs.get(e.i);
          case 18:
            return this.deserializeReference(e);
          case 9:
            return this.deserializeArray(e);
          case 10:
          case 11:
            return this.deserializeObject(e);
          case 5:
            return this.deserializeDate(e);
          case 6:
            return this.deserializeRegExp(e);
          case 7:
            return this.deserializeSet(e);
          case 8:
            return this.deserializeMap(e);
          case 19:
            return this.deserializeArrayBuffer(e);
          case 16:
          case 15:
            return this.deserializeTypedArray(e);
          case 20:
            return this.deserializeDataView(e);
          case 14:
            return this.deserializeAggregateError(e);
          case 13:
            return this.deserializeError(e);
          case 12:
            return this.deserializePromise(e);
          case 17:
            return Ge[e.s];
          case 21:
            return this.deserializeBoxed(e);
          case 25:
            return this.deserializePlugin(e);
          case 22:
            return this.deserializePromiseConstructor(e);
          case 23:
            return this.deserializePromiseResolve(e);
          case 24:
            return this.deserializePromiseReject(e);
          case 28:
            return this.deserializeIteratorFactoryInstance(e);
          case 30:
            return this.deserializeAsyncIteratorFactoryInstance(e);
          case 31:
            return this.deserializeStreamConstructor(e);
          case 32:
            return this.deserializeStreamNext(e);
          case 33:
            return this.deserializeStreamThrow(e);
          case 34:
            return this.deserializeStreamReturn(e);
          case 27:
            return this.deserializeIteratorFactory(e);
          case 29:
            return this.deserializeAsyncIteratorFactory(e);
          default:
            throw new y(e);
        }
      }
    };
    kr = /^[$A-Z_][0-9A-Z_$]*$/i;
    Vr = "Object.create(null)";
    Dr = "new Set";
    Br = "new Map";
    jr = "Promise.resolve";
    _r = "Promise.reject";
    Mr = { 3: "Object.freeze", 2: "Object.seal", 1: "Object.preventExtensions", 0: s };
    V = class {
      constructor(e) {
        this.stack = [];
        this.flags = [];
        this.assignments = [];
        this.plugins = e.plugins, this.features = e.features, this.marked = new Set(e.markedRefs);
      }
      createFunction(e, r) {
        return z$1(this.features, e, r);
      }
      createEffectfulFunction(e, r) {
        return S(this.features, e, r);
      }
      markRef(e) {
        this.marked.add(e);
      }
      isMarked(e) {
        return this.marked.has(e);
      }
      pushObjectFlag(e, r) {
        e !== 0 && (this.markRef(r), this.flags.push({ type: e, value: this.getRefParam(r) }));
      }
      resolveFlags() {
        let e = "";
        for (let r = 0, t = this.flags, n = t.length; r < n; r++) {
          let a = t[r];
          e += Mr[a.type] + "(" + a.value + "),";
        }
        return e;
      }
      resolvePatches() {
        let e = fr(this.assignments), r = this.resolveFlags();
        return e ? r ? e + r : e : r;
      }
      createAssignment(e, r) {
        this.assignments.push({ t: 0, s: e, k: s, v: r });
      }
      createAddAssignment(e, r) {
        this.assignments.push({ t: 1, s: this.getRefParam(e), k: s, v: r });
      }
      createSetAssignment(e, r, t) {
        this.assignments.push({ t: 2, s: this.getRefParam(e), k: r, v: t });
      }
      createDeleteAssignment(e, r) {
        this.assignments.push({ t: 3, s: this.getRefParam(e), k: r, v: s });
      }
      createArrayAssign(e, r, t) {
        this.createAssignment(this.getRefParam(e) + "[" + r + "]", t);
      }
      createObjectAssign(e, r, t) {
        this.createAssignment(this.getRefParam(e) + "." + r, t);
      }
      isIndexedValueInStack(e) {
        return e.t === 4 && this.stack.includes(e.i);
      }
      serializeReference(e) {
        return this.assignIndexedValue(e.i, O + '.get("' + e.s + '")');
      }
      serializeArrayItem(e, r, t) {
        return r ? this.isIndexedValueInStack(r) ? (this.markRef(e), this.createArrayAssign(e, t, this.getRefParam(r.i)), "") : this.serialize(r) : "";
      }
      serializeArray(e) {
        let r = e.i;
        if (e.l) {
          this.stack.push(r);
          let t = e.a, n = this.serializeArrayItem(r, t[0], 0), a = n === "";
          for (let i = 1, l = e.l, c; i < l; i++) c = this.serializeArrayItem(r, t[i], i), n += "," + c, a = c === "";
          return this.stack.pop(), this.pushObjectFlag(e.o, e.i), this.assignIndexedValue(r, "[" + n + (a ? ",]" : "]"));
        }
        return this.assignIndexedValue(r, "[]");
      }
      serializeProperty(e, r, t) {
        if (typeof r == "string") {
          let n = Number(r), a = n >= 0 && n.toString() === r || Le(r);
          if (this.isIndexedValueInStack(t)) {
            let i = this.getRefParam(t.i);
            return this.markRef(e.i), a && n !== n ? this.createObjectAssign(e.i, r, i) : this.createArrayAssign(e.i, a ? r : '"' + r + '"', i), "";
          }
          return (a ? r : '"' + r + '"') + ":" + this.serialize(t);
        }
        return "[" + this.serialize(r) + "]:" + this.serialize(t);
      }
      serializeProperties(e, r) {
        let t = r.s;
        if (t) {
          let n = r.k, a = r.v;
          this.stack.push(e.i);
          let i = this.serializeProperty(e, n[0], a[0]);
          for (let l = 1, c = i; l < t; l++) c = this.serializeProperty(e, n[l], a[l]), i += (c && i && ",") + c;
          return this.stack.pop(), "{" + i + "}";
        }
        return "{}";
      }
      serializeObject(e) {
        return this.pushObjectFlag(e.o, e.i), this.assignIndexedValue(e.i, this.serializeProperties(e, e.p));
      }
      serializeWithObjectAssign(e, r, t) {
        let n = this.serializeProperties(e, r);
        return n !== "{}" ? "Object.assign(" + t + "," + n + ")" : t;
      }
      serializeStringKeyAssignment(e, r, t, n) {
        let a = this.serialize(n), i = Number(t), l = i >= 0 && i.toString() === t || Le(t);
        if (this.isIndexedValueInStack(n)) l && i !== i ? this.createObjectAssign(e.i, t, a) : this.createArrayAssign(e.i, l ? t : '"' + t + '"', a);
        else {
          let c = this.assignments;
          this.assignments = r, l && i !== i ? this.createObjectAssign(e.i, t, a) : this.createArrayAssign(e.i, l ? t : '"' + t + '"', a), this.assignments = c;
        }
      }
      serializeAssignment(e, r, t, n) {
        if (typeof t == "string") this.serializeStringKeyAssignment(e, r, t, n);
        else {
          let a = this.stack;
          this.stack = [];
          let i = this.serialize(n);
          this.stack = a;
          let l = this.assignments;
          this.assignments = r, this.createArrayAssign(e.i, this.serialize(t), i), this.assignments = l;
        }
      }
      serializeAssignments(e, r) {
        let t = r.s;
        if (t) {
          let n = [], a = r.k, i = r.v;
          this.stack.push(e.i);
          for (let l = 0; l < t; l++) this.serializeAssignment(e, n, a[l], i[l]);
          return this.stack.pop(), fr(n);
        }
        return s;
      }
      serializeDictionary(e, r) {
        if (e.p) if (this.features & 8) r = this.serializeWithObjectAssign(e, e.p, r);
        else {
          this.markRef(e.i);
          let t = this.serializeAssignments(e, e.p);
          if (t) return "(" + this.assignIndexedValue(e.i, r) + "," + t + this.getRefParam(e.i) + ")";
        }
        return this.assignIndexedValue(e.i, r);
      }
      serializeNullConstructor(e) {
        return this.pushObjectFlag(e.o, e.i), this.serializeDictionary(e, Vr);
      }
      serializeDate(e) {
        return this.assignIndexedValue(e.i, 'new Date("' + e.s + '")');
      }
      serializeRegExp(e) {
        return this.assignIndexedValue(e.i, "/" + e.c + "/" + e.m);
      }
      serializeSetItem(e, r) {
        return this.isIndexedValueInStack(r) ? (this.markRef(e), this.createAddAssignment(e, this.getRefParam(r.i)), "") : this.serialize(r);
      }
      serializeSet(e) {
        let r = Dr, t = e.l, n = e.i;
        if (t) {
          let a = e.a;
          this.stack.push(n);
          let i = this.serializeSetItem(n, a[0]);
          for (let l = 1, c = i; l < t; l++) c = this.serializeSetItem(n, a[l]), i += (c && i && ",") + c;
          this.stack.pop(), i && (r += "([" + i + "])");
        }
        return this.assignIndexedValue(n, r);
      }
      serializeMapEntry(e, r, t, n) {
        if (this.isIndexedValueInStack(r)) {
          let a = this.getRefParam(r.i);
          if (this.markRef(e), this.isIndexedValueInStack(t)) {
            let l = this.getRefParam(t.i);
            return this.createSetAssignment(e, a, l), "";
          }
          if (t.t !== 4 && t.i != null && this.isMarked(t.i)) {
            let l = "(" + this.serialize(t) + ",[" + n + "," + n + "])";
            return this.createSetAssignment(e, a, this.getRefParam(t.i)), this.createDeleteAssignment(e, n), l;
          }
          let i = this.stack;
          return this.stack = [], this.createSetAssignment(e, a, this.serialize(t)), this.stack = i, "";
        }
        if (this.isIndexedValueInStack(t)) {
          let a = this.getRefParam(t.i);
          if (this.markRef(e), r.t !== 4 && r.i != null && this.isMarked(r.i)) {
            let l = "(" + this.serialize(r) + ",[" + n + "," + n + "])";
            return this.createSetAssignment(e, this.getRefParam(r.i), a), this.createDeleteAssignment(e, n), l;
          }
          let i = this.stack;
          return this.stack = [], this.createSetAssignment(e, this.serialize(r), a), this.stack = i, "";
        }
        return "[" + this.serialize(r) + "," + this.serialize(t) + "]";
      }
      serializeMap(e) {
        let r = Br, t = e.e.s, n = e.i, a = e.f, i = this.getRefParam(a.i);
        if (t) {
          let l = e.e.k, c = e.e.v;
          this.stack.push(n);
          let p2 = this.serializeMapEntry(n, l[0], c[0], i);
          for (let h = 1, X = p2; h < t; h++) X = this.serializeMapEntry(n, l[h], c[h], i), p2 += (X && p2 && ",") + X;
          this.stack.pop(), p2 && (r += "([" + p2 + "])");
        }
        return a.t === 26 && (this.markRef(a.i), r = "(" + this.serialize(a) + "," + r + ")"), this.assignIndexedValue(n, r);
      }
      serializeArrayBuffer(e) {
        let r = "new Uint8Array(", t = e.s, n = t.length;
        if (n) {
          r += "[" + t[0];
          for (let a = 1; a < n; a++) r += "," + t[a];
          r += "]";
        }
        return this.assignIndexedValue(e.i, r + ").buffer");
      }
      serializeTypedArray(e) {
        return this.assignIndexedValue(e.i, "new " + e.c + "(" + this.serialize(e.f) + "," + e.b + "," + e.l + ")");
      }
      serializeDataView(e) {
        return this.assignIndexedValue(e.i, "new DataView(" + this.serialize(e.f) + "," + e.b + "," + e.l + ")");
      }
      serializeAggregateError(e) {
        let r = e.i;
        this.stack.push(r);
        let t = this.serializeDictionary(e, 'new AggregateError([],"' + e.m + '")');
        return this.stack.pop(), t;
      }
      serializeError(e) {
        return this.serializeDictionary(e, "new " + ue[e.s] + '("' + e.m + '")');
      }
      serializePromise(e) {
        let r, t = e.f, n = e.i, a = e.s ? jr : _r;
        if (this.isIndexedValueInStack(t)) {
          let i = this.getRefParam(t.i);
          r = a + (e.s ? "().then(" + this.createFunction([], i) + ")" : "().catch(" + this.createEffectfulFunction([], "throw " + i) + ")");
        } else {
          this.stack.push(n);
          let i = this.serialize(t);
          this.stack.pop(), r = a + "(" + i + ")";
        }
        return this.assignIndexedValue(n, r);
      }
      serializeWellKnownSymbol(e) {
        return this.assignIndexedValue(e.i, $e[e.s]);
      }
      serializeBoxed(e) {
        return this.assignIndexedValue(e.i, "Object(" + this.serialize(e.f) + ")");
      }
      serializePlugin(e) {
        let r = this.plugins;
        if (r) for (let t = 0, n = r.length; t < n; t++) {
          let a = r[t];
          if (a.tag === e.c) return this.assignIndexedValue(e.i, a.serialize(e.s, this, { id: e.i }));
        }
        throw new W(e.c);
      }
      getConstructor(e) {
        let r = this.serialize(e);
        return r === this.getRefParam(e.i) ? r : "(" + r + ")";
      }
      serializePromiseConstructor(e) {
        let r = this.assignIndexedValue(e.s, "{p:0,s:0,f:0}");
        return this.assignIndexedValue(e.i, this.getConstructor(e.f) + "(" + r + ")");
      }
      serializePromiseResolve(e) {
        return this.getConstructor(e.a[0]) + "(" + this.getRefParam(e.i) + "," + this.serialize(e.a[1]) + ")";
      }
      serializePromiseReject(e) {
        return this.getConstructor(e.a[0]) + "(" + this.getRefParam(e.i) + "," + this.serialize(e.a[1]) + ")";
      }
      serializeSpecialReference(e) {
        return this.assignIndexedValue(e.i, cr(this.features, e.s));
      }
      serializeIteratorFactory(e) {
        let r = "", t = false;
        return e.f.t !== 4 && (this.markRef(e.f.i), r = "(" + this.serialize(e.f) + ",", t = true), r += this.assignIndexedValue(e.i, this.createFunction(["s"], this.createFunction(["i", "c", "d", "t"], "(i=0,t={[" + this.getRefParam(e.f.i) + "]:" + this.createFunction([], "t") + ",next:" + this.createEffectfulFunction([], "if(i>s.d)return{done:!0,value:void 0};if(d=s.v[c=i++],c===s.t)throw d;return{done:c===s.d,value:d}") + "})"))), t && (r += ")"), r;
      }
      serializeIteratorFactoryInstance(e) {
        return this.getConstructor(e.a[0]) + "(" + this.serialize(e.a[1]) + ")";
      }
      serializeAsyncIteratorFactory(e) {
        let r = e.a[0], t = e.a[1], n = "";
        r.t !== 4 && (this.markRef(r.i), n += "(" + this.serialize(r)), t.t !== 4 && (this.markRef(t.i), n += (n ? "," : "(") + this.serialize(t)), n && (n += ",");
        let a = this.assignIndexedValue(e.i, this.createFunction(["s"], this.createFunction(["b", "c", "p", "d", "e", "t", "f"], "(b=[],c=0,p=[],d=-1,e=!1,f=" + this.createEffectfulFunction(["i", "l"], "for(i=0,l=p.length;i<l;i++)p[i].s({done:!0,value:void 0})") + ",s.on({next:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!1,value:v});b.push(v)") + ",throw:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.f(v);f(),d=b.length,e=!0,b.push(v)") + ",return:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!0,value:v});f(),d=b.length,b.push(v)") + "}),t={[" + this.getRefParam(t.i) + "]:" + this.createFunction([], "t.p") + ",next:" + this.createEffectfulFunction(["i", "t", "v"], "if(d===-1){return((i=c++)>=b.length)?(" + this.getRefParam(r.i) + "(t={p:0,s:0,f:0}),p.push(t),t.p):{done:!1,value:b[i]}}if(c>d)return{done:!0,value:void 0};if(v=b[i=c++],i!==d)return{done:!1,value:v};if(e)throw v;return{done:!0,value:v}") + "})")));
        return n ? n + a + ")" : a;
      }
      serializeAsyncIteratorFactoryInstance(e) {
        return this.getConstructor(e.a[0]) + "(" + this.serialize(e.a[1]) + ")";
      }
      serializeStreamConstructor(e) {
        let r = this.assignIndexedValue(e.i, this.getConstructor(e.f) + "()"), t = e.a.length;
        if (t) {
          let n = this.serialize(e.a[0]);
          for (let a = 1; a < t; a++) n += "," + this.serialize(e.a[a]);
          return "(" + r + "," + n + "," + this.getRefParam(e.i) + ")";
        }
        return r;
      }
      serializeStreamNext(e) {
        return this.getRefParam(e.i) + ".next(" + this.serialize(e.f) + ")";
      }
      serializeStreamThrow(e) {
        return this.getRefParam(e.i) + ".throw(" + this.serialize(e.f) + ")";
      }
      serializeStreamReturn(e) {
        return this.getRefParam(e.i) + ".return(" + this.serialize(e.f) + ")";
      }
      serialize(e) {
        try {
          switch (e.t) {
            case 2:
              return qe[e.s];
            case 0:
              return "" + e.s;
            case 1:
              return '"' + e.s + '"';
            case 3:
              return e.s + "n";
            case 4:
              return this.getRefParam(e.i);
            case 18:
              return this.serializeReference(e);
            case 9:
              return this.serializeArray(e);
            case 10:
              return this.serializeObject(e);
            case 11:
              return this.serializeNullConstructor(e);
            case 5:
              return this.serializeDate(e);
            case 6:
              return this.serializeRegExp(e);
            case 7:
              return this.serializeSet(e);
            case 8:
              return this.serializeMap(e);
            case 19:
              return this.serializeArrayBuffer(e);
            case 16:
            case 15:
              return this.serializeTypedArray(e);
            case 20:
              return this.serializeDataView(e);
            case 14:
              return this.serializeAggregateError(e);
            case 13:
              return this.serializeError(e);
            case 12:
              return this.serializePromise(e);
            case 17:
              return this.serializeWellKnownSymbol(e);
            case 21:
              return this.serializeBoxed(e);
            case 22:
              return this.serializePromiseConstructor(e);
            case 23:
              return this.serializePromiseResolve(e);
            case 24:
              return this.serializePromiseReject(e);
            case 25:
              return this.serializePlugin(e);
            case 26:
              return this.serializeSpecialReference(e);
            case 27:
              return this.serializeIteratorFactory(e);
            case 28:
              return this.serializeIteratorFactoryInstance(e);
            case 29:
              return this.serializeAsyncIteratorFactory(e);
            case 30:
              return this.serializeAsyncIteratorFactoryInstance(e);
            case 31:
              return this.serializeStreamConstructor(e);
            case 32:
              return this.serializeStreamNext(e);
            case 33:
              return this.serializeStreamThrow(e);
            case 34:
              return this.serializeStreamReturn(e);
            default:
              throw new y(e);
          }
        } catch (r) {
          throw new Te(r);
        }
      }
    };
    D = class extends V {
      constructor(r) {
        super(r);
        this.mode = "cross";
        this.scopeId = r.scopeId;
      }
      getRefParam(r) {
        return Q + "[" + r + "]";
      }
      assignIndexedValue(r, t) {
        return this.getRefParam(r) + "=" + t;
      }
      serializeTop(r) {
        let t = this.serialize(r), n = r.i;
        if (n == null) return t;
        let a = this.resolvePatches(), i = this.getRefParam(n), l = this.scopeId == null ? "" : Q, c = a ? "(" + t + "," + a + i + ")" : t;
        if (l === "") return r.t === 10 && !a ? "(" + c + ")" : c;
        let p2 = this.scopeId == null ? "()" : "(" + Q + '["' + d(this.scopeId) + '"])';
        return "(" + this.createFunction([l], c) + ")" + p2;
      }
    };
    v = class extends Y {
      parseItems(e) {
        let r = [];
        for (let t = 0, n = e.length; t < n; t++) t in e && (r[t] = this.parse(e[t]));
        return r;
      }
      parseArray(e, r) {
        return Ne(e, r, this.parseItems(r));
      }
      parseProperties(e) {
        let r = Object.entries(e), t = [], n = [];
        for (let i = 0, l = r.length; i < l; i++) t.push(d(r[i][0])), n.push(this.parse(r[i][1]));
        let a = Symbol.iterator;
        return a in e && (t.push(this.parseWellKnownSymbol(a)), n.push(M(this.parseIteratorFactory(), this.parse(J(e))))), a = Symbol.asyncIterator, a in e && (t.push(this.parseWellKnownSymbol(a)), n.push(U(this.parseAsyncIteratorFactory(), this.parse(K())))), a = Symbol.toStringTag, a in e && (t.push(this.parseWellKnownSymbol(a)), n.push(w(e[a]))), a = Symbol.isConcatSpreadable, a in e && (t.push(this.parseWellKnownSymbol(a)), n.push(e[a] ? I : A)), { k: t, v: n, s: t.length };
      }
      parsePlainObject(e, r, t) {
        return this.createObjectNode(e, r, t, this.parseProperties(r));
      }
      parseBoxed(e, r) {
        return be(e, this.parse(r.valueOf()));
      }
      parseTypedArray(e, r) {
        return xe(e, r, this.parse(r.buffer));
      }
      parseBigIntTypedArray(e, r) {
        return Ie(e, r, this.parse(r.buffer));
      }
      parseDataView(e, r) {
        return Ae(e, r, this.parse(r.buffer));
      }
      parseError(e, r) {
        let t = j(r, this.features);
        return we(e, r, t ? this.parseProperties(t) : s);
      }
      parseAggregateError(e, r) {
        let t = j(r, this.features);
        return Ee(e, r, t ? this.parseProperties(t) : s);
      }
      parseMap(e, r) {
        let t = [], n = [];
        for (let [a, i] of r.entries()) t.push(this.parse(a)), n.push(this.parse(i));
        return this.createMapNode(e, t, n, r.size);
      }
      parseSet(e, r) {
        let t = [];
        for (let n of r.keys()) t.push(this.parse(n));
        return Pe(e, r.size, t);
      }
      parsePlugin(e, r) {
        let t = this.plugins;
        if (t) for (let n = 0, a = t.length; n < a; n++) {
          let i = t[n];
          if (i.parse.sync && i.test(r)) return _(e, i.tag, i.parse.sync(r, this, { id: e }));
        }
      }
      parseStream(e, r) {
        return L(e, this.parseSpecialReference(4), []);
      }
      parsePromise(e, r) {
        return this.createPromiseConstructorNode(e, this.createIndex({}));
      }
      parseObject(e, r) {
        if (Array.isArray(r)) return this.parseArray(e, r);
        if (Fe(r)) return this.parseStream(e, r);
        let t = r.constructor;
        if (t === T) return this.parse(r.replacement);
        let n = this.parsePlugin(e, r);
        if (n) return n;
        switch (t) {
          case Object:
            return this.parsePlainObject(e, r, false);
          case void 0:
            return this.parsePlainObject(e, r, true);
          case Date:
            return he(e, r);
          case RegExp:
            return ye(e, r);
          case Error:
          case EvalError:
          case RangeError:
          case ReferenceError:
          case SyntaxError:
          case TypeError:
          case URIError:
            return this.parseError(e, r);
          case Number:
          case Boolean:
          case String:
          case BigInt:
            return this.parseBoxed(e, r);
          case ArrayBuffer:
            return ve(e, r);
          case Int8Array:
          case Int16Array:
          case Int32Array:
          case Uint8Array:
          case Uint16Array:
          case Uint32Array:
          case Uint8ClampedArray:
          case Float32Array:
          case Float64Array:
            return this.parseTypedArray(e, r);
          case DataView:
            return this.parseDataView(e, r);
          case Map:
            return this.parseMap(e, r);
          case Set:
            return this.parseSet(e, r);
        }
        if (t === Promise || r instanceof Promise) return this.parsePromise(e, r);
        let a = this.features;
        if (a & 16) switch (t) {
          case BigInt64Array:
          case BigUint64Array:
            return this.parseBigIntTypedArray(e, r);
        }
        if (a & 1 && typeof AggregateError != "undefined" && (t === AggregateError || r instanceof AggregateError)) return this.parseAggregateError(e, r);
        if (r instanceof Error) return this.parseError(e, r);
        if (Symbol.iterator in r || Symbol.asyncIterator in r) return this.parsePlainObject(e, r, !!t);
        throw new g(r);
      }
      parseFunction(e) {
        let r = this.getReference(e);
        if (r.type !== 0) return r.value;
        let t = this.parsePlugin(r.value, e);
        if (t) return t;
        throw new g(e);
      }
      parse(e) {
        switch (typeof e) {
          case "boolean":
            return e ? I : A;
          case "undefined":
            return pe;
          case "string":
            return w(e);
          case "number":
            return ge(e);
          case "bigint":
            return Se(e);
          case "object": {
            if (e) {
              let r = this.getReference(e);
              return r.type === 0 ? this.parseObject(r.value, e) : r.value;
            }
            return de;
          }
          case "symbol":
            return this.parseWellKnownSymbol(e);
          case "function":
            return this.parseFunction(e);
          default:
            throw new g(e);
        }
      }
      parseTop(e) {
        try {
          return this.parse(e);
        } catch (r) {
          throw r instanceof E ? r : new E(r);
        }
      }
    };
    oe = class extends v {
      constructor(r) {
        super(r);
        this.alive = true;
        this.pending = 0;
        this.initial = true;
        this.buffer = [];
        this.onParseCallback = r.onParse, this.onErrorCallback = r.onError, this.onDoneCallback = r.onDone;
      }
      onParseInternal(r, t) {
        try {
          this.onParseCallback(r, t);
        } catch (n) {
          this.onError(n);
        }
      }
      flush() {
        for (let r = 0, t = this.buffer.length; r < t; r++) this.onParseInternal(this.buffer[r], false);
      }
      onParse(r) {
        this.initial ? this.buffer.push(r) : this.onParseInternal(r, false);
      }
      onError(r) {
        if (this.onErrorCallback) this.onErrorCallback(r);
        else throw r;
      }
      onDone() {
        this.onDoneCallback && this.onDoneCallback();
      }
      pushPendingState() {
        this.pending++;
      }
      popPendingState() {
        --this.pending <= 0 && this.onDone();
      }
      parseProperties(r) {
        let t = Object.entries(r), n = [], a = [];
        for (let l = 0, c = t.length; l < c; l++) n.push(d(t[l][0])), a.push(this.parse(t[l][1]));
        let i = Symbol.iterator;
        return i in r && (n.push(this.parseWellKnownSymbol(i)), a.push(M(this.parseIteratorFactory(), this.parse(J(r))))), i = Symbol.asyncIterator, i in r && (n.push(this.parseWellKnownSymbol(i)), a.push(U(this.parseAsyncIteratorFactory(), this.parse(Ve(r))))), i = Symbol.toStringTag, i in r && (n.push(this.parseWellKnownSymbol(i)), a.push(w(r[i]))), i = Symbol.isConcatSpreadable, i in r && (n.push(this.parseWellKnownSymbol(i)), a.push(r[i] ? I : A)), { k: n, v: a, s: n.length };
      }
      handlePromiseSuccess(r, t) {
        let n = this.parseWithError(t);
        n && this.onParse(u$1(23, r, s, s, s, s, s, s, [this.parseSpecialReference(2), n], s, s, s)), this.popPendingState();
      }
      handlePromiseFailure(r, t) {
        if (this.alive) {
          let n = this.parseWithError(t);
          n && this.onParse(u$1(24, r, s, s, s, s, s, s, [this.parseSpecialReference(3), n], s, s, s));
        }
        this.popPendingState();
      }
      parsePromise(r, t) {
        let n = this.createIndex({});
        return t.then(this.handlePromiseSuccess.bind(this, n), this.handlePromiseFailure.bind(this, n)), this.pushPendingState(), this.createPromiseConstructorNode(r, n);
      }
      parsePlugin(r, t) {
        let n = this.plugins;
        if (n) for (let a = 0, i = n.length; a < i; a++) {
          let l = n[a];
          if (l.parse.stream && l.test(t)) return _(r, l.tag, l.parse.stream(t, this, { id: r }));
        }
        return s;
      }
      parseStream(r, t) {
        let n = L(r, this.parseSpecialReference(4), []);
        return this.pushPendingState(), t.on({ next: (a) => {
          if (this.alive) {
            let i = this.parseWithError(a);
            i && this.onParse(Re(r, i));
          }
        }, throw: (a) => {
          if (this.alive) {
            let i = this.parseWithError(a);
            i && this.onParse(Oe(r, i));
          }
          this.popPendingState();
        }, return: (a) => {
          if (this.alive) {
            let i = this.parseWithError(a);
            i && this.onParse(Ce(r, i));
          }
          this.popPendingState();
        } }), n;
      }
      parseWithError(r) {
        try {
          return this.parse(r);
        } catch (t) {
          return this.onError(t), s;
        }
      }
      start(r) {
        let t = this.parseWithError(r);
        t && (this.onParseInternal(t, true), this.initial = false, this.flush(), this.pending <= 0 && this.destroy());
      }
      destroy() {
        this.alive && (this.onDone(), this.alive = false);
      }
      isAlive() {
        return this.alive;
      }
    };
    G = class extends oe {
      constructor() {
        super(...arguments);
        this.mode = "cross";
      }
    };
    ne = class extends F {
      constructor(r) {
        super(r);
        this.mode = "vanilla";
        this.marked = new Set(r.markedRefs);
      }
      assignIndexedValue(r, t) {
        return this.marked.has(r) && this.refs.set(r, t), t;
      }
    };
    GLOBAL_TSR = "$_TSR";
    p = {};
    ee2 = Hr({ tag: "seroval-plugins/web/ReadableStreamFactory", test(e) {
      return e === p;
    }, parse: { sync() {
    }, async async() {
      return await Promise.resolve(void 0);
    }, stream() {
    } }, serialize(e, r) {
      return r.createFunction(["d"], "new ReadableStream({start:" + r.createEffectfulFunction(["c"], "d.on({next:" + r.createEffectfulFunction(["v"], "try{c.enqueue(v)}catch{}") + ",throw:" + r.createEffectfulFunction(["v"], "c.error(v)") + ",return:" + r.createEffectfulFunction([], "try{c.close()}catch{}") + "})") + "})");
    }, deserialize() {
      return p;
    } });
    re = Hr({ tag: "seroval/plugins/web/ReadableStream", extends: [ee2], test(e) {
      return typeof ReadableStream == "undefined" ? false : e instanceof ReadableStream;
    }, parse: { sync(e, r) {
      return { factory: r.parse(p), stream: r.parse(K()) };
    }, async async(e, r) {
      return { factory: await r.parse(p), stream: await r.parse(z2(e)) };
    }, stream(e, r) {
      return { factory: r.parse(p), stream: r.parse(z2(e)) };
    } }, serialize(e, r) {
      return "(" + r.serialize(e.factory) + ")(" + r.serialize(e.stream) + ")";
    }, deserialize(e, r) {
      let a = r.deserialize(e.stream);
      return new ReadableStream({ start(t) {
        a.on({ next(n) {
          try {
            t.enqueue(n);
          } catch (b) {
          }
        }, throw(n) {
          t.error(n);
        }, return() {
          try {
            t.close();
          } catch (n) {
          }
        } });
      } });
    } });
    u = re;
    ShallowErrorPlugin = /* @__PURE__ */ Hr({
      tag: "$TSR/Error",
      test(value) {
        return value instanceof Error;
      },
      parse: {
        sync(value, ctx) {
          return {
            message: ctx.parse(value.message)
          };
        },
        async async(value, ctx) {
          return {
            message: await ctx.parse(value.message)
          };
        },
        stream(value, ctx) {
          return {
            message: ctx.parse(value.message)
          };
        }
      },
      serialize(node, ctx) {
        return "new Error(" + ctx.serialize(node.message) + ")";
      },
      deserialize(node, ctx) {
        return new Error(ctx.deserialize(node.message));
      }
    });
    defaultSerovalPlugins = [
      ShallowErrorPlugin,
      // ReadableStreamNode is not exported by seroval
      u
    ];
    TSS_FORMDATA_CONTEXT = "__TSS_CONTEXT";
    TSS_SERVER_FUNCTION = Symbol.for("TSS_SERVER_FUNCTION");
    TSS_SERVER_FUNCTION_FACTORY = Symbol.for(
      "TSS_SERVER_FUNCTION_FACTORY"
    );
    X_TSS_SERIALIZED = "x-tss-serialized";
    X_TSS_RAW_RESPONSE = "x-tss-raw";
    startStorage = new AsyncLocalStorage();
    getServerContextAfterGlobalMiddlewares = () => {
      const start = getStartContext();
      return start.contextAfterGlobalMiddlewares;
    };
    getStartOptions = () => getStartContext().startOptions;
    createServerFn = (options2, __opts) => {
      const resolvedOptions = __opts || options2 || {};
      if (typeof resolvedOptions.method === "undefined") {
        resolvedOptions.method = "GET";
      }
      const res = {
        options: resolvedOptions,
        middleware: (middleware) => {
          const newMiddleware = [...resolvedOptions.middleware || []];
          middleware.map((m2) => {
            if (TSS_SERVER_FUNCTION_FACTORY in m2) {
              if (m2.options.middleware) {
                newMiddleware.push(...m2.options.middleware);
              }
            } else {
              newMiddleware.push(m2);
            }
          });
          const newOptions = {
            ...resolvedOptions,
            middleware: newMiddleware
          };
          const res2 = createServerFn(void 0, newOptions);
          res2[TSS_SERVER_FUNCTION_FACTORY] = true;
          return res2;
        },
        inputValidator: (inputValidator) => {
          const newOptions = { ...resolvedOptions, inputValidator };
          return createServerFn(void 0, newOptions);
        },
        handler: (...args) => {
          const [extractedFn, serverFn] = args;
          const newOptions = { ...resolvedOptions, extractedFn, serverFn };
          const resolvedMiddleware = [
            ...newOptions.middleware || [],
            serverFnBaseToMiddleware(newOptions)
          ];
          return Object.assign(
            async (opts) => {
              return executeMiddleware$1(resolvedMiddleware, "client", {
                ...extractedFn,
                ...newOptions,
                data: opts?.data,
                headers: opts?.headers,
                signal: opts?.signal,
                context: {}
              }).then((d2) => {
                if (d2.error) throw d2.error;
                return d2.result;
              });
            },
            {
              // This copies over the URL, function ID
              ...extractedFn,
              // The extracted function on the server-side calls
              // this function
              __executeServer: async (opts, signal) => {
                const serverContextAfterGlobalMiddlewares = getServerContextAfterGlobalMiddlewares();
                const ctx = {
                  ...extractedFn,
                  ...opts,
                  context: {
                    ...serverContextAfterGlobalMiddlewares,
                    ...opts.context
                  },
                  signal
                };
                return executeMiddleware$1(resolvedMiddleware, "server", ctx).then(
                  (d2) => ({
                    // Only send the result and sendContext back to the client
                    result: d2.result,
                    error: d2.error,
                    context: d2.sendContext
                  })
                );
              }
            }
          );
        }
      };
      const fun = (options22) => {
        return {
          ...res,
          options: {
            ...res.options,
            ...options22
          }
        };
      };
      return Object.assign(fun, res);
    };
    applyMiddleware = async (middlewareFn, ctx, nextFn) => {
      return middlewareFn({
        ...ctx,
        next: (async (userCtx = {}) => {
          return nextFn({
            ...ctx,
            ...userCtx,
            context: {
              ...ctx.context,
              ...userCtx.context
            },
            sendContext: {
              ...ctx.sendContext,
              ...userCtx.sendContext ?? {}
            },
            headers: mergeHeaders(ctx.headers, userCtx.headers),
            result: userCtx.result !== void 0 ? userCtx.result : userCtx instanceof Response ? userCtx : ctx.result,
            error: userCtx.error ?? ctx.error
          });
        })
      });
    };
    minifiedTsrBootStrapScript = 'self.$_TSR={c(){document.querySelectorAll(".\\\\$tsr").forEach(e=>{e.remove()})},p(e){this.initialized?e():this.buffer.push(e)},buffer:[]};\n';
    SCOPE_ID = "tsr";
    NullProtoObj = /* @__PURE__ */ (() => {
      const e = function() {
      };
      return e.prototype = /* @__PURE__ */ Object.create(null), Object.freeze(e.prototype), e;
    })();
    FastURL = /* @__PURE__ */ (() => {
      const FastURL$1 = class URL {
        #originalURL;
        #parsedURL;
        _pathname;
        _urlqindex;
        _query;
        _search;
        constructor(url) {
          this.#originalURL = url;
        }
        get _url() {
          if (!this.#parsedURL) this.#parsedURL = new globalThis.URL(this.#originalURL);
          return this.#parsedURL;
        }
        toString() {
          return this._url.toString();
        }
        toJSON() {
          return this.toString();
        }
        get pathname() {
          if (this.#parsedURL) return this.#parsedURL.pathname;
          if (this._pathname === void 0) {
            const url = this.#originalURL;
            const protoIndex = url.indexOf("://");
            if (protoIndex === -1) return this._url.pathname;
            const pIndex = url.indexOf("/", protoIndex + 4);
            if (pIndex === -1) return this._url.pathname;
            const qIndex = this._urlqindex = url.indexOf("?", pIndex);
            this._pathname = url.slice(pIndex, qIndex === -1 ? void 0 : qIndex);
          }
          return this._pathname;
        }
        set pathname(value) {
          this._pathname = void 0;
          this._url.pathname = value;
        }
        get searchParams() {
          if (this.#parsedURL) return this.#parsedURL.searchParams;
          if (!this._query) this._query = new URLSearchParams(this.search);
          return this._query;
        }
        get search() {
          if (this.#parsedURL) return this.#parsedURL.search;
          if (this._search === void 0) {
            const qIndex = this._urlqindex;
            if (qIndex === -1 || qIndex === this.#originalURL.length - 1) this._search = "";
            else this._search = qIndex === void 0 ? this._url.search : this.#originalURL.slice(qIndex);
          }
          return this._search;
        }
        set search(value) {
          this._search = void 0;
          this._query = void 0;
          this._url.search = value;
        }
      };
      const slowProps = [
        "hash",
        "host",
        "hostname",
        "href",
        "origin",
        "password",
        "port",
        "protocol",
        "username"
      ];
      for (const prop of slowProps) Object.defineProperty(FastURL$1.prototype, prop, {
        get() {
          return this._url[prop];
        },
        set(value) {
          this._url[prop] = value;
        }
      });
      Object.setPrototypeOf(FastURL$1, globalThis.URL);
      return FastURL$1;
    })();
    NodeResponse = /* @__PURE__ */ (() => {
      const NativeResponse = globalThis.Response;
      const STATUS_CODES = globalThis.process?.getBuiltinModule("node:http")?.STATUS_CODES || {};
      class NodeResponse$1 {
        #body;
        #init;
        #headers;
        #response;
        constructor(body, init) {
          this.#body = body;
          this.#init = init;
        }
        get status() {
          return this.#response?.status || this.#init?.status || 200;
        }
        get statusText() {
          return this.#response?.statusText || this.#init?.statusText || STATUS_CODES[this.status] || "";
        }
        get headers() {
          if (this.#response) return this.#response.headers;
          if (this.#headers) return this.#headers;
          const initHeaders = this.#init?.headers;
          return this.#headers = initHeaders instanceof Headers ? initHeaders : new Headers(initHeaders);
        }
        get ok() {
          if (this.#response) return this.#response.ok;
          const status = this.status;
          return status >= 200 && status < 300;
        }
        get _response() {
          if (this.#response) return this.#response;
          this.#response = new NativeResponse(this.#body, this.#headers ? {
            ...this.#init,
            headers: this.#headers
          } : this.#init);
          this.#init = void 0;
          this.#headers = void 0;
          this.#body = void 0;
          return this.#response;
        }
        nodeResponse() {
          const status = this.status;
          const statusText = this.statusText;
          let body;
          let contentType;
          let contentLength;
          if (this.#response) body = this.#response.body;
          else if (this.#body) if (this.#body instanceof ReadableStream) body = this.#body;
          else if (typeof this.#body === "string") {
            body = this.#body;
            contentType = "text/plain; charset=UTF-8";
            contentLength = Buffer.byteLength(this.#body);
          } else if (this.#body instanceof ArrayBuffer) {
            body = Buffer.from(this.#body);
            contentLength = this.#body.byteLength;
          } else if (this.#body instanceof Uint8Array) {
            body = this.#body;
            contentLength = this.#body.byteLength;
          } else if (this.#body instanceof DataView) {
            body = Buffer.from(this.#body.buffer);
            contentLength = this.#body.byteLength;
          } else if (this.#body instanceof Blob) {
            body = this.#body.stream();
            contentType = this.#body.type;
            contentLength = this.#body.size;
          } else if (typeof this.#body.pipe === "function") body = this.#body;
          else body = this._response.body;
          const rawNodeHeaders = [];
          const initHeaders = this.#init?.headers;
          const headerEntries = this.#response?.headers || this.#headers || (initHeaders ? Array.isArray(initHeaders) ? initHeaders : initHeaders?.entries ? initHeaders.entries() : Object.entries(initHeaders).map(([k2, v2]) => [k2.toLowerCase(), v2]) : void 0);
          let hasContentTypeHeader;
          let hasContentLength;
          if (headerEntries) for (const [key, value] of headerEntries) {
            if (key === "set-cookie") {
              for (const setCookie2 of splitSetCookieString(value)) rawNodeHeaders.push(["set-cookie", setCookie2]);
              continue;
            }
            rawNodeHeaders.push([key, value]);
            if (key === "content-type") hasContentTypeHeader = true;
            else if (key === "content-length") hasContentLength = true;
          }
          if (contentType && !hasContentTypeHeader) rawNodeHeaders.push(["content-type", contentType]);
          if (contentLength && !hasContentLength) rawNodeHeaders.push(["content-length", String(contentLength)]);
          this.#init = void 0;
          this.#headers = void 0;
          this.#response = void 0;
          this.#body = void 0;
          return {
            status,
            statusText,
            headers: rawNodeHeaders,
            body
          };
        }
      }
      inheritProps(NodeResponse$1.prototype, NativeResponse.prototype, "_response");
      Object.setPrototypeOf(NodeResponse$1, NativeResponse);
      Object.setPrototypeOf(NodeResponse$1.prototype, NativeResponse.prototype);
      return NodeResponse$1;
    })();
    H3Event = class {
      /**
      * Access to the H3 application instance.
      */
      app;
      /**
      * Incoming HTTP request info.
      *
      * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Request)
      */
      req;
      /**
      * Access to the parsed request URL.
      *
      * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/URL)
      */
      url;
      /**
      * Event context.
      */
      context;
      /**
      * @internal
      */
      static __is_event__ = true;
      /**
      * @internal
      */
      _res;
      constructor(req, context, app) {
        this.context = context || req.context || new NullProtoObj();
        this.req = req;
        this.app = app;
        const _url = req._url;
        this.url = _url && _url instanceof URL ? _url : new FastURL(req.url);
      }
      /**
      * Prepared HTTP response.
      */
      get res() {
        if (!this._res) this._res = new H3EventResponse();
        return this._res;
      }
      /**
      * Access to runtime specific additional context.
      *
      */
      get runtime() {
        return this.req.runtime;
      }
      /**
      * Tell the runtime about an ongoing operation that shouldn't close until the promise resolves.
      */
      waitUntil(promise) {
        this.req.waitUntil?.(promise);
      }
      toString() {
        return `[${this.req.method}] ${this.req.url}`;
      }
      toJSON() {
        return this.toString();
      }
      /**
      * Access to the raw Node.js req/res objects.
      *
      * @deprecated Use `event.runtime.{node|deno|bun|...}.` instead.
      */
      get node() {
        return this.req.runtime?.node;
      }
      /**
      * Access to the incoming request headers.
      *
      * @deprecated Use `event.req.headers` instead.
      *
      */
      get headers() {
        return this.req.headers;
      }
      /**
      * Access to the incoming request url (pathname+search).
      *
      * @deprecated Use `event.url.pathname + event.url.search` instead.
      *
      * Example: `/api/hello?name=world`
      * */
      get path() {
        return this.url.pathname + this.url.search;
      }
      /**
      * Access to the incoming request method.
      *
      * @deprecated Use `event.req.method` instead.
      */
      get method() {
        return this.req.method;
      }
    };
    H3EventResponse = class {
      status;
      statusText;
      _headers;
      get headers() {
        if (!this._headers) this._headers = new Headers();
        return this._headers;
      }
    };
    DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
    HTTPError = class HTTPError2 extends Error {
      get name() {
        return "HTTPError";
      }
      /**
      * HTTP status code in range [200...599]
      */
      status;
      /**
      * HTTP status text
      *
      * **NOTE:** This should be short (max 512 to 1024 characters).
      * Allowed characters are tabs, spaces, visible ASCII characters, and extended characters (byte value 128–255).
      *
      * **TIP:** Use `message` for longer error descriptions in JSON body.
      */
      statusText;
      /**
      * Additional HTTP headers to be sent in error response.
      */
      headers;
      /**
      * Original error object that caused this error.
      */
      cause;
      /**
      * Additional data attached in the error JSON body under `data` key.
      */
      data;
      /**
      * Additional top level JSON body properties to attach in the error JSON body.
      */
      body;
      /**
      * Flag to indicate that the error was not handled by the application.
      *
      * Unhandled error stack trace, data and message are hidden in non debug mode for security reasons.
      */
      unhandled;
      /**
      * Check if the input is an instance of HTTPError using its constructor name.
      *
      * It is safer than using `instanceof` because it works across different contexts (e.g., if the error was thrown in a different module).
      */
      static isError(input) {
        return input instanceof Error && input?.name === "HTTPError";
      }
      /**
      * Create a new HTTPError with the given status code and optional status text and details.
      *
      * @example
      *
      * HTTPError.status(404)
      * HTTPError.status(418, "I'm a teapot")
      * HTTPError.status(403, "Forbidden", { message: "Not authenticated" })
      */
      static status(status, statusText, details) {
        return new HTTPError2({
          ...details,
          statusText,
          status
        });
      }
      constructor(arg1, arg2) {
        let messageInput;
        let details;
        if (typeof arg1 === "string") {
          messageInput = arg1;
          details = arg2;
        } else details = arg1;
        const status = sanitizeStatusCode(details?.status || details?.cause?.status || details?.status || details?.statusCode, 500);
        const statusText = sanitizeStatusMessage(details?.statusText || details?.cause?.statusText || details?.statusText || details?.statusMessage);
        const message = messageInput || details?.message || details?.cause?.message || details?.statusText || details?.statusMessage || [
          "HTTPError",
          status,
          statusText
        ].filter(Boolean).join(" ");
        super(message, { cause: details });
        this.cause = details;
        Error.captureStackTrace?.(this, this.constructor);
        this.status = status;
        this.statusText = statusText || void 0;
        const rawHeaders = details?.headers || details?.cause?.headers;
        this.headers = rawHeaders ? new Headers(rawHeaders) : void 0;
        this.unhandled = details?.unhandled ?? details?.cause?.unhandled ?? void 0;
        this.data = details?.data;
        this.body = details?.body;
      }
      /**
      * @deprecated Use `status`
      */
      get statusCode() {
        return this.status;
      }
      /**
      * @deprecated Use `statusText`
      */
      get statusMessage() {
        return this.statusText;
      }
      toJSON() {
        const unhandled = this.unhandled;
        return {
          status: this.status,
          statusText: this.statusText,
          unhandled,
          message: unhandled ? "HTTPError" : this.message,
          data: unhandled ? void 0 : this.data,
          ...unhandled ? void 0 : this.body
        };
      }
    };
    kNotFound = /* @__PURE__ */ Symbol.for("h3.notFound");
    kHandled = /* @__PURE__ */ Symbol.for("h3.handled");
    emptyHeaders = /* @__PURE__ */ new Headers({ "content-length": "0" });
    jsonHeaders = /* @__PURE__ */ new Headers({ "content-type": "application/json;charset=UTF-8" });
    eventStorage = new AsyncLocalStorage();
    VIRTUAL_MODULES = {
      startManifest: "tanstack-start-manifest:v",
      serverFnManifest: "tanstack-start-server-fn-manifest:v",
      injectedHeadScripts: "tanstack-start-injected-head-scripts:v"
    };
    regex = void 0;
    handleServerAction = async ({
      request,
      context
    }) => {
      const controller = new AbortController();
      const signal = controller.signal;
      const abort = () => controller.abort();
      request.signal.addEventListener("abort", abort);
      if (regex === void 0) {
        regex = new RegExp(`${"/_serverFn/"}([^/?#]+)`);
      }
      const method = request.method;
      const url = new URL(request.url, "http://localhost:3000");
      const match = url.pathname.match(regex);
      const serverFnId = match ? match[1] : null;
      const search = Object.fromEntries(url.searchParams.entries());
      const isCreateServerFn = "createServerFn" in search;
      if (typeof serverFnId !== "string") {
        throw new Error("Invalid server action param for serverFnId: " + serverFnId);
      }
      const action = await getServerFnById(serverFnId);
      const formDataContentTypes = [
        "multipart/form-data",
        "application/x-www-form-urlencoded"
      ];
      const contentType = request.headers.get("Content-Type");
      const serovalPlugins = getDefaultSerovalPlugins();
      function parsePayload(payload) {
        const parsedPayload = Lo(payload, { plugins: serovalPlugins });
        return parsedPayload;
      }
      const response = await (async () => {
        try {
          let result = await (async () => {
            if (formDataContentTypes.some(
              (type) => contentType && contentType.includes(type)
            )) {
              invariant(
                method.toLowerCase() !== "get",
                "GET requests with FormData payloads are not supported"
              );
              const formData = await request.formData();
              const serializedContext = formData.get(TSS_FORMDATA_CONTEXT);
              formData.delete(TSS_FORMDATA_CONTEXT);
              const params = {
                context,
                data: formData
              };
              if (typeof serializedContext === "string") {
                try {
                  const parsedContext = JSON.parse(serializedContext);
                  if (typeof parsedContext === "object" && parsedContext) {
                    params.context = { ...context, ...parsedContext };
                  }
                } catch {
                }
              }
              return await action(params, signal);
            }
            if (method.toLowerCase() === "get") {
              invariant(
                isCreateServerFn,
                "expected GET request to originate from createServerFn"
              );
              let payload = search.payload;
              payload = payload ? parsePayload(JSON.parse(payload)) : payload;
              payload.context = { ...context, ...payload.context };
              return await action(payload, signal);
            }
            if (method.toLowerCase() !== "post") {
              throw new Error("expected POST method");
            }
            if (!contentType || !contentType.includes("application/json")) {
              throw new Error("expected application/json content type");
            }
            const jsonPayload = await request.json();
            if (isCreateServerFn) {
              const payload = parsePayload(jsonPayload);
              payload.context = { ...payload.context, ...context };
              return await action(payload, signal);
            }
            return await action(...jsonPayload);
          })();
          if (result.result instanceof Response) {
            result.result.headers.set(X_TSS_RAW_RESPONSE, "true");
            return result.result;
          }
          if (!isCreateServerFn) {
            result = result.result;
            if (result instanceof Response) {
              return result;
            }
          }
          if (isNotFound(result)) {
            return isNotFoundResponse(result);
          }
          const response2 = getResponse();
          let nonStreamingBody = void 0;
          if (result !== void 0) {
            let done = false;
            const callbacks = {
              onParse: (value) => {
                nonStreamingBody = value;
              },
              onDone: () => {
                done = true;
              },
              onError: (error) => {
                throw error;
              }
            };
            So(result, {
              refs: /* @__PURE__ */ new Map(),
              plugins: serovalPlugins,
              onParse(value) {
                callbacks.onParse(value);
              },
              onDone() {
                callbacks.onDone();
              },
              onError: (error) => {
                callbacks.onError(error);
              }
            });
            if (done) {
              return new Response(
                nonStreamingBody ? JSON.stringify(nonStreamingBody) : void 0,
                {
                  status: response2?.status,
                  statusText: response2?.statusText,
                  headers: {
                    "Content-Type": "application/json",
                    [X_TSS_SERIALIZED]: "true"
                  }
                }
              );
            }
            const stream = new ReadableStream({
              start(controller2) {
                callbacks.onParse = (value) => controller2.enqueue(JSON.stringify(value) + "\n");
                callbacks.onDone = () => {
                  try {
                    controller2.close();
                  } catch (error) {
                    controller2.error(error);
                  }
                };
                callbacks.onError = (error) => controller2.error(error);
                if (nonStreamingBody !== void 0) {
                  callbacks.onParse(nonStreamingBody);
                }
              }
            });
            return new Response(stream, {
              status: response2?.status,
              statusText: response2?.statusText,
              headers: {
                "Content-Type": "application/x-ndjson",
                [X_TSS_SERIALIZED]: "true"
              }
            });
          }
          return new Response(void 0, {
            status: response2?.status,
            statusText: response2?.statusText
          });
        } catch (error) {
          if (error instanceof Response) {
            return error;
          }
          if (isNotFound(error)) {
            return isNotFoundResponse(error);
          }
          console.info();
          console.info("Server Fn Error!");
          console.info();
          console.error(error);
          console.info();
          const serializedError = JSON.stringify(
            await Promise.resolve(
              go(error, {
                refs: /* @__PURE__ */ new Map(),
                plugins: serovalPlugins
              })
            )
          );
          const response2 = getResponse();
          return new Response(serializedError, {
            status: response2?.status ?? 500,
            statusText: response2?.statusText,
            headers: {
              "Content-Type": "application/json",
              [X_TSS_SERIALIZED]: "true"
            }
          });
        }
      })();
      request.signal.removeEventListener("abort", abort);
      return response;
    };
    HEADERS = {
      TSS_SHELL: "X-TSS_SHELL"
    };
    createServerRpc = (functionId, splitImportFn) => {
      const url = "/_serverFn/" + functionId;
      return Object.assign(splitImportFn, {
        url,
        functionId,
        [TSS_SERVER_FUNCTION]: true
      });
    };
    ServerFunctionSerializationAdapter = createSerializationAdapter({
      key: "$TSS/serverfn",
      test: (v2) => {
        if (typeof v2 !== "function") return false;
        if (!(TSS_SERVER_FUNCTION in v2)) return false;
        return !!v2[TSS_SERVER_FUNCTION];
      },
      toSerializable: ({ functionId }) => ({ functionId }),
      fromSerializable: ({ functionId }) => {
        const fn = async (opts, signal) => {
          const serverFn = await getServerFnById(functionId);
          const result = await serverFn(opts ?? {}, signal);
          return result.result;
        };
        return createServerRpc(functionId, fn);
      }
    });
    fetch = createStartHandler(defaultStreamHandler);
    server = {
      // Providing `RequestHandler` from `@tanstack/react-start/server` is required so that the output types don't import it from `@tanstack/start-server-core`
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      fetch
    };
  }
});

// .netlify/v1/functions/server.mjs
init_server();
if (typeof server?.fetch !== "function") {
  console.error("The server entry point must have a default export with a property `fetch: (req: Request) => Promise<Response>`");
}
var server_default = server.fetch;
var config = {
  name: "@netlify/vite-plugin server handler",
  generator: "@netlify/vite-plugin@2.6.1",
  path: "/*",
  preferStatic: true
};
export {
  config,
  server_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZGlzdC9zZXJ2ZXIvYXNzZXRzL190YW5zdGFjay1zdGFydC1tYW5pZmVzdF92LUNDR3doLXpOLmpzIiwgImRpc3Qvc2VydmVyL2Fzc2V0cy90aGVtZS1Cb3ZTOFBxSC5qcyIsICJkaXN0L3NlcnZlci9hc3NldHMvbW9uZ29kYi1EQkVBMnpGZS5qcyIsICJkaXN0L3NlcnZlci9hc3NldHMvbW9uZ29kYi1zdGF0dXMtQmU0VFhiOGUuanMiLCAiZGlzdC9zZXJ2ZXIvYXNzZXRzL3R5cGVzLUJuNmpGU19CLmpzIiwgImRpc3Qvc2VydmVyL2Fzc2V0cy90b2Rvcy1DRzM1VEstaS5qcyIsICJkaXN0L3NlcnZlci9hc3NldHMvX3RhbnN0YWNrLXN0YXJ0LXNlcnZlci1mbi1tYW5pZmVzdF92LUNIckp5VlNuLmpzIiwgImRpc3Qvc2VydmVyL2Fzc2V0cy9fdGFuc3RhY2stc3RhcnQtaW5qZWN0ZWQtaGVhZC1zY3JpcHRzX3YtY2RhMEt5MEQuanMiLCAiZGlzdC9zZXJ2ZXIvYXNzZXRzL2JhZGdlLThHUnpVQ0pMLmpzIiwgImRpc3Qvc2VydmVyL2Fzc2V0cy90b2Rvcy0weXdLY2JXVC5qcyIsICJkaXN0L3NlcnZlci9hc3NldHMvaW5kZXgtQ1JUeEJyeXEuanMiLCAiZGlzdC9zZXJ2ZXIvYXNzZXRzL3JvdXRlci1CTGtiSnc2Sy5qcyIsICJkaXN0L3NlcnZlci9hc3NldHMvc3RhcnQtSFlrdnE0TmkuanMiLCAiZGlzdC9zZXJ2ZXIvc2VydmVyLmpzIiwgIi5uZXRsaWZ5L3YxL2Z1bmN0aW9ucy9zZXJ2ZXIubWpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCB0c3JTdGFydE1hbmlmZXN0ID0gKCkgPT4gKHsgXCJyb3V0ZXNcIjogeyBcIl9fcm9vdF9fXCI6IHsgXCJmaWxlUGF0aFwiOiBcIi9Vc2Vycy9qZXNzZS5oYWxsL0RvY3VtZW50cy93b3Jrc3BhY2UvdGFuc3RhY2svZnJlc2gtc3RhcnQvc3JjL3JvdXRlcy9fX3Jvb3QudHN4XCIsIFwiY2hpbGRyZW5cIjogW1wiL1wiLCBcIi90b2Rvc1wiXSwgXCJwcmVsb2Fkc1wiOiBbXCIvYXNzZXRzL21haW4tQ1N1c25jM2guanNcIl0sIFwiYXNzZXRzXCI6IFtdIH0sIFwiL1wiOiB7IFwiZmlsZVBhdGhcIjogXCIvVXNlcnMvamVzc2UuaGFsbC9Eb2N1bWVudHMvd29ya3NwYWNlL3RhbnN0YWNrL2ZyZXNoLXN0YXJ0L3NyYy9yb3V0ZXMvaW5kZXgudHN4XCIsIFwiYXNzZXRzXCI6IFtdLCBcInByZWxvYWRzXCI6IFtcIi9hc3NldHMvaW5kZXgtRDZwMW1ieVIuanNcIiwgXCIvYXNzZXRzL2JhZGdlLWVabWIxZlRsLmpzXCJdIH0sIFwiL3RvZG9zXCI6IHsgXCJmaWxlUGF0aFwiOiBcIi9Vc2Vycy9qZXNzZS5oYWxsL0RvY3VtZW50cy93b3Jrc3BhY2UvdGFuc3RhY2svZnJlc2gtc3RhcnQvc3JjL3JvdXRlcy90b2Rvcy50c3hcIiwgXCJhc3NldHNcIjogW10sIFwicHJlbG9hZHNcIjogW1wiL2Fzc2V0cy90b2Rvcy1CdFRHUUV2SC5qc1wiLCBcIi9hc3NldHMvYmFkZ2UtZVptYjFmVGwuanNcIl0gfSB9LCBcImNsaWVudEVudHJ5XCI6IFwiL2Fzc2V0cy9tYWluLUNTdXNuYzNoLmpzXCIgfSk7XG5leHBvcnQge1xuICB0c3JTdGFydE1hbmlmZXN0XG59O1xuIiwgImltcG9ydCB7IGEgYXMgY3JlYXRlU2VydmVyUnBjLCBjIGFzIGNyZWF0ZVNlcnZlckZuLCBnIGFzIGdldENvb2tpZSB9IGZyb20gXCIuLi9zZXJ2ZXIuanNcIjtcbmltcG9ydCBcIm5vZGU6YXN5bmNfaG9va3NcIjtcbmltcG9ydCBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgXCJAdGFuc3RhY2svcmVhY3Qtcm91dGVyL3Nzci9zZXJ2ZXJcIjtcbmltcG9ydCBcIkB0YW5zdGFjay9yZWFjdC1yb3V0ZXJcIjtcbmNvbnN0IFRIRU1FX0NPT0tJRV9OQU1FID0gXCJ1aS10aGVtZVwiO1xuY29uc3QgZ2V0U2VydmVyVGhlbWVfY3JlYXRlU2VydmVyRm5faGFuZGxlciA9IGNyZWF0ZVNlcnZlclJwYyhcInNyY19zZXJ2ZXJfdGhlbWVfdHMtLWdldFNlcnZlclRoZW1lX2NyZWF0ZVNlcnZlckZuX2hhbmRsZXJcIiwgKG9wdHMsIHNpZ25hbCkgPT4ge1xuICByZXR1cm4gZ2V0U2VydmVyVGhlbWUuX19leGVjdXRlU2VydmVyKG9wdHMsIHNpZ25hbCk7XG59KTtcbmNvbnN0IGdldFNlcnZlclRoZW1lID0gY3JlYXRlU2VydmVyRm4oKS5oYW5kbGVyKGdldFNlcnZlclRoZW1lX2NyZWF0ZVNlcnZlckZuX2hhbmRsZXIsICgpID0+IHtcbiAgY29uc3QgdGhlbWUgPSBnZXRDb29raWUoVEhFTUVfQ09PS0lFX05BTUUpO1xuICBpZiAodGhlbWUgPT09IFwiZGFya1wiIHx8IHRoZW1lID09PSBcImxpZ2h0XCIgfHwgdGhlbWUgPT09IFwic3lzdGVtXCIpIHtcbiAgICByZXR1cm4gdGhlbWU7XG4gIH1cbiAgcmV0dXJuIFwic3lzdGVtXCI7XG59KTtcbmV4cG9ydCB7XG4gIGdldFNlcnZlclRoZW1lX2NyZWF0ZVNlcnZlckZuX2hhbmRsZXJcbn07XG4iLCAiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcbmNvbnN0IERCX05BTUUgPSBcInRhbnN0YWNrLXRvZG9zXCI7XG5jb25zdCBvcHRpb25zID0ge1xuICBhcHBOYW1lOiBcImRldnJlbC50ZW1wbGF0ZS50YW5zdGFjay1zdGFydC10b2RvXCIsXG4gIG1heFBvb2xTaXplOiAxMCxcbiAgLy8gTGltaXQgY29ubmVjdGlvbiBwb29sIHNpemUgZm9yIHNlcnZlcmxlc3NcbiAgbWluUG9vbFNpemU6IDEsXG4gIG1heElkbGVUaW1lTVM6IDVlMyxcbiAgLy8gQ2xvc2UgaWRsZSBjb25uZWN0aW9ucyBhZnRlciA1c1xuICBzZXJ2ZXJTZWxlY3Rpb25UaW1lb3V0TVM6IDVlMyxcbiAgLy8gVGltZW91dCBhZnRlciA1cyBpZiBjYW4ndCBmaW5kIHNlcnZlclxuICBzb2NrZXRUaW1lb3V0TVM6IDNlNFxuICAvLyBDbG9zZSBzb2NrZXRzIGFmdGVyIDMwcyBvZiBpbmFjdGl2aXR5XG59O1xuY29uc3QgY2FjaGVkID0ge1xuICBjbGllbnQ6IG51bGwsXG4gIGRiOiBudWxsLFxuICBwcm9taXNlOiBudWxsXG59O1xuZnVuY3Rpb24gZ2V0Q29ubmVjdGlvbkVycm9yTWVzc2FnZShlcnJvcikge1xuICBjb25zdCBlcnJvck1zZyA9IGVycm9yLm1lc3NhZ2UudG9Mb3dlckNhc2UoKTtcbiAgaWYgKGVycm9yTXNnLmluY2x1ZGVzKFwiYmFkIGF1dGhcIikgfHwgZXJyb3JNc2cuaW5jbHVkZXMoXCJhdXRoZW50aWNhdGlvbiBmYWlsZWRcIikpIHtcbiAgICByZXR1cm4gXCJBdXRoZW50aWNhdGlvbiBmYWlsZWRcIjtcbiAgfVxuICBpZiAoZXJyb3JNc2cuaW5jbHVkZXMoXCJlbm90Zm91bmRcIikgfHwgZXJyb3JNc2cuaW5jbHVkZXMoXCJnZXRhZGRyaW5mb1wiKSkge1xuICAgIHJldHVybiBcIkNhbm5vdCByZWFjaCBNb25nb0RCIHNlcnZlclwiO1xuICB9XG4gIGlmIChlcnJvck1zZy5pbmNsdWRlcyhcInRpbWVvdXRcIikgfHwgZXJyb3JNc2cuaW5jbHVkZXMoXCJ0aW1lZCBvdXRcIikpIHtcbiAgICByZXR1cm4gXCJDb25uZWN0aW9uIHRpbWVvdXRcIjtcbiAgfVxuICBpZiAoZXJyb3JNc2cuaW5jbHVkZXMoXCJpcFwiKSAmJiBlcnJvck1zZy5pbmNsdWRlcyhcIm5vdFwiKSAmJiBlcnJvck1zZy5pbmNsdWRlcyhcIndoaXRlbGlzdFwiKSkge1xuICAgIHJldHVybiBcIklQIGFkZHJlc3Mgbm90IHdoaXRlbGlzdGVkXCI7XG4gIH1cbiAgaWYgKGVycm9yTXNnLmluY2x1ZGVzKFwiaW52YWxpZCBjb25uZWN0aW9uIHN0cmluZ1wiKSB8fCBlcnJvck1zZy5pbmNsdWRlcyhcInVyaSBtdXN0XCIpKSB7XG4gICAgcmV0dXJuIFwiSW52YWxpZCBjb25uZWN0aW9uIHN0cmluZyBmb3JtYXRcIjtcbiAgfVxuICBpZiAoZXJyb3JNc2cuaW5jbHVkZXMoXCJzZXJ2ZXIgc2VsZWN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIFwiQ2Fubm90IGNvbm5lY3QgdG8gTW9uZ29EQlwiO1xuICB9XG4gIHJldHVybiBcIk1vbmdvREIgY29ubmVjdGlvbiBlcnJvclwiO1xufVxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGlmIChjYWNoZWQuY2xpZW50ICYmIGNhY2hlZC5kYikge1xuICAgIHJldHVybiB7IGNsaWVudDogY2FjaGVkLmNsaWVudCwgZGI6IGNhY2hlZC5kYiB9O1xuICB9XG4gIGlmIChjYWNoZWQucHJvbWlzZSkge1xuICAgIHJldHVybiBjYWNoZWQucHJvbWlzZTtcbiAgfVxuICBpZiAoIU1PTkdPREJfVVJJKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBNT05HT0RCX1VSSSBjb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIGNhY2hlZC5wcm9taXNlID0gTW9uZ29DbGllbnQuY29ubmVjdChNT05HT0RCX1VSSSwgb3B0aW9ucykudGhlbigoY2xpZW50KSA9PiB7XG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoREJfTkFNRSk7XG4gICAgY2FjaGVkLmNsaWVudCA9IGNsaWVudDtcbiAgICBjYWNoZWQuZGIgPSBkYjtcbiAgICBjYWNoZWQucHJvbWlzZSA9IG51bGw7XG4gICAgcmV0dXJuIHsgY2xpZW50LCBkYiB9O1xuICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICBjYWNoZWQucHJvbWlzZSA9IG51bGw7XG4gICAgY29uc3QgbWVzc2FnZSA9IGdldENvbm5lY3Rpb25FcnJvck1lc3NhZ2UoZXJyb3IpO1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfSk7XG4gIHJldHVybiBjYWNoZWQucHJvbWlzZTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGdldFRvZG9zQ29sbGVjdGlvbigpIHtcbiAgY29uc3QgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgcmV0dXJuIGRiLmNvbGxlY3Rpb24oXCJ0b2Rvc1wiKTtcbn1cbmV4cG9ydCB7XG4gIGNvbm5lY3RUb0RhdGFiYXNlIGFzIGMsXG4gIGdldFRvZG9zQ29sbGVjdGlvbiBhcyBnXG59O1xuIiwgImltcG9ydCB7IGEgYXMgY3JlYXRlU2VydmVyUnBjLCBjIGFzIGNyZWF0ZVNlcnZlckZuIH0gZnJvbSBcIi4uL3NlcnZlci5qc1wiO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gXCIuL21vbmdvZGItREJFQTJ6RmUuanNcIjtcbmltcG9ydCBcIm5vZGU6YXN5bmNfaG9va3NcIjtcbmltcG9ydCBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgXCJAdGFuc3RhY2svcmVhY3Qtcm91dGVyL3Nzci9zZXJ2ZXJcIjtcbmltcG9ydCBcIkB0YW5zdGFjay9yZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCBcIm1vbmdvZGJcIjtcbmNvbnN0IGNoZWNrTW9uZ29EQkNvbm5lY3Rpb25fY3JlYXRlU2VydmVyRm5faGFuZGxlciA9IGNyZWF0ZVNlcnZlclJwYyhcInNyY19zZXJ2ZXJfbW9uZ29kYi1zdGF0dXNfdHMtLWNoZWNrTW9uZ29EQkNvbm5lY3Rpb25fY3JlYXRlU2VydmVyRm5faGFuZGxlclwiLCAob3B0cywgc2lnbmFsKSA9PiB7XG4gIHJldHVybiBjaGVja01vbmdvREJDb25uZWN0aW9uLl9fZXhlY3V0ZVNlcnZlcihvcHRzLCBzaWduYWwpO1xufSk7XG5jb25zdCBjaGVja01vbmdvREJDb25uZWN0aW9uID0gY3JlYXRlU2VydmVyRm4oe1xuICBtZXRob2Q6IFwiR0VUXCJcbn0pLmhhbmRsZXIoY2hlY2tNb25nb0RCQ29ubmVjdGlvbl9jcmVhdGVTZXJ2ZXJGbl9oYW5kbGVyLCBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29ubmVjdGVkOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgZGJcbiAgICB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgICBhd2FpdCBkYi5hZG1pbigpLnBpbmcoKTtcbiAgICByZXR1cm4ge1xuICAgICAgY29ubmVjdGVkOiB0cnVlXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29ubmVjdGVkOiBmYWxzZVxuICAgIH07XG4gIH1cbn0pO1xuZXhwb3J0IHtcbiAgY2hlY2tNb25nb0RCQ29ubmVjdGlvbl9jcmVhdGVTZXJ2ZXJGbl9oYW5kbGVyXG59O1xuIiwgImltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5jb25zdCBDcmVhdGVUb2RvU2NoZW1hID0gei5vYmplY3Qoe1xuICB0aXRsZTogei5zdHJpbmcoKS5taW4oMSwgXCJUaXRsZSBtdXN0IG5vdCBiZSBlbXB0eVwiKS5tYXgoNTAwLCBcIlRpdGxlIG11c3QgYmUgbGVzcyB0aGFuIDUwMCBjaGFyYWN0ZXJzXCIpLnRyYW5zZm9ybSgodmFsKSA9PiB2YWwudHJpbSgpKVxufSk7XG5jb25zdCBVcGRhdGVUb2RvU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKS5yZWZpbmUoKHZhbCkgPT4gL15bMC05YS1mQS1GXXsyNH0kLy50ZXN0KHZhbCksIHtcbiAgICBtZXNzYWdlOiBcIkludmFsaWQgSUQgZm9ybWF0XCJcbiAgfSksXG4gIHRpdGxlOiB6LnN0cmluZygpLm1pbigxLCBcIlRpdGxlIG11c3Qgbm90IGJlIGVtcHR5XCIpLm1heCg1MDAsIFwiVGl0bGUgbXVzdCBiZSBsZXNzIHRoYW4gNTAwIGNoYXJhY3RlcnNcIikudHJhbnNmb3JtKCh2YWwpID0+IHZhbC50cmltKCkpLm9wdGlvbmFsKCksXG4gIGNvbXBsZXRlZDogei5ib29sZWFuKCkub3B0aW9uYWwoKVxufSk7XG5jb25zdCBEZWxldGVUb2RvU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKS5yZWZpbmUoKHZhbCkgPT4gL15bMC05YS1mQS1GXXsyNH0kLy50ZXN0KHZhbCksIHtcbiAgICBtZXNzYWdlOiBcIkludmFsaWQgSUQgZm9ybWF0XCJcbiAgfSlcbn0pO1xuZnVuY3Rpb24gdG9kb1RvUmVzcG9uc2UodG9kbykge1xuICByZXR1cm4ge1xuICAgIGlkOiB0b2RvLl9pZC50b1N0cmluZygpLFxuICAgIHRpdGxlOiB0b2RvLnRpdGxlLFxuICAgIGNvbXBsZXRlZDogdG9kby5jb21wbGV0ZWQsXG4gICAgY3JlYXRlZEF0OiB0b2RvLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgIHVwZGF0ZWRBdDogdG9kby51cGRhdGVkQXQudG9JU09TdHJpbmcoKVxuICB9O1xufVxuZXhwb3J0IHtcbiAgQ3JlYXRlVG9kb1NjaGVtYSBhcyBDLFxuICBEZWxldGVUb2RvU2NoZW1hIGFzIEQsXG4gIFVwZGF0ZVRvZG9TY2hlbWEgYXMgVSxcbiAgdG9kb1RvUmVzcG9uc2UgYXMgdFxufTtcbiIsICJpbXBvcnQgeyBhIGFzIGNyZWF0ZVNlcnZlclJwYywgYyBhcyBjcmVhdGVTZXJ2ZXJGbiB9IGZyb20gXCIuLi9zZXJ2ZXIuanNcIjtcbmltcG9ydCB7IE9iamVjdElkIH0gZnJvbSBcIm1vbmdvZGJcIjtcbmltcG9ydCB7IGcgYXMgZ2V0VG9kb3NDb2xsZWN0aW9uIH0gZnJvbSBcIi4vbW9uZ29kYi1EQkVBMnpGZS5qc1wiO1xuaW1wb3J0IHsgdCBhcyB0b2RvVG9SZXNwb25zZSwgQyBhcyBDcmVhdGVUb2RvU2NoZW1hLCBVIGFzIFVwZGF0ZVRvZG9TY2hlbWEsIEQgYXMgRGVsZXRlVG9kb1NjaGVtYSB9IGZyb20gXCIuL3R5cGVzLUJuNmpGU19CLmpzXCI7XG5pbXBvcnQgXCJub2RlOmFzeW5jX2hvb2tzXCI7XG5pbXBvcnQgXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IFwiQHRhbnN0YWNrL3JlYWN0LXJvdXRlci9zc3Ivc2VydmVyXCI7XG5pbXBvcnQgXCJAdGFuc3RhY2svcmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgXCJ6b2RcIjtcbmNvbnN0IGdldFRvZG9zX2NyZWF0ZVNlcnZlckZuX2hhbmRsZXIgPSBjcmVhdGVTZXJ2ZXJScGMoXCJzcmNfc2VydmVyX3RvZG9zX3RzLS1nZXRUb2Rvc19jcmVhdGVTZXJ2ZXJGbl9oYW5kbGVyXCIsIChvcHRzLCBzaWduYWwpID0+IHtcbiAgcmV0dXJuIGdldFRvZG9zLl9fZXhlY3V0ZVNlcnZlcihvcHRzLCBzaWduYWwpO1xufSk7XG5jb25zdCBjcmVhdGVUb2RvX2NyZWF0ZVNlcnZlckZuX2hhbmRsZXIgPSBjcmVhdGVTZXJ2ZXJScGMoXCJzcmNfc2VydmVyX3RvZG9zX3RzLS1jcmVhdGVUb2RvX2NyZWF0ZVNlcnZlckZuX2hhbmRsZXJcIiwgKG9wdHMsIHNpZ25hbCkgPT4ge1xuICByZXR1cm4gY3JlYXRlVG9kby5fX2V4ZWN1dGVTZXJ2ZXIob3B0cywgc2lnbmFsKTtcbn0pO1xuY29uc3QgdXBkYXRlVG9kb19jcmVhdGVTZXJ2ZXJGbl9oYW5kbGVyID0gY3JlYXRlU2VydmVyUnBjKFwic3JjX3NlcnZlcl90b2Rvc190cy0tdXBkYXRlVG9kb19jcmVhdGVTZXJ2ZXJGbl9oYW5kbGVyXCIsIChvcHRzLCBzaWduYWwpID0+IHtcbiAgcmV0dXJuIHVwZGF0ZVRvZG8uX19leGVjdXRlU2VydmVyKG9wdHMsIHNpZ25hbCk7XG59KTtcbmNvbnN0IGRlbGV0ZVRvZG9fY3JlYXRlU2VydmVyRm5faGFuZGxlciA9IGNyZWF0ZVNlcnZlclJwYyhcInNyY19zZXJ2ZXJfdG9kb3NfdHMtLWRlbGV0ZVRvZG9fY3JlYXRlU2VydmVyRm5faGFuZGxlclwiLCAob3B0cywgc2lnbmFsKSA9PiB7XG4gIHJldHVybiBkZWxldGVUb2RvLl9fZXhlY3V0ZVNlcnZlcihvcHRzLCBzaWduYWwpO1xufSk7XG5jb25zdCBnZXRUb2RvcyA9IGNyZWF0ZVNlcnZlckZuKCkuaGFuZGxlcihnZXRUb2Rvc19jcmVhdGVTZXJ2ZXJGbl9oYW5kbGVyLCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGNvbGxlY3Rpb24gPSBhd2FpdCBnZXRUb2Rvc0NvbGxlY3Rpb24oKTtcbiAgY29uc3QgdG9kb3MgPSBhd2FpdCBjb2xsZWN0aW9uLmZpbmQoe30pLnNvcnQoe1xuICAgIGNyZWF0ZWRBdDogLTFcbiAgfSkudG9BcnJheSgpO1xuICByZXR1cm4gdG9kb3MubWFwKHRvZG9Ub1Jlc3BvbnNlKTtcbn0pO1xuY29uc3QgY3JlYXRlVG9kbyA9IGNyZWF0ZVNlcnZlckZuKHtcbiAgbWV0aG9kOiBcIlBPU1RcIlxufSkuaW5wdXRWYWxpZGF0b3IoQ3JlYXRlVG9kb1NjaGVtYSkuaGFuZGxlcihjcmVhdGVUb2RvX2NyZWF0ZVNlcnZlckZuX2hhbmRsZXIsIGFzeW5jICh7XG4gIGRhdGFcbn0pID0+IHtcbiAgY29uc3QgY29sbGVjdGlvbiA9IGF3YWl0IGdldFRvZG9zQ29sbGVjdGlvbigpO1xuICBjb25zdCBub3cgPSAvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoKTtcbiAgY29uc3QgbmV3VG9kbyA9IHtcbiAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIGNyZWF0ZWRBdDogbm93LFxuICAgIHVwZGF0ZWRBdDogbm93XG4gIH07XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbGxlY3Rpb24uaW5zZXJ0T25lKG5ld1RvZG8pO1xuICBjb25zdCBjcmVhdGVkVG9kbyA9IHtcbiAgICBpZDogcmVzdWx0Lmluc2VydGVkSWQudG9TdHJpbmcoKSxcbiAgICB0aXRsZTogbmV3VG9kby50aXRsZSxcbiAgICBjb21wbGV0ZWQ6IG5ld1RvZG8uY29tcGxldGVkLFxuICAgIGNyZWF0ZWRBdDogbmV3VG9kby5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcbiAgICB1cGRhdGVkQXQ6IG5ld1RvZG8udXBkYXRlZEF0LnRvSVNPU3RyaW5nKClcbiAgfTtcbiAgcmV0dXJuIGNyZWF0ZWRUb2RvO1xufSk7XG5jb25zdCB1cGRhdGVUb2RvID0gY3JlYXRlU2VydmVyRm4oe1xuICBtZXRob2Q6IFwiUE9TVFwiXG59KS5pbnB1dFZhbGlkYXRvcihVcGRhdGVUb2RvU2NoZW1hKS5oYW5kbGVyKHVwZGF0ZVRvZG9fY3JlYXRlU2VydmVyRm5faGFuZGxlciwgYXN5bmMgKHtcbiAgZGF0YVxufSkgPT4ge1xuICBjb25zdCBjb2xsZWN0aW9uID0gYXdhaXQgZ2V0VG9kb3NDb2xsZWN0aW9uKCk7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICAuLi51cGRhdGVzXG4gIH0gPSBkYXRhO1xuICBpZiAoIXVwZGF0ZXMudGl0bGUgJiYgdXBkYXRlcy5jb21wbGV0ZWQgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk11c3QgcHJvdmlkZSBhdCBsZWFzdCBvbmUgZmllbGQgdG8gdXBkYXRlICh0aXRsZSBvciBjb21wbGV0ZWQpXCIpO1xuICB9XG4gIGNvbnN0IHVwZGF0ZURhdGEgPSB7XG4gICAgdXBkYXRlZEF0OiAvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoKVxuICB9O1xuICBpZiAodXBkYXRlcy50aXRsZSAhPT0gdm9pZCAwKSB7XG4gICAgdXBkYXRlRGF0YS50aXRsZSA9IHVwZGF0ZXMudGl0bGU7XG4gIH1cbiAgaWYgKHVwZGF0ZXMuY29tcGxldGVkICE9PSB2b2lkIDApIHtcbiAgICB1cGRhdGVEYXRhLmNvbXBsZXRlZCA9IHVwZGF0ZXMuY29tcGxldGVkO1xuICB9XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbGxlY3Rpb24uZmluZE9uZUFuZFVwZGF0ZSh7XG4gICAgX2lkOiBuZXcgT2JqZWN0SWQoaWQpXG4gIH0sIHtcbiAgICAkc2V0OiB1cGRhdGVEYXRhXG4gIH0sIHtcbiAgICByZXR1cm5Eb2N1bWVudDogXCJhZnRlclwiXG4gIH0pO1xuICBpZiAoIXJlc3VsdCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVG9kbyB3aXRoIGlkICR7aWR9IG5vdCBmb3VuZGApO1xuICB9XG4gIHJldHVybiB0b2RvVG9SZXNwb25zZShyZXN1bHQpO1xufSk7XG5jb25zdCBkZWxldGVUb2RvID0gY3JlYXRlU2VydmVyRm4oe1xuICBtZXRob2Q6IFwiUE9TVFwiXG59KS5pbnB1dFZhbGlkYXRvcihEZWxldGVUb2RvU2NoZW1hKS5oYW5kbGVyKGRlbGV0ZVRvZG9fY3JlYXRlU2VydmVyRm5faGFuZGxlciwgYXN5bmMgKHtcbiAgZGF0YVxufSkgPT4ge1xuICBjb25zdCBjb2xsZWN0aW9uID0gYXdhaXQgZ2V0VG9kb3NDb2xsZWN0aW9uKCk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbGxlY3Rpb24uZGVsZXRlT25lKHtcbiAgICBfaWQ6IG5ldyBPYmplY3RJZChkYXRhLmlkKVxuICB9KTtcbiAgaWYgKHJlc3VsdC5kZWxldGVkQ291bnQgPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFRvZG8gd2l0aCBpZCAke2RhdGEuaWR9IG5vdCBmb3VuZGApO1xuICB9XG4gIHJldHVybjtcbn0pO1xuZXhwb3J0IHtcbiAgY3JlYXRlVG9kb19jcmVhdGVTZXJ2ZXJGbl9oYW5kbGVyLFxuICBkZWxldGVUb2RvX2NyZWF0ZVNlcnZlckZuX2hhbmRsZXIsXG4gIGdldFRvZG9zX2NyZWF0ZVNlcnZlckZuX2hhbmRsZXIsXG4gIHVwZGF0ZVRvZG9fY3JlYXRlU2VydmVyRm5faGFuZGxlclxufTtcbiIsICJjb25zdCBfdGFuc3RhY2tTdGFydFNlcnZlckZuTWFuaWZlc3RfdiA9IHsgXCJzcmNfc2VydmVyX3RoZW1lX3RzLS1nZXRTZXJ2ZXJUaGVtZV9jcmVhdGVTZXJ2ZXJGbl9oYW5kbGVyXCI6IHtcbiAgZnVuY3Rpb25OYW1lOiBcImdldFNlcnZlclRoZW1lX2NyZWF0ZVNlcnZlckZuX2hhbmRsZXJcIixcbiAgaW1wb3J0ZXI6ICgpID0+IGltcG9ydChcIi4vdGhlbWUtQm92UzhQcUguanNcIilcbn0sIFwic3JjX3NlcnZlcl9tb25nb2RiLXN0YXR1c190cy0tY2hlY2tNb25nb0RCQ29ubmVjdGlvbl9jcmVhdGVTZXJ2ZXJGbl9oYW5kbGVyXCI6IHtcbiAgZnVuY3Rpb25OYW1lOiBcImNoZWNrTW9uZ29EQkNvbm5lY3Rpb25fY3JlYXRlU2VydmVyRm5faGFuZGxlclwiLFxuICBpbXBvcnRlcjogKCkgPT4gaW1wb3J0KFwiLi9tb25nb2RiLXN0YXR1cy1CZTRUWGI4ZS5qc1wiKVxufSwgXCJzcmNfc2VydmVyX3RvZG9zX3RzLS1nZXRUb2Rvc19jcmVhdGVTZXJ2ZXJGbl9oYW5kbGVyXCI6IHtcbiAgZnVuY3Rpb25OYW1lOiBcImdldFRvZG9zX2NyZWF0ZVNlcnZlckZuX2hhbmRsZXJcIixcbiAgaW1wb3J0ZXI6ICgpID0+IGltcG9ydChcIi4vdG9kb3MtQ0czNVRLLWkuanNcIilcbn0sIFwic3JjX3NlcnZlcl90b2Rvc190cy0tY3JlYXRlVG9kb19jcmVhdGVTZXJ2ZXJGbl9oYW5kbGVyXCI6IHtcbiAgZnVuY3Rpb25OYW1lOiBcImNyZWF0ZVRvZG9fY3JlYXRlU2VydmVyRm5faGFuZGxlclwiLFxuICBpbXBvcnRlcjogKCkgPT4gaW1wb3J0KFwiLi90b2Rvcy1DRzM1VEstaS5qc1wiKVxufSwgXCJzcmNfc2VydmVyX3RvZG9zX3RzLS11cGRhdGVUb2RvX2NyZWF0ZVNlcnZlckZuX2hhbmRsZXJcIjoge1xuICBmdW5jdGlvbk5hbWU6IFwidXBkYXRlVG9kb19jcmVhdGVTZXJ2ZXJGbl9oYW5kbGVyXCIsXG4gIGltcG9ydGVyOiAoKSA9PiBpbXBvcnQoXCIuL3RvZG9zLUNHMzVUSy1pLmpzXCIpXG59LCBcInNyY19zZXJ2ZXJfdG9kb3NfdHMtLWRlbGV0ZVRvZG9fY3JlYXRlU2VydmVyRm5faGFuZGxlclwiOiB7XG4gIGZ1bmN0aW9uTmFtZTogXCJkZWxldGVUb2RvX2NyZWF0ZVNlcnZlckZuX2hhbmRsZXJcIixcbiAgaW1wb3J0ZXI6ICgpID0+IGltcG9ydChcIi4vdG9kb3MtQ0czNVRLLWkuanNcIilcbn0gfTtcbmV4cG9ydCB7XG4gIF90YW5zdGFja1N0YXJ0U2VydmVyRm5NYW5pZmVzdF92IGFzIGRlZmF1bHRcbn07XG4iLCAiY29uc3QgaW5qZWN0ZWRIZWFkU2NyaXB0cyA9IHZvaWQgMDtcbmV4cG9ydCB7XG4gIGluamVjdGVkSGVhZFNjcmlwdHNcbn07XG4iLCAiaW1wb3J0IHsganN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBTbG90IH0gZnJvbSBcIkByYWRpeC11aS9yZWFjdC1zbG90XCI7XG5pbXBvcnQgeyBjdmEgfSBmcm9tIFwiY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5XCI7XG5pbXBvcnQgeyBhIGFzIGNuIH0gZnJvbSBcIi4vcm91dGVyLUJMa2JKdzZLLmpzXCI7XG5jb25zdCBiYWRnZVZhcmlhbnRzID0gY3ZhKFxuICBcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJvcmRlciBweC0yIHB5LTAuNSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHctZml0IHdoaXRlc3BhY2Utbm93cmFwIHNocmluay0wIFsmPnN2Z106c2l6ZS0zIGdhcC0xIFsmPnN2Z106cG9pbnRlci1ldmVudHMtbm9uZSBmb2N1cy12aXNpYmxlOmJvcmRlci1yaW5nIGZvY3VzLXZpc2libGU6cmluZy1yaW5nLzUwIGZvY3VzLXZpc2libGU6cmluZy1bM3B4XSBhcmlhLWludmFsaWQ6cmluZy1kZXN0cnVjdGl2ZS8yMCBkYXJrOmFyaWEtaW52YWxpZDpyaW5nLWRlc3RydWN0aXZlLzQwIGFyaWEtaW52YWxpZDpib3JkZXItZGVzdHJ1Y3RpdmUgdHJhbnNpdGlvbi1bY29sb3IsYm94LXNoYWRvd10gb3ZlcmZsb3ctaGlkZGVuXCIsXG4gIHtcbiAgICB2YXJpYW50czoge1xuICAgICAgdmFyaWFudDoge1xuICAgICAgICBkZWZhdWx0OiBcImJvcmRlci10cmFuc3BhcmVudCBiZy1wcmltYXJ5IHRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIFthJl06aG92ZXI6YmctcHJpbWFyeS85MFwiLFxuICAgICAgICBzZWNvbmRhcnk6IFwiYm9yZGVyLXRyYW5zcGFyZW50IGJnLXNlY29uZGFyeSB0ZXh0LXNlY29uZGFyeS1mb3JlZ3JvdW5kIFthJl06aG92ZXI6Ymctc2Vjb25kYXJ5LzkwXCIsXG4gICAgICAgIGRlc3RydWN0aXZlOiBcImJvcmRlci10cmFuc3BhcmVudCBiZy1kZXN0cnVjdGl2ZSB0ZXh0LXdoaXRlIFthJl06aG92ZXI6YmctZGVzdHJ1Y3RpdmUvOTAgZm9jdXMtdmlzaWJsZTpyaW5nLWRlc3RydWN0aXZlLzIwIGRhcms6Zm9jdXMtdmlzaWJsZTpyaW5nLWRlc3RydWN0aXZlLzQwIGRhcms6YmctZGVzdHJ1Y3RpdmUvNjBcIixcbiAgICAgICAgb3V0bGluZTogXCJ0ZXh0LWZvcmVncm91bmQgW2EmXTpob3ZlcjpiZy1hY2NlbnQgW2EmXTpob3Zlcjp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlZmF1bHRWYXJpYW50czoge1xuICAgICAgdmFyaWFudDogXCJkZWZhdWx0XCJcbiAgICB9XG4gIH1cbik7XG5mdW5jdGlvbiBCYWRnZSh7XG4gIGNsYXNzTmFtZSxcbiAgdmFyaWFudCxcbiAgYXNDaGlsZCA9IGZhbHNlLFxuICAuLi5wcm9wc1xufSkge1xuICBjb25zdCBDb21wID0gYXNDaGlsZCA/IFNsb3QgOiBcInNwYW5cIjtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBqc3goXG4gICAgQ29tcCxcbiAgICB7XG4gICAgICBcImRhdGEtc2xvdFwiOiBcImJhZGdlXCIsXG4gICAgICBjbGFzc05hbWU6IGNuKGJhZGdlVmFyaWFudHMoeyB2YXJpYW50IH0pLCBjbGFzc05hbWUpLFxuICAgICAgLi4ucHJvcHNcbiAgICB9XG4gICk7XG59XG5leHBvcnQge1xuICBCYWRnZSBhcyBCXG59O1xuIiwgImltcG9ydCB7IGpzeCwganN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgUGx1cywgQ2hlY2tJY29uLCBUcmFzaDIsIENoZWNrU3F1YXJlIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUXVlcnksIHVzZVF1ZXJ5Q2xpZW50LCB1c2VNdXRhdGlvbiB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IHQgYXMgdG9kb1F1ZXJpZXMsIGMgYXMgY3JlYXRlVG9kbywgdSBhcyB1cGRhdGVUb2RvLCBkIGFzIGRlbGV0ZVRvZG8sIGEgYXMgY24sIEIgYXMgQnV0dG9uIH0gZnJvbSBcIi4vcm91dGVyLUJMa2JKdzZLLmpzXCI7XG5pbXBvcnQgeyBjdmEgfSBmcm9tIFwiY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgQ2hlY2tib3hQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1jaGVja2JveFwiO1xuaW1wb3J0IHsgQiBhcyBCYWRnZSB9IGZyb20gXCIuL2JhZGdlLThHUnpVQ0pMLmpzXCI7XG5pbXBvcnQgXCJAdGFuc3RhY2svcmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgXCJAdGFuc3RhY2svcmVhY3Qtcm91dGVyLXNzci1xdWVyeVwiO1xuaW1wb3J0IFwiQHRhbnN0YWNrL3JlYWN0LXJvdXRlci1kZXZ0b29sc1wiO1xuaW1wb3J0IFwiQHRhbnN0YWNrL3JlYWN0LWRldnRvb2xzXCI7XG5pbXBvcnQgXCJAcmFkaXgtdWkvcmVhY3QtZGlhbG9nXCI7XG5pbXBvcnQgXCJjbHN4XCI7XG5pbXBvcnQgXCJ0YWlsd2luZC1tZXJnZVwiO1xuaW1wb3J0IFwiQHJhZGl4LXVpL3JlYWN0LXNsb3RcIjtcbmltcG9ydCBcIkByYWRpeC11aS9yZWFjdC1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAdGFuc3RhY2svcmVhY3QtcXVlcnktZGV2dG9vbHNcIjtcbmltcG9ydCBcIi4uL3NlcnZlci5qc1wiO1xuaW1wb3J0IFwibm9kZTphc3luY19ob29rc1wiO1xuaW1wb3J0IFwiQHRhbnN0YWNrL3JlYWN0LXJvdXRlci9zc3Ivc2VydmVyXCI7XG5pbXBvcnQgXCJtb25nb2RiXCI7XG5pbXBvcnQgXCIuL21vbmdvZGItREJFQTJ6RmUuanNcIjtcbmltcG9ydCBcIi4vdHlwZXMtQm42akZTX0IuanNcIjtcbmltcG9ydCBcInpvZFwiO1xuZnVuY3Rpb24gdXNlR2V0VG9kb3MoKSB7XG4gIHJldHVybiB1c2VRdWVyeSh0b2RvUXVlcmllcy5saXN0KCkpO1xufVxuZnVuY3Rpb24gdXNlQ3JlYXRlVG9kbygpIHtcbiAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuICByZXR1cm4gdXNlTXV0YXRpb24oe1xuICAgIG11dGF0aW9uS2V5OiBbXCJ0b2Rvc1wiLCBcImNyZWF0ZVwiXSxcbiAgICBtdXRhdGlvbkZuOiAoZGF0YSkgPT4gY3JlYXRlVG9kbyh7IGRhdGEgfSksXG4gICAgLy8gT3B0aW1pc3RpYyB1cGRhdGU6IGFkZCB0b2RvIHRvIGNhY2hlIGltbWVkaWF0ZWx5XG4gICAgb25NdXRhdGU6IGFzeW5jIChuZXdUb2RvKSA9PiB7XG4gICAgICBhd2FpdCBxdWVyeUNsaWVudC5jYW5jZWxRdWVyaWVzKHsgcXVlcnlLZXk6IHRvZG9RdWVyaWVzLmxpc3QoKS5xdWVyeUtleSB9KTtcbiAgICAgIGNvbnN0IHByZXZpb3VzVG9kb3MgPSBxdWVyeUNsaWVudC5nZXRRdWVyeURhdGEoXG4gICAgICAgIHRvZG9RdWVyaWVzLmxpc3QoKS5xdWVyeUtleVxuICAgICAgKTtcbiAgICAgIHF1ZXJ5Q2xpZW50LnNldFF1ZXJ5RGF0YShcbiAgICAgICAgdG9kb1F1ZXJpZXMubGlzdCgpLnF1ZXJ5S2V5LFxuICAgICAgICAob2xkKSA9PiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwidGVtcC1cIiArIERhdGUubm93KCksXG4gICAgICAgICAgICB0aXRsZTogbmV3VG9kby50aXRsZSxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6ICgvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoKSkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogKC8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpXG4gICAgICAgICAgfSxcbiAgICAgICAgICAuLi5vbGQgfHwgW11cbiAgICAgICAgXVxuICAgICAgKTtcbiAgICAgIHJldHVybiB7IHByZXZpb3VzVG9kb3MgfTtcbiAgICB9LFxuICAgIC8vIFJvbGxiYWNrIG9uIGVycm9yXG4gICAgb25FcnJvcjogKF9lcnJvciwgX25ld1RvZG8sIGNvbnRleHQpID0+IHtcbiAgICAgIGlmIChjb250ZXh0Py5wcmV2aW91c1RvZG9zKSB7XG4gICAgICAgIHF1ZXJ5Q2xpZW50LnNldFF1ZXJ5RGF0YShcbiAgICAgICAgICB0b2RvUXVlcmllcy5saXN0KCkucXVlcnlLZXksXG4gICAgICAgICAgY29udGV4dC5wcmV2aW91c1RvZG9zXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBVcGRhdGUgY2FjaGUgd2l0aCBzZXJ2ZXIgcmVzcG9uc2UgKHJlcGxhY2UgdGVtcCB0b2RvIHdpdGggcmVhbCBvbmUpXG4gICAgb25TZXR0bGVkOiAoY3JlYXRlZFRvZG8pID0+IHtcbiAgICAgIGlmIChjcmVhdGVkVG9kbykge1xuICAgICAgICBxdWVyeUNsaWVudC5zZXRRdWVyeURhdGEoXG4gICAgICAgICAgdG9kb1F1ZXJpZXMubGlzdCgpLnF1ZXJ5S2V5LFxuICAgICAgICAgIChvbGQpID0+IChvbGQgfHwgW10pLm1hcChcbiAgICAgICAgICAgICh0b2RvKSA9PiB0b2RvLmlkLnN0YXJ0c1dpdGgoXCJ0ZW1wLVwiKSA/IGNyZWF0ZWRUb2RvIDogdG9kb1xuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gdXNlVXBkYXRlVG9kbygpIHtcbiAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuICByZXR1cm4gdXNlTXV0YXRpb24oe1xuICAgIG11dGF0aW9uS2V5OiBbXCJ0b2Rvc1wiLCBcInVwZGF0ZVwiXSxcbiAgICBtdXRhdGlvbkZuOiAoZGF0YSkgPT4gdXBkYXRlVG9kbyh7IGRhdGEgfSksXG4gICAgLy8gT3B0aW1pc3RpYyB1cGRhdGU6IHVwZGF0ZSB0b2RvIGluIGNhY2hlIGltbWVkaWF0ZWx5XG4gICAgb25NdXRhdGU6IGFzeW5jICh7IGlkLCAuLi51cGRhdGVzIH0pID0+IHtcbiAgICAgIGF3YWl0IHF1ZXJ5Q2xpZW50LmNhbmNlbFF1ZXJpZXMoeyBxdWVyeUtleTogdG9kb1F1ZXJpZXMubGlzdCgpLnF1ZXJ5S2V5IH0pO1xuICAgICAgY29uc3QgcHJldmlvdXNUb2RvcyA9IHF1ZXJ5Q2xpZW50LmdldFF1ZXJ5RGF0YShcbiAgICAgICAgdG9kb1F1ZXJpZXMubGlzdCgpLnF1ZXJ5S2V5XG4gICAgICApO1xuICAgICAgcXVlcnlDbGllbnQuc2V0UXVlcnlEYXRhKFxuICAgICAgICB0b2RvUXVlcmllcy5saXN0KCkucXVlcnlLZXksXG4gICAgICAgIChvbGQpID0+IChvbGQgfHwgW10pLm1hcChcbiAgICAgICAgICAodG9kbykgPT4gdG9kby5pZCA9PT0gaWQgPyB7IC4uLnRvZG8sIC4uLnVwZGF0ZXMsIHVwZGF0ZWRBdDogKC8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpIH0gOiB0b2RvXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgICByZXR1cm4geyBwcmV2aW91c1RvZG9zIH07XG4gICAgfSxcbiAgICBvbkVycm9yOiAoX2Vycm9yLCBfdmFyaWFibGVzLCBjb250ZXh0KSA9PiB7XG4gICAgICBpZiAoY29udGV4dD8ucHJldmlvdXNUb2Rvcykge1xuICAgICAgICBxdWVyeUNsaWVudC5zZXRRdWVyeURhdGEoXG4gICAgICAgICAgdG9kb1F1ZXJpZXMubGlzdCgpLnF1ZXJ5S2V5LFxuICAgICAgICAgIGNvbnRleHQucHJldmlvdXNUb2Rvc1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25TZXR0bGVkOiAodXBkYXRlZFRvZG8pID0+IHtcbiAgICAgIGlmICh1cGRhdGVkVG9kbykge1xuICAgICAgICBxdWVyeUNsaWVudC5zZXRRdWVyeURhdGEoXG4gICAgICAgICAgdG9kb1F1ZXJpZXMubGlzdCgpLnF1ZXJ5S2V5LFxuICAgICAgICAgIChvbGQpID0+IChvbGQgfHwgW10pLm1hcChcbiAgICAgICAgICAgICh0b2RvKSA9PiB0b2RvLmlkID09PSB1cGRhdGVkVG9kby5pZCA/IHVwZGF0ZWRUb2RvIDogdG9kb1xuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gdXNlRGVsZXRlVG9kbygpIHtcbiAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuICByZXR1cm4gdXNlTXV0YXRpb24oe1xuICAgIG11dGF0aW9uS2V5OiBbXCJ0b2Rvc1wiLCBcImRlbGV0ZVwiXSxcbiAgICBtdXRhdGlvbkZuOiAoaWQpID0+IGRlbGV0ZVRvZG8oeyBkYXRhOiB7IGlkIH0gfSksXG4gICAgLy8gT3B0aW1pc3RpYyB1cGRhdGU6IHJlbW92ZSB0b2RvIGZyb20gY2FjaGUgaW1tZWRpYXRlbHlcbiAgICBvbk11dGF0ZTogYXN5bmMgKGlkKSA9PiB7XG4gICAgICBhd2FpdCBxdWVyeUNsaWVudC5jYW5jZWxRdWVyaWVzKHsgcXVlcnlLZXk6IHRvZG9RdWVyaWVzLmxpc3QoKS5xdWVyeUtleSB9KTtcbiAgICAgIGNvbnN0IHByZXZpb3VzVG9kb3MgPSBxdWVyeUNsaWVudC5nZXRRdWVyeURhdGEoXG4gICAgICAgIHRvZG9RdWVyaWVzLmxpc3QoKS5xdWVyeUtleVxuICAgICAgKTtcbiAgICAgIHF1ZXJ5Q2xpZW50LnNldFF1ZXJ5RGF0YShcbiAgICAgICAgdG9kb1F1ZXJpZXMubGlzdCgpLnF1ZXJ5S2V5LFxuICAgICAgICAob2xkKSA9PiBvbGQ/LmZpbHRlcigodG9kbykgPT4gdG9kby5pZCAhPT0gaWQpIHx8IFtdXG4gICAgICApO1xuICAgICAgcmV0dXJuIHsgcHJldmlvdXNUb2RvcyB9O1xuICAgIH0sXG4gICAgb25FcnJvcjogKF9lcnJvciwgX2lkLCBjb250ZXh0KSA9PiB7XG4gICAgICBpZiAoY29udGV4dD8ucHJldmlvdXNUb2Rvcykge1xuICAgICAgICBxdWVyeUNsaWVudC5zZXRRdWVyeURhdGEoXG4gICAgICAgICAgdG9kb1F1ZXJpZXMubGlzdCgpLnF1ZXJ5S2V5LFxuICAgICAgICAgIGNvbnRleHQucHJldmlvdXNUb2Rvc1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH0sXG4gICAgLy8gRGVsZXRpb24gYWxyZWFkeSByZWZsZWN0ZWQgaW4gb3B0aW1pc3RpYyB1cGRhdGUsIGJ1dCBvblNldHRsZWQgZW5zdXJlcyBjb25zaXN0ZW5jeVxuICAgIG9uU2V0dGxlZDogKCkgPT4ge1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBDYXJkKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSB7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgXCJkYXRhLXNsb3RcIjogXCJjYXJkXCIsXG4gICAgICBjbGFzc05hbWU6IGNuKFxuICAgICAgICBcImJnLWNhcmQgdGV4dC1jYXJkLWZvcmVncm91bmQgZmxleCBmbGV4LWNvbCBnYXAtNiByb3VuZGVkLXhsIGJvcmRlciBweS02IHNoYWRvdy1zbVwiLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICksXG4gICAgICAuLi5wcm9wc1xuICAgIH1cbiAgKTtcbn1cbmZ1bmN0aW9uIENhcmRIZWFkZXIoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pIHtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBqc3goXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBcImRhdGEtc2xvdFwiOiBcImNhcmQtaGVhZGVyXCIsXG4gICAgICBjbGFzc05hbWU6IGNuKFxuICAgICAgICBcIkBjb250YWluZXIvY2FyZC1oZWFkZXIgZ3JpZCBhdXRvLXJvd3MtbWluIGdyaWQtcm93cy1bYXV0b19hdXRvXSBpdGVtcy1zdGFydCBnYXAtMiBweC02IGhhcy1kYXRhLVtzbG90PWNhcmQtYWN0aW9uXTpncmlkLWNvbHMtWzFmcl9hdXRvXSBbLmJvcmRlci1iXTpwYi02XCIsXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKSxcbiAgICAgIC4uLnByb3BzXG4gICAgfVxuICApO1xufVxuZnVuY3Rpb24gQ2FyZFRpdGxlKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSB7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgXCJkYXRhLXNsb3RcIjogXCJjYXJkLXRpdGxlXCIsXG4gICAgICBjbGFzc05hbWU6IGNuKFwibGVhZGluZy1ub25lIGZvbnQtc2VtaWJvbGRcIiwgY2xhc3NOYW1lKSxcbiAgICAgIC4uLnByb3BzXG4gICAgfVxuICApO1xufVxuZnVuY3Rpb24gQ2FyZERlc2NyaXB0aW9uKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSB7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgXCJkYXRhLXNsb3RcIjogXCJjYXJkLWRlc2NyaXB0aW9uXCIsXG4gICAgICBjbGFzc05hbWU6IGNuKFwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHRleHQtc21cIiwgY2xhc3NOYW1lKSxcbiAgICAgIC4uLnByb3BzXG4gICAgfVxuICApO1xufVxuZnVuY3Rpb24gQ2FyZENvbnRlbnQoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pIHtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBqc3goXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBcImRhdGEtc2xvdFwiOiBcImNhcmQtY29udGVudFwiLFxuICAgICAgY2xhc3NOYW1lOiBjbihcInB4LTZcIiwgY2xhc3NOYW1lKSxcbiAgICAgIC4uLnByb3BzXG4gICAgfVxuICApO1xufVxuZnVuY3Rpb24gU2tlbGV0b24oeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pIHtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBqc3goXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBcImRhdGEtc2xvdFwiOiBcInNrZWxldG9uXCIsXG4gICAgICBjbGFzc05hbWU6IGNuKFwiYmctYWNjZW50IGFuaW1hdGUtcHVsc2Ugcm91bmRlZC1tZFwiLCBjbGFzc05hbWUpLFxuICAgICAgLi4ucHJvcHNcbiAgICB9XG4gICk7XG59XG5mdW5jdGlvbiBFbXB0eSh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkge1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGpzeChcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIFwiZGF0YS1zbG90XCI6IFwiZW1wdHlcIixcbiAgICAgIGNsYXNzTmFtZTogY24oXG4gICAgICAgIFwiZmxleCBtaW4tdy0wIGZsZXgtMSBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTYgcm91bmRlZC1sZyBib3JkZXItZGFzaGVkIHAtNiB0ZXh0LWNlbnRlciB0ZXh0LWJhbGFuY2UgbWQ6cC0xMlwiLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICksXG4gICAgICAuLi5wcm9wc1xuICAgIH1cbiAgKTtcbn1cbmZ1bmN0aW9uIEVtcHR5SGVhZGVyKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSB7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgXCJkYXRhLXNsb3RcIjogXCJlbXB0eS1oZWFkZXJcIixcbiAgICAgIGNsYXNzTmFtZTogY24oXG4gICAgICAgIFwiZmxleCBtYXgtdy1zbSBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1jZW50ZXJcIixcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApLFxuICAgICAgLi4ucHJvcHNcbiAgICB9XG4gICk7XG59XG5jb25zdCBlbXB0eU1lZGlhVmFyaWFudHMgPSBjdmEoXG4gIFwiZmxleCBzaHJpbmstMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItMiBbJl9zdmddOnBvaW50ZXItZXZlbnRzLW5vbmUgWyZfc3ZnXTpzaHJpbmstMFwiLFxuICB7XG4gICAgdmFyaWFudHM6IHtcbiAgICAgIHZhcmlhbnQ6IHtcbiAgICAgICAgZGVmYXVsdDogXCJiZy10cmFuc3BhcmVudFwiLFxuICAgICAgICBpY29uOiBcImJnLW11dGVkIHRleHQtZm9yZWdyb3VuZCBmbGV4IHNpemUtMTAgc2hyaW5rLTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbGcgWyZfc3ZnOm5vdChbY2xhc3MqPSdzaXplLSddKV06c2l6ZS02XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlZmF1bHRWYXJpYW50czoge1xuICAgICAgdmFyaWFudDogXCJkZWZhdWx0XCJcbiAgICB9XG4gIH1cbik7XG5mdW5jdGlvbiBFbXB0eU1lZGlhKHtcbiAgY2xhc3NOYW1lLFxuICB2YXJpYW50ID0gXCJkZWZhdWx0XCIsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgXCJkYXRhLXNsb3RcIjogXCJlbXB0eS1pY29uXCIsXG4gICAgICBcImRhdGEtdmFyaWFudFwiOiB2YXJpYW50LFxuICAgICAgY2xhc3NOYW1lOiBjbihlbXB0eU1lZGlhVmFyaWFudHMoeyB2YXJpYW50LCBjbGFzc05hbWUgfSkpLFxuICAgICAgLi4ucHJvcHNcbiAgICB9XG4gICk7XG59XG5mdW5jdGlvbiBFbXB0eVRpdGxlKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSB7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgXCJkYXRhLXNsb3RcIjogXCJlbXB0eS10aXRsZVwiLFxuICAgICAgY2xhc3NOYW1lOiBjbihcInRleHQtbGcgZm9udC1tZWRpdW0gdHJhY2tpbmctdGlnaHRcIiwgY2xhc3NOYW1lKSxcbiAgICAgIC4uLnByb3BzXG4gICAgfVxuICApO1xufVxuZnVuY3Rpb24gRW1wdHlEZXNjcmlwdGlvbih7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkge1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGpzeChcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIFwiZGF0YS1zbG90XCI6IFwiZW1wdHktZGVzY3JpcHRpb25cIixcbiAgICAgIGNsYXNzTmFtZTogY24oXG4gICAgICAgIFwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIFsmPmE6aG92ZXJdOnRleHQtcHJpbWFyeSB0ZXh0LXNtL3JlbGF4ZWQgWyY+YV06dW5kZXJsaW5lIFsmPmFdOnVuZGVybGluZS1vZmZzZXQtNFwiLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICksXG4gICAgICAuLi5wcm9wc1xuICAgIH1cbiAgKTtcbn1cbmZ1bmN0aW9uIElucHV0KHsgY2xhc3NOYW1lLCB0eXBlLCAuLi5wcm9wcyB9KSB7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KFxuICAgIFwiaW5wdXRcIixcbiAgICB7XG4gICAgICB0eXBlLFxuICAgICAgXCJkYXRhLXNsb3RcIjogXCJpbnB1dFwiLFxuICAgICAgY2xhc3NOYW1lOiBjbihcbiAgICAgICAgXCJmaWxlOnRleHQtZm9yZWdyb3VuZCBwbGFjZWhvbGRlcjp0ZXh0LW11dGVkLWZvcmVncm91bmQgc2VsZWN0aW9uOmJnLXByaW1hcnkgc2VsZWN0aW9uOnRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIGRhcms6YmctaW5wdXQvMzAgYm9yZGVyLWlucHV0IGgtOSB3LWZ1bGwgbWluLXctMCByb3VuZGVkLW1kIGJvcmRlciBiZy10cmFuc3BhcmVudCBweC0zIHB5LTEgdGV4dC1iYXNlIHNoYWRvdy14cyB0cmFuc2l0aW9uLVtjb2xvcixib3gtc2hhZG93XSBvdXRsaW5lLW5vbmUgZmlsZTppbmxpbmUtZmxleCBmaWxlOmgtNyBmaWxlOmJvcmRlci0wIGZpbGU6YmctdHJhbnNwYXJlbnQgZmlsZTp0ZXh0LXNtIGZpbGU6Zm9udC1tZWRpdW0gZGlzYWJsZWQ6cG9pbnRlci1ldmVudHMtbm9uZSBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6b3BhY2l0eS01MCBtZDp0ZXh0LXNtXCIsXG4gICAgICAgIFwiZm9jdXMtdmlzaWJsZTpib3JkZXItcmluZyBmb2N1cy12aXNpYmxlOnJpbmctcmluZy81MCBmb2N1cy12aXNpYmxlOnJpbmctWzNweF1cIixcbiAgICAgICAgXCJhcmlhLWludmFsaWQ6cmluZy1kZXN0cnVjdGl2ZS8yMCBkYXJrOmFyaWEtaW52YWxpZDpyaW5nLWRlc3RydWN0aXZlLzQwIGFyaWEtaW52YWxpZDpib3JkZXItZGVzdHJ1Y3RpdmVcIixcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApLFxuICAgICAgLi4ucHJvcHNcbiAgICB9XG4gICk7XG59XG5mdW5jdGlvbiBBZGRUb2RvRm9ybSgpIHtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgY3JlYXRlVG9kbzIgPSB1c2VDcmVhdGVUb2RvKCk7XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aXRsZS50cmltKCkpIHtcbiAgICAgIGNyZWF0ZVRvZG8yLm11dGF0ZSh7IHRpdGxlOiB0aXRsZS50cmltKCkgfSk7XG4gICAgICBzZXRUaXRsZShcIlwiKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4cyhcImZvcm1cIiwgeyBvblN1Ym1pdDogaGFuZGxlU3VibWl0LCBjbGFzc05hbWU6IFwiZmxleCBnYXAtMlwiLCBjaGlsZHJlbjogW1xuICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goXG4gICAgICBJbnB1dCxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIkFkZCBhIG5ldyB0b2RvLi4uXCIsXG4gICAgICAgIHZhbHVlOiB0aXRsZSxcbiAgICAgICAgb25DaGFuZ2U6IChlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSksXG4gICAgICAgIGRpc2FibGVkOiBjcmVhdGVUb2RvMi5pc1BlbmRpbmcsXG4gICAgICAgIGNsYXNzTmFtZTogXCJmbGV4LTFcIlxuICAgICAgfVxuICAgICksXG4gICAgLyogQF9fUFVSRV9fICovIGpzeHMoQnV0dG9uLCB7IHR5cGU6IFwic3VibWl0XCIsIGRpc2FibGVkOiBjcmVhdGVUb2RvMi5pc1BlbmRpbmcgfHwgIXRpdGxlLnRyaW0oKSwgY2hpbGRyZW46IFtcbiAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goUGx1cywgeyBjbGFzc05hbWU6IFwidy00IGgtNCBtci0yXCIgfSksXG4gICAgICBcIkFkZFwiXG4gICAgXSB9KVxuICBdIH0pO1xufVxuZnVuY3Rpb24gQ2hlY2tib3goe1xuICBjbGFzc05hbWUsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KFxuICAgIENoZWNrYm94UHJpbWl0aXZlLlJvb3QsXG4gICAge1xuICAgICAgXCJkYXRhLXNsb3RcIjogXCJjaGVja2JveFwiLFxuICAgICAgY2xhc3NOYW1lOiBjbihcbiAgICAgICAgXCJwZWVyIGJvcmRlci1pbnB1dCBkYXJrOmJnLWlucHV0LzMwIGRhdGEtW3N0YXRlPWNoZWNrZWRdOmJnLXByaW1hcnkgZGF0YS1bc3RhdGU9Y2hlY2tlZF06dGV4dC1wcmltYXJ5LWZvcmVncm91bmQgZGFyazpkYXRhLVtzdGF0ZT1jaGVja2VkXTpiZy1wcmltYXJ5IGRhdGEtW3N0YXRlPWNoZWNrZWRdOmJvcmRlci1wcmltYXJ5IGZvY3VzLXZpc2libGU6Ym9yZGVyLXJpbmcgZm9jdXMtdmlzaWJsZTpyaW5nLXJpbmcvNTAgYXJpYS1pbnZhbGlkOnJpbmctZGVzdHJ1Y3RpdmUvMjAgZGFyazphcmlhLWludmFsaWQ6cmluZy1kZXN0cnVjdGl2ZS80MCBhcmlhLWludmFsaWQ6Ym9yZGVyLWRlc3RydWN0aXZlIHNpemUtNCBzaHJpbmstMCByb3VuZGVkLVs0cHhdIGJvcmRlciBzaGFkb3cteHMgdHJhbnNpdGlvbi1zaGFkb3cgb3V0bGluZS1ub25lIGZvY3VzLXZpc2libGU6cmluZy1bM3B4XSBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6b3BhY2l0eS01MFwiLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICksXG4gICAgICAuLi5wcm9wcyxcbiAgICAgIGNoaWxkcmVuOiAvKiBAX19QVVJFX18gKi8ganN4KFxuICAgICAgICBDaGVja2JveFByaW1pdGl2ZS5JbmRpY2F0b3IsXG4gICAgICAgIHtcbiAgICAgICAgICBcImRhdGEtc2xvdFwiOiBcImNoZWNrYm94LWluZGljYXRvclwiLFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWN1cnJlbnQgdHJhbnNpdGlvbi1ub25lXCIsXG4gICAgICAgICAgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBqc3goQ2hlY2tJY29uLCB7IGNsYXNzTmFtZTogXCJzaXplLTMuNVwiIH0pXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gICk7XG59XG5mdW5jdGlvbiBUb2RvSXRlbSh7IHRvZG8gfSkge1xuICBjb25zdCB1cGRhdGVUb2RvMiA9IHVzZVVwZGF0ZVRvZG8oKTtcbiAgY29uc3QgZGVsZXRlVG9kbzIgPSB1c2VEZWxldGVUb2RvKCk7XG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcbiAgICB1cGRhdGVUb2RvMi5tdXRhdGUoe1xuICAgICAgaWQ6IHRvZG8uaWQsXG4gICAgICBjb21wbGV0ZWQ6ICF0b2RvLmNvbXBsZXRlZFxuICAgIH0pO1xuICB9O1xuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoKSA9PiB7XG4gICAgZGVsZXRlVG9kbzIubXV0YXRlKHRvZG8uaWQpO1xuICB9O1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGpzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcC00IHJvdW5kZWQtbGcgYm9yZGVyIGhvdmVyOmJvcmRlci1ib3JkZXIvODAgdHJhbnNpdGlvbi1jb2xvcnMgYmctY2FyZFwiLCBjaGlsZHJlbjogW1xuICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goXG4gICAgICBDaGVja2JveCxcbiAgICAgIHtcbiAgICAgICAgY2hlY2tlZDogdG9kby5jb21wbGV0ZWQsXG4gICAgICAgIG9uQ2hlY2tlZENoYW5nZTogaGFuZGxlVG9nZ2xlLFxuICAgICAgICBkaXNhYmxlZDogdXBkYXRlVG9kbzIuaXNQZW5kaW5nXG4gICAgICB9XG4gICAgKSxcbiAgICAvKiBAX19QVVJFX18gKi8ganN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmbGV4LTEgbWluLXctMFwiLCBjaGlsZHJlbjogW1xuICAgICAgLyogQF9fUFVSRV9fICovIGpzeChcbiAgICAgICAgXCJwXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNuKFxuICAgICAgICAgICAgXCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRydW5jYXRlXCIsXG4gICAgICAgICAgICB0b2RvLmNvbXBsZXRlZCAmJiBcImxpbmUtdGhyb3VnaCB0ZXh0LW11dGVkLWZvcmVncm91bmRcIlxuICAgICAgICAgICksXG4gICAgICAgICAgY2hpbGRyZW46IHRvZG8udGl0bGVcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goXCJwXCIsIHsgY2xhc3NOYW1lOiBcInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG10LTFcIiwgY2hpbGRyZW46IG5ldyBEYXRlKHRvZG8uY3JlYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKSB9KVxuICAgIF0gfSksXG4gICAgdG9kby5jb21wbGV0ZWQgJiYgLyogQF9fUFVSRV9fICovIGpzeChCYWRnZSwgeyB2YXJpYW50OiBcInNlY29uZGFyeVwiLCBjbGFzc05hbWU6IFwidGV4dC14c1wiLCBjaGlsZHJlbjogXCJEb25lXCIgfSksXG4gICAgLyogQF9fUFVSRV9fICovIGpzeChcbiAgICAgIEJ1dHRvbixcbiAgICAgIHtcbiAgICAgICAgdmFyaWFudDogXCJnaG9zdFwiLFxuICAgICAgICBzaXplOiBcImljb25cIixcbiAgICAgICAgb25DbGljazogaGFuZGxlRGVsZXRlLFxuICAgICAgICBkaXNhYmxlZDogZGVsZXRlVG9kbzIuaXNQZW5kaW5nLFxuICAgICAgICBjbGFzc05hbWU6IFwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGhvdmVyOnRleHQtZGVzdHJ1Y3RpdmVcIixcbiAgICAgICAgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBqc3goVHJhc2gyLCB7IGNsYXNzTmFtZTogXCJ3LTQgaC00XCIgfSlcbiAgICAgIH1cbiAgICApXG4gIF0gfSk7XG59XG5mdW5jdGlvbiBUb2RvTGlzdCgpIHtcbiAgY29uc3QgeyBkYXRhOiB0b2RvcywgaXNMb2FkaW5nLCBlcnJvciB9ID0gdXNlR2V0VG9kb3MoKTtcbiAgaWYgKGVycm9yKSB0aHJvdyBlcnJvcjtcbiAgY29uc3QgYWN0aXZlVG9kb3MgPSB0b2Rvcz8uZmlsdGVyKCh0b2RvKSA9PiAhdG9kby5jb21wbGV0ZWQpIHx8IFtdO1xuICBjb25zdCBjb21wbGV0ZWRUb2RvcyA9IHRvZG9zPy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uY29tcGxldGVkKSB8fCBbXTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBqc3hzKENhcmQsIHsgY2xhc3NOYW1lOiBcInctZnVsbCBtYXgtdy0zeGwgbXgtYXV0b1wiLCBjaGlsZHJlbjogW1xuICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goQ2FyZEhlYWRlciwgeyBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIGpzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCIsIGNoaWxkcmVuOiBbXG4gICAgICAvKiBAX19QVVJFX18gKi8ganN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbXG4gICAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goQ2FyZFRpdGxlLCB7IGNoaWxkcmVuOiBcIk15IFRvZG9zXCIgfSksXG4gICAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goQ2FyZERlc2NyaXB0aW9uLCB7IGNoaWxkcmVuOiBcIk1hbmFnZSB5b3VyIHRhc2tzIHdpdGggTW9uZ29EQiArIFRhblN0YWNrXCIgfSlcbiAgICAgIF0gfSksXG4gICAgICAvKiBAX19QVVJFX18gKi8ganN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmbGV4IGdhcC0yXCIsIGNoaWxkcmVuOiBbXG4gICAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3hzKEJhZGdlLCB7IHZhcmlhbnQ6IFwib3V0bGluZVwiLCBjaGlsZHJlbjogW1xuICAgICAgICAgIGFjdGl2ZVRvZG9zLmxlbmd0aCxcbiAgICAgICAgICBcIiBhY3RpdmVcIlxuICAgICAgICBdIH0pLFxuICAgICAgICAvKiBAX19QVVJFX18gKi8ganN4cyhCYWRnZSwgeyB2YXJpYW50OiBcInNlY29uZGFyeVwiLCBjaGlsZHJlbjogW1xuICAgICAgICAgIGNvbXBsZXRlZFRvZG9zLmxlbmd0aCxcbiAgICAgICAgICBcIiBkb25lXCJcbiAgICAgICAgXSB9KVxuICAgICAgXSB9KVxuICAgIF0gfSkgfSksXG4gICAgLyogQF9fUFVSRV9fICovIGpzeHMoQ2FyZENvbnRlbnQsIHsgY2xhc3NOYW1lOiBcInNwYWNlLXktNFwiLCBjaGlsZHJlbjogW1xuICAgICAgLyogQF9fUFVSRV9fICovIGpzeChBZGRUb2RvRm9ybSwge30pLFxuICAgICAgaXNMb2FkaW5nICYmIC8qIEBfX1BVUkVfXyAqLyBqc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic3BhY2UteS0zXCIsIGNoaWxkcmVuOiBbLi4uQXJyYXkoMyldLm1hcCgoXywgaSkgPT4gLyogQF9fUFVSRV9fICovIGpzeHMoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcC00IHJvdW5kZWQtbGcgYm9yZGVyXCIsXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goU2tlbGV0b24sIHsgY2xhc3NOYW1lOiBcInctNSBoLTVcIiB9KSxcbiAgICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZsZXgtMSBzcGFjZS15LTJcIiwgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgLyogQF9fUFVSRV9fICovIGpzeChTa2VsZXRvbiwgeyBjbGFzc05hbWU6IFwiaC00IHctMy80XCIgfSksXG4gICAgICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goU2tlbGV0b24sIHsgY2xhc3NOYW1lOiBcImgtMyB3LTEvNFwiIH0pXG4gICAgICAgICAgICBdIH0pXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBpXG4gICAgICApKSB9KSxcbiAgICAgICFpc0xvYWRpbmcgJiYgdG9kb3MgJiYgdG9kb3MubGVuZ3RoID09PSAwICYmIC8qIEBfX1BVUkVfXyAqLyBqc3goRW1wdHksIHsgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBqc3hzKEVtcHR5SGVhZGVyLCB7IGNoaWxkcmVuOiBbXG4gICAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goRW1wdHlNZWRpYSwgeyB2YXJpYW50OiBcImljb25cIiwgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBqc3goQ2hlY2tTcXVhcmUsIHt9KSB9KSxcbiAgICAgICAgLyogQF9fUFVSRV9fICovIGpzeChFbXB0eVRpdGxlLCB7IGNoaWxkcmVuOiBcIk5vIHRvZG9zIHlldFwiIH0pLFxuICAgICAgICAvKiBAX19QVVJFX18gKi8ganN4KEVtcHR5RGVzY3JpcHRpb24sIHsgY2hpbGRyZW46IFwiQWRkIHlvdXIgZmlyc3QgdGFzayB0byBnZXQgc3RhcnRlZCFcIiB9KVxuICAgICAgXSB9KSB9KSxcbiAgICAgICFpc0xvYWRpbmcgJiYgYWN0aXZlVG9kb3MubGVuZ3RoID4gMCAmJiAvKiBAX19QVVJFX18gKi8ganN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNwYWNlLXktM1wiLCBjaGlsZHJlbjogYWN0aXZlVG9kb3MubWFwKCh0b2RvKSA9PiAvKiBAX19QVVJFX18gKi8ganN4KFRvZG9JdGVtLCB7IHRvZG8gfSwgdG9kby5pZCkpIH0pLFxuICAgICAgIWlzTG9hZGluZyAmJiBjb21wbGV0ZWRUb2Rvcy5sZW5ndGggPiAwICYmIC8qIEBfX1BVUkVfXyAqLyBqc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtcbiAgICAgICAgLyogQF9fUFVSRV9fICovIGpzeChcImgzXCIsIHsgY2xhc3NOYW1lOiBcInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG1iLTMgbXQtNlwiLCBjaGlsZHJlbjogXCJDb21wbGV0ZWRcIiB9KSxcbiAgICAgICAgLyogQF9fUFVSRV9fICovIGpzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzcGFjZS15LTNcIiwgY2hpbGRyZW46IGNvbXBsZXRlZFRvZG9zLm1hcCgodG9kbykgPT4gLyogQF9fUFVSRV9fICovIGpzeChUb2RvSXRlbSwgeyB0b2RvIH0sIHRvZG8uaWQpKSB9KVxuICAgICAgXSB9KVxuICAgIF0gfSlcbiAgXSB9KTtcbn1cbmZ1bmN0aW9uIFRvZG9zUGFnZSgpIHtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBqc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwibWluLWgtc2NyZWVuIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1iYWNrZ3JvdW5kIHRvLXNlY29uZGFyeS8yMCBweS0xMiBweC00XCIsIGNoaWxkcmVuOiAvKiBAX19QVVJFX18gKi8ganN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJtYXgtdy00eGwgbXgtYXV0b1wiLCBjaGlsZHJlbjogW1xuICAgIC8qIEBfX1BVUkVfXyAqLyBqc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInRleHQtY2VudGVyIG1iLTEyXCIsIGNoaWxkcmVuOiBbXG4gICAgICAvKiBAX19QVVJFX18gKi8ganN4KFwiaDFcIiwgeyBjbGFzc05hbWU6IFwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZCBtYi0zXCIsIGNoaWxkcmVuOiBcIlRvZG8gRGVtb1wiIH0pLFxuICAgICAgLyogQF9fUFVSRV9fICovIGpzeChcInBcIiwgeyBjbGFzc05hbWU6IFwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG1heC13LTJ4bCBteC1hdXRvXCIsIGNoaWxkcmVuOiBcIkEgZnVsbC1zdGFjayBDUlVEIGFwcGxpY2F0aW9uIGRlbW9uc3RyYXRpbmcgTW9uZ29EQiBpbnRlZ3JhdGlvbiB3aXRoIFRhblN0YWNrIFN0YXJ0LiBGZWF0dXJlcyB0eXBlLXNhZmUgQVBJIHJvdXRlcywgb3B0aW1pc3RpYyB1cGRhdGVzLCBhbmQgc21hcnQgY2FjaGluZy5cIiB9KVxuICAgIF0gfSksXG4gICAgLyogQF9fUFVSRV9fICovIGpzeChUb2RvTGlzdCwge30pXG4gIF0gfSkgfSk7XG59XG5leHBvcnQge1xuICBUb2Rvc1BhZ2UgYXMgY29tcG9uZW50XG59O1xuIiwgImltcG9ydCB7IGpzeCwganN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdXNwZW5zZVF1ZXJ5IH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgRGF0YWJhc2UsIEFycm93UmlnaHQsIFNoaWVsZCwgWmFwIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgYSBhcyBjbiwgQiBhcyBCdXR0b24gfSBmcm9tIFwiLi9yb3V0ZXItQkxrYkp3NksuanNcIjtcbmltcG9ydCB7IEIgYXMgQmFkZ2UgfSBmcm9tIFwiLi9iYWRnZS04R1J6VUNKTC5qc1wiO1xuaW1wb3J0ICogYXMgSG92ZXJDYXJkUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtaG92ZXItY2FyZFwiO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVTZXJ2ZXJGbiwgYSBhcyBjcmVhdGVTZXJ2ZXJScGMgfSBmcm9tIFwiLi4vc2VydmVyLmpzXCI7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIi4vbW9uZ29kYi1EQkVBMnpGZS5qc1wiO1xuaW1wb3J0IFwiQHRhbnN0YWNrL3JlYWN0LXJvdXRlci1zc3ItcXVlcnlcIjtcbmltcG9ydCBcIkB0YW5zdGFjay9yZWFjdC1yb3V0ZXItZGV2dG9vbHNcIjtcbmltcG9ydCBcIkB0YW5zdGFjay9yZWFjdC1kZXZ0b29sc1wiO1xuaW1wb3J0IFwiQHJhZGl4LXVpL3JlYWN0LWRpYWxvZ1wiO1xuaW1wb3J0IFwiY2xzeFwiO1xuaW1wb3J0IFwidGFpbHdpbmQtbWVyZ2VcIjtcbmltcG9ydCBcIkByYWRpeC11aS9yZWFjdC1zbG90XCI7XG5pbXBvcnQgXCJjbGFzcy12YXJpYW5jZS1hdXRob3JpdHlcIjtcbmltcG9ydCBcIkByYWRpeC11aS9yZWFjdC1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJyZWFjdFwiO1xuaW1wb3J0IFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5LWRldnRvb2xzXCI7XG5pbXBvcnQgXCJtb25nb2RiXCI7XG5pbXBvcnQgXCIuL3R5cGVzLUJuNmpGU19CLmpzXCI7XG5pbXBvcnQgXCJ6b2RcIjtcbmltcG9ydCBcIm5vZGU6YXN5bmNfaG9va3NcIjtcbmltcG9ydCBcIkB0YW5zdGFjay9yZWFjdC1yb3V0ZXIvc3NyL3NlcnZlclwiO1xuZnVuY3Rpb24gSG92ZXJDYXJkKHtcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBqc3goSG92ZXJDYXJkUHJpbWl0aXZlLlJvb3QsIHsgXCJkYXRhLXNsb3RcIjogXCJob3Zlci1jYXJkXCIsIC4uLnByb3BzIH0pO1xufVxuZnVuY3Rpb24gSG92ZXJDYXJkVHJpZ2dlcih7XG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KEhvdmVyQ2FyZFByaW1pdGl2ZS5UcmlnZ2VyLCB7IFwiZGF0YS1zbG90XCI6IFwiaG92ZXItY2FyZC10cmlnZ2VyXCIsIC4uLnByb3BzIH0pO1xufVxuZnVuY3Rpb24gSG92ZXJDYXJkQ29udGVudCh7XG4gIGNsYXNzTmFtZSxcbiAgYWxpZ24gPSBcImNlbnRlclwiLFxuICBzaWRlT2Zmc2V0ID0gNCxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBqc3goSG92ZXJDYXJkUHJpbWl0aXZlLlBvcnRhbCwgeyBcImRhdGEtc2xvdFwiOiBcImhvdmVyLWNhcmQtcG9ydGFsXCIsIGNoaWxkcmVuOiAvKiBAX19QVVJFX18gKi8ganN4KFxuICAgIEhvdmVyQ2FyZFByaW1pdGl2ZS5Db250ZW50LFxuICAgIHtcbiAgICAgIFwiZGF0YS1zbG90XCI6IFwiaG92ZXItY2FyZC1jb250ZW50XCIsXG4gICAgICBhbGlnbixcbiAgICAgIHNpZGVPZmZzZXQsXG4gICAgICBjbGFzc05hbWU6IGNuKFxuICAgICAgICBcImJnLXBvcG92ZXIgdGV4dC1wb3BvdmVyLWZvcmVncm91bmQgZGF0YS1bc3RhdGU9b3Blbl06YW5pbWF0ZS1pbiBkYXRhLVtzdGF0ZT1jbG9zZWRdOmFuaW1hdGUtb3V0IGRhdGEtW3N0YXRlPWNsb3NlZF06ZmFkZS1vdXQtMCBkYXRhLVtzdGF0ZT1vcGVuXTpmYWRlLWluLTAgZGF0YS1bc3RhdGU9Y2xvc2VkXTp6b29tLW91dC05NSBkYXRhLVtzdGF0ZT1vcGVuXTp6b29tLWluLTk1IGRhdGEtW3NpZGU9Ym90dG9tXTpzbGlkZS1pbi1mcm9tLXRvcC0yIGRhdGEtW3NpZGU9bGVmdF06c2xpZGUtaW4tZnJvbS1yaWdodC0yIGRhdGEtW3NpZGU9cmlnaHRdOnNsaWRlLWluLWZyb20tbGVmdC0yIGRhdGEtW3NpZGU9dG9wXTpzbGlkZS1pbi1mcm9tLWJvdHRvbS0yIHotNTAgdy02NCBvcmlnaW4tKC0tcmFkaXgtaG92ZXItY2FyZC1jb250ZW50LXRyYW5zZm9ybS1vcmlnaW4pIHJvdW5kZWQtbWQgYm9yZGVyLTIgcC00IHNoYWRvdy1sZyBkYXJrOnNoYWRvdy0yeGwgb3V0bGluZS1oaWRkZW5cIixcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApLFxuICAgICAgLi4ucHJvcHNcbiAgICB9XG4gICkgfSk7XG59XG5jb25zdCBjaGVja01vbmdvREJDb25uZWN0aW9uX2NyZWF0ZVNlcnZlckZuX2hhbmRsZXIgPSBjcmVhdGVTZXJ2ZXJScGMoXCJzcmNfc2VydmVyX21vbmdvZGItc3RhdHVzX3RzLS1jaGVja01vbmdvREJDb25uZWN0aW9uX2NyZWF0ZVNlcnZlckZuX2hhbmRsZXJcIiwgKG9wdHMsIHNpZ25hbCkgPT4ge1xuICByZXR1cm4gY2hlY2tNb25nb0RCQ29ubmVjdGlvbi5fX2V4ZWN1dGVTZXJ2ZXIob3B0cywgc2lnbmFsKTtcbn0pO1xuY29uc3QgY2hlY2tNb25nb0RCQ29ubmVjdGlvbiA9IGNyZWF0ZVNlcnZlckZuKHtcbiAgbWV0aG9kOiBcIkdFVFwiXG59KS5oYW5kbGVyKGNoZWNrTW9uZ29EQkNvbm5lY3Rpb25fY3JlYXRlU2VydmVyRm5faGFuZGxlciwgYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbm5lY3RlZDogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIGRiXG4gICAgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gICAgYXdhaXQgZGIuYWRtaW4oKS5waW5nKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbm5lY3RlZDogdHJ1ZVxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbm5lY3RlZDogZmFsc2VcbiAgICB9O1xuICB9XG59KTtcbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHtcbiAgICBkYXRhXG4gIH0gPSB1c2VTdXNwZW5zZVF1ZXJ5KHtcbiAgICBxdWVyeUtleTogW1wibW9uZ29kYi1jb25uZWN0aW9uLXN0YXR1c1wiXSxcbiAgICBxdWVyeUZuOiAoKSA9PiBjaGVja01vbmdvREJDb25uZWN0aW9uKCksXG4gICAgc3RhbGVUaW1lOiAxZTQsXG4gICAgLy8gQ2hlY2sgZXZlcnkgMTAgc2Vjb25kc1xuICAgIHJlZmV0Y2hJbnRlcnZhbDogMWU0XG4gIH0pO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGpzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwibWluLWgtc2NyZWVuIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1iYWNrZ3JvdW5kIHRvLXNlY29uZGFyeS8yMFwiLCBjaGlsZHJlbjogW1xuICAgIC8qIEBfX1BVUkVfXyAqLyBqc3hzKFwic2VjdGlvblwiLCB7IGNsYXNzTmFtZTogXCJtYXgtdy01eGwgbXgtYXV0byBweC02IHB0LTIwIHBiLTE2IHRleHQtY2VudGVyXCIsIGNoaWxkcmVuOiBbXG4gICAgICAvKiBAX19QVVJFX18gKi8ganN4cyhCYWRnZSwgeyB2YXJpYW50OiBcInNlY29uZGFyeVwiLCBjbGFzc05hbWU6IFwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTQgcHktMiByb3VuZGVkLWZ1bGwgdGV4dC1zbSBmb250LW1lZGl1bSBtYi04XCIsIGNoaWxkcmVuOiBbXG4gICAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goRGF0YWJhc2UsIHsgY2xhc3NOYW1lOiBcInctNCBoLTRcIiB9KSxcbiAgICAgICAgXCJNb25nb0RCICsgVGFuU3RhY2sgU3RhcnQgRGVtb1wiLFxuICAgICAgICAvKiBAX19QVVJFX18gKi8ganN4KEJhZGdlLCB7IHZhcmlhbnQ6IGRhdGEuY29ubmVjdGVkID8gXCJkZWZhdWx0XCIgOiBcImRlc3RydWN0aXZlXCIsIGNsYXNzTmFtZTogXCJtbC0xXCIsIGNoaWxkcmVuOiBkYXRhLmNvbm5lY3RlZCA/IFwiQ29ubmVjdGVkXCIgOiBcIkRpc2Nvbm5lY3RlZFwiIH0pXG4gICAgICBdIH0pLFxuICAgICAgLyogQF9fUFVSRV9fICovIGpzeHMoXCJoMVwiLCB7IGNsYXNzTmFtZTogXCJ0ZXh0LTV4bCBtZDp0ZXh0LTZ4bCBmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kIG1iLTYgdHJhY2tpbmctdGlnaHRcIiwgY2hpbGRyZW46IFtcbiAgICAgICAgXCJUeXBlLXNhZmUgZnVsbC1zdGFja1wiLFxuICAgICAgICAvKiBAX19QVVJFX18gKi8ganN4KFwiYnJcIiwge30pLFxuICAgICAgICAvKiBAX19QVVJFX18gKi8ganN4KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJiZy1ncmFkaWVudC10by1yIGZyb20tWyMwMDY4NEFdIHRvLVsjMDBFRDY0XSBiZy1jbGlwLXRleHQgdGV4dC10cmFuc3BhcmVudFwiLCBjaGlsZHJlbjogXCJ0b2RvcyB3aXRoIE1vbmdvREJcIiB9KVxuICAgICAgXSB9KSxcbiAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goXCJwXCIsIHsgY2xhc3NOYW1lOiBcInRleHQteGwgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG1heC13LTJ4bCBteC1hdXRvIG1iLTEwIGxlYWRpbmctcmVsYXhlZFwiLCBjaGlsZHJlbjogXCJBIGRlbW9uc3RyYXRpb24gb2YgTW9uZ29EQiBpbnRlZ3JhdGlvbiB3aXRoIFRhblN0YWNrIFN0YXJ0LCBmZWF0dXJpbmcgZW5kLXRvLWVuZCB0eXBlIHNhZmV0eSBhbmQgc2VydmVybGVzcy1vcHRpbWl6ZWQgY29ubmVjdGlvbiBwb29saW5nLlwiIH0pLFxuICAgICAgLyogQF9fUFVSRV9fICovIGpzeChMaW5rLCB7IHRvOiBcIi90b2Rvc1wiLCBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIGpzeHMoQnV0dG9uLCB7IHNpemU6IFwibGdcIiwgY2xhc3NOYW1lOiBcImdyb3VwIGJnLVsjMDBFRDY0XSBob3ZlcjpiZy1bIzAwRUQ2NF0vOTAgdGV4dC1bIzAwMUUyQl1cIiwgY2hpbGRyZW46IFtcbiAgICAgICAgXCJWaWV3IERlbW9cIixcbiAgICAgICAgLyogQF9fUFVSRV9fICovIGpzeChBcnJvd1JpZ2h0LCB7IGNsYXNzTmFtZTogXCJ3LTQgaC00IG1sLTIgZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXgtMSB0cmFuc2l0aW9uLXRyYW5zZm9ybVwiIH0pXG4gICAgICBdIH0pIH0pXG4gICAgXSB9KSxcbiAgICAvKiBAX19QVVJFX18gKi8ganN4KFwic2VjdGlvblwiLCB7IGNsYXNzTmFtZTogXCJtYXgtdy01eGwgbXgtYXV0byBweC02IHBiLTIwXCIsIGNoaWxkcmVuOiAvKiBAX19QVVJFX18gKi8ganN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJncmlkIG1kOmdyaWQtY29scy0zIGdhcC02XCIsIGNoaWxkcmVuOiBbXG4gICAgICAvKiBAX19QVVJFX18gKi8ganN4cyhIb3ZlckNhcmQsIHsgY2hpbGRyZW46IFtcbiAgICAgICAgLyogQF9fUFVSRV9fICovIGpzeChIb3ZlckNhcmRUcmlnZ2VyLCB7IGFzQ2hpbGQ6IHRydWUsIGNoaWxkcmVuOiAvKiBAX19QVVJFX18gKi8ganN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJwLTYgcm91bmRlZC14bCBib3JkZXIgYmctY2FyZCBob3ZlcjpzaGFkb3ctbGcgaG92ZXI6Ym9yZGVyLVsjMDBFRDY0XSB0cmFuc2l0aW9uLWFsbFwiLCBjaGlsZHJlbjogW1xuICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwidy0xMiBoLTEyIHJvdW5kZWQtbGcgYmctWyMwMEVENjRdLzEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTRcIiwgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBqc3goU2hpZWxkLCB7IGNsYXNzTmFtZTogXCJ3LTYgaC02IHRleHQtWyMwMDY4NEFdIGRhcms6dGV4dC1bIzAwRUQ2NF1cIiB9KSB9KSxcbiAgICAgICAgICAvKiBAX19QVVJFX18gKi8ganN4KFwiaDNcIiwgeyBjbGFzc05hbWU6IFwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtY2FyZC1mb3JlZ3JvdW5kIG1iLTJcIiwgY2hpbGRyZW46IFwiRW5kLXRvLUVuZCBUeXBlIFNhZmV0eVwiIH0pLFxuICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goXCJwXCIsIHsgY2xhc3NOYW1lOiBcInRleHQtbXV0ZWQtZm9yZWdyb3VuZCB0ZXh0LXNtIGxlYWRpbmctcmVsYXhlZFwiLCBjaGlsZHJlbjogXCJGdWxseSB0eXBlZCBmcm9tIE1vbmdvREIgZG9jdW1lbnRzIHRvIEFQSSByb3V0ZXMgdG8gUmVhY3QgY29tcG9uZW50cy4gTm8gbWFudWFsIHR5cGUgYXNzZXJ0aW9ucyBuZWVkZWQuXCIgfSlcbiAgICAgICAgXSB9KSB9KSxcbiAgICAgICAgLyogQF9fUFVSRV9fICovIGpzeChIb3ZlckNhcmRDb250ZW50LCB7IGNsYXNzTmFtZTogXCJ3LTgwXCIsIGNoaWxkcmVuOiAvKiBAX19QVVJFX18gKi8ganN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzcGFjZS15LTJcIiwgY2hpbGRyZW46IFtcbiAgICAgICAgICAvKiBAX19QVVJFX18gKi8ganN4KFwiaDRcIiwgeyBjbGFzc05hbWU6IFwidGV4dC1zbSBmb250LXNlbWlib2xkXCIsIGNoaWxkcmVuOiBcIlR5cGUgU2FmZXR5IEZlYXR1cmVzXCIgfSksXG4gICAgICAgICAgLyogQF9fUFVSRV9fICovIGpzeChcInBcIiwgeyBjbGFzc05hbWU6IFwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIiwgY2hpbGRyZW46IFwiTGV2ZXJhZ2VzIFR5cGVTY3JpcHQgdGhyb3VnaG91dCB0aGUgc3RhY2sgd2l0aCBab2Qgc2NoZW1hcyBmb3IgcnVudGltZSB2YWxpZGF0aW9uLCBlbnN1cmluZyB0eXBlIGNvbnNpc3RlbmN5IGZyb20gZGF0YWJhc2UgcXVlcmllcyB0byBVSSBjb21wb25lbnRzLlwiIH0pXG4gICAgICAgIF0gfSkgfSlcbiAgICAgIF0gfSksXG4gICAgICAvKiBAX19QVVJFX18gKi8ganN4cyhIb3ZlckNhcmQsIHsgY2hpbGRyZW46IFtcbiAgICAgICAgLyogQF9fUFVSRV9fICovIGpzeChIb3ZlckNhcmRUcmlnZ2VyLCB7IGFzQ2hpbGQ6IHRydWUsIGNoaWxkcmVuOiAvKiBAX19QVVJFX18gKi8ganN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJwLTYgcm91bmRlZC14bCBib3JkZXIgYmctY2FyZCBob3ZlcjpzaGFkb3ctbGcgaG92ZXI6Ym9yZGVyLVsjMDBFRDY0XSB0cmFuc2l0aW9uLWFsbFwiLCBjaGlsZHJlbjogW1xuICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwidy0xMiBoLTEyIHJvdW5kZWQtbGcgYmctWyMwMEVENjRdLzEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTRcIiwgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBqc3goRGF0YWJhc2UsIHsgY2xhc3NOYW1lOiBcInctNiBoLTYgdGV4dC1bIzAwNjg0QV0gZGFyazp0ZXh0LVsjMDBFRDY0XVwiIH0pIH0pLFxuICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goXCJoM1wiLCB7IGNsYXNzTmFtZTogXCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1jYXJkLWZvcmVncm91bmQgbWItMlwiLCBjaGlsZHJlbjogXCJTZXJ2ZXJsZXNzIE9wdGltaXplZFwiIH0pLFxuICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goXCJwXCIsIHsgY2xhc3NOYW1lOiBcInRleHQtbXV0ZWQtZm9yZWdyb3VuZCB0ZXh0LXNtIGxlYWRpbmctcmVsYXhlZFwiLCBjaGlsZHJlbjogXCJDb25uZWN0aW9uIHBvb2xpbmcgYW5kIGNhY2hpbmcgcGF0dGVybnMgcHJldmVudCBjb25uZWN0aW9uIGV4aGF1c3Rpb24gaW4gc2VydmVybGVzcyBlbnZpcm9ubWVudHMuXCIgfSlcbiAgICAgICAgXSB9KSB9KSxcbiAgICAgICAgLyogQF9fUFVSRV9fICovIGpzeChIb3ZlckNhcmRDb250ZW50LCB7IGNsYXNzTmFtZTogXCJ3LTgwXCIsIGNoaWxkcmVuOiAvKiBAX19QVVJFX18gKi8ganN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzcGFjZS15LTJcIiwgY2hpbGRyZW46IFtcbiAgICAgICAgICAvKiBAX19QVVJFX18gKi8ganN4KFwiaDRcIiwgeyBjbGFzc05hbWU6IFwidGV4dC1zbSBmb250LXNlbWlib2xkXCIsIGNoaWxkcmVuOiBcIlNlcnZlcmxlc3MgQmVzdCBQcmFjdGljZXNcIiB9KSxcbiAgICAgICAgICAvKiBAX19QVVJFX18gKi8ganN4KFwicFwiLCB7IGNsYXNzTmFtZTogXCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiLCBjaGlsZHJlbjogXCJJbXBsZW1lbnRzIHNpbmdsZXRvbiBjb25uZWN0aW9uIHBhdHRlcm4gd2l0aCBnbG9iYWwgY2FjaGluZywgY29uZmlndXJhYmxlIHBvb2wgc2l6ZXMsIGFuZCBhdXRvbWF0aWMgaWRsZSBjb25uZWN0aW9uIGNsZWFudXAgZm9yIG9wdGltYWwgc2VydmVybGVzcyBwZXJmb3JtYW5jZS5cIiB9KVxuICAgICAgICBdIH0pIH0pXG4gICAgICBdIH0pLFxuICAgICAgLyogQF9fUFVSRV9fICovIGpzeHMoSG92ZXJDYXJkLCB7IGNoaWxkcmVuOiBbXG4gICAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goSG92ZXJDYXJkVHJpZ2dlciwgeyBhc0NoaWxkOiB0cnVlLCBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIGpzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicC02IHJvdW5kZWQteGwgYm9yZGVyIGJnLWNhcmQgaG92ZXI6c2hhZG93LWxnIGhvdmVyOmJvcmRlci1bIzAwRUQ2NF0gdHJhbnNpdGlvbi1hbGxcIiwgY2hpbGRyZW46IFtcbiAgICAgICAgICAvKiBAX19QVVJFX18gKi8ganN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInctMTIgaC0xMiByb3VuZGVkLWxnIGJnLVsjMDBFRDY0XS8xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi00XCIsIGNoaWxkcmVuOiAvKiBAX19QVVJFX18gKi8ganN4KFphcCwgeyBjbGFzc05hbWU6IFwidy02IGgtNiB0ZXh0LVsjMDA2ODRBXSBkYXJrOnRleHQtWyMwMEVENjRdXCIgfSkgfSksXG4gICAgICAgICAgLyogQF9fUFVSRV9fICovIGpzeChcImgzXCIsIHsgY2xhc3NOYW1lOiBcInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWNhcmQtZm9yZWdyb3VuZCBtYi0yXCIsIGNoaWxkcmVuOiBcIlNtYXJ0IENhY2hpbmdcIiB9KSxcbiAgICAgICAgICAvKiBAX19QVVJFX18gKi8ganN4KFwicFwiLCB7IGNsYXNzTmFtZTogXCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgdGV4dC1zbSBsZWFkaW5nLXJlbGF4ZWRcIiwgY2hpbGRyZW46IFwiVGFuU3RhY2sgUXVlcnkgd2l0aCBvcHRpbWlzdGljIHVwZGF0ZXMsIGNhY2hlIGludmFsaWRhdGlvbiwgYW5kIHN0YWxlLXdoaWxlLXJldmFsaWRhdGUgc3RyYXRlZ2llcy5cIiB9KVxuICAgICAgICBdIH0pIH0pLFxuICAgICAgICAvKiBAX19QVVJFX18gKi8ganN4KEhvdmVyQ2FyZENvbnRlbnQsIHsgY2xhc3NOYW1lOiBcInctODBcIiwgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBqc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNwYWNlLXktMlwiLCBjaGlsZHJlbjogW1xuICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goXCJoNFwiLCB7IGNsYXNzTmFtZTogXCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIiwgY2hpbGRyZW46IFwiQWR2YW5jZWQgQ2FjaGluZyBTdHJhdGVneVwiIH0pLFxuICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goXCJwXCIsIHsgY2xhc3NOYW1lOiBcInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIsIGNoaWxkcmVuOiBcIk9wdGltaXN0aWMgVUkgdXBkYXRlcyBwcm92aWRlIGluc3RhbnQgZmVlZGJhY2sgd2hpbGUgbXV0YXRpb25zIGFyZSBpbiBmbGlnaHQuIEF1dG9tYXRpYyBjYWNoZSBpbnZhbGlkYXRpb24gYW5kIGJhY2tncm91bmQgcmVmZXRjaGluZyBrZWVwIGRhdGEgZnJlc2guXCIgfSlcbiAgICAgICAgXSB9KSB9KVxuICAgICAgXSB9KVxuICAgIF0gfSkgfSksXG4gICAgLyogQF9fUFVSRV9fICovIGpzeChcImZvb3RlclwiLCB7IGNsYXNzTmFtZTogXCJtdC0xMiBib3JkZXItdCBiZy1ncmFkaWVudC10by1iIGZyb20tYmFja2dyb3VuZCB0by1zZWNvbmRhcnkvMjBcIiwgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBqc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIm1heC13LTZ4bCBteC1hdXRvIHB4LTYgcHktMTJcIiwgY2hpbGRyZW46IFtcbiAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInRleHQtY2VudGVyIG1iLThcIiwgY2hpbGRyZW46IFtcbiAgICAgICAgLyogQF9fUFVSRV9fICovIGpzeChcImgzXCIsIHsgY2xhc3NOYW1lOiBcInRleHQtbGcgZm9udC1zZW1pYm9sZCBtYi0yXCIsIGNoaWxkcmVuOiBcIkJ1aWx0IHdpdGggTW9kZXJuIFRlY2hub2xvZ2llc1wiIH0pLFxuICAgICAgICAvKiBAX19QVVJFX18gKi8ganN4KFwicFwiLCB7IGNsYXNzTmFtZTogXCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiLCBjaGlsZHJlbjogXCJBIHBvd2VyZnVsIHN0YWNrIGZvciB0eXBlLXNhZmUgZnVsbC1zdGFjayBkZXZlbG9wbWVudFwiIH0pXG4gICAgICBdIH0pLFxuICAgICAgLyogQF9fUFVSRV9fICovIGpzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtNCBtYi04XCIsIGNoaWxkcmVuOiBbXG4gICAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3hzKFwiYVwiLCB7IGhyZWY6IFwiaHR0cHM6Ly90YW5zdGFjay5jb20vc3RhcnRcIiwgdGFyZ2V0OiBcIl9ibGFua1wiLCByZWw6IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiLCBjbGFzc05hbWU6IFwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcC00IHJvdW5kZWQtbGcgYmctY2FyZC81MCBib3JkZXIgYm9yZGVyLWJvcmRlci81MCBob3Zlcjpib3JkZXItYm9yZGVyIGhvdmVyOmJnLWNhcmQgdHJhbnNpdGlvbi1hbGwgZ3JvdXAgY3Vyc29yLXBvaW50ZXJcIiwgY2hpbGRyZW46IFtcbiAgICAgICAgICAvKiBAX19QVVJFX18gKi8ganN4KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJ0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtYi0xXCIsIGNoaWxkcmVuOiBcIkZyYW1ld29ya1wiIH0pLFxuICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcImZvbnQtc2VtaWJvbGQgdGV4dC1zbSBncm91cC1ob3Zlcjp0ZXh0LWZvcmVncm91bmQgdHJhbnNpdGlvbi1jb2xvcnNcIiwgY2hpbGRyZW46IFwiVGFuU3RhY2sgU3RhcnRcIiB9KVxuICAgICAgICBdIH0pLFxuICAgICAgICAvKiBAX19QVVJFX18gKi8ganN4cyhcImFcIiwgeyBocmVmOiBcImh0dHBzOi8vd3d3Lm1vbmdvZGIuY29tXCIsIHRhcmdldDogXCJfYmxhbmtcIiwgcmVsOiBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiwgY2xhc3NOYW1lOiBcImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHAtNCByb3VuZGVkLWxnIGJnLVsjMDBFRDY0XS81IGJvcmRlciBib3JkZXItWyMwMEVENjRdLzIwIGhvdmVyOmJvcmRlci1bIzAwRUQ2NF0vNDAgaG92ZXI6YmctWyMwMEVENjRdLzEwIHRyYW5zaXRpb24tYWxsIGdyb3VwIGN1cnNvci1wb2ludGVyXCIsIGNoaWxkcmVuOiBbXG4gICAgICAgICAgLyogQF9fUFVSRV9fICovIGpzeChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmQgbWItMVwiLCBjaGlsZHJlbjogXCJEYXRhYmFzZVwiIH0pLFxuICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcImZvbnQtYm9sZCB0ZXh0LXNtIGdyb3VwLWhvdmVyOnRleHQtZm9yZWdyb3VuZCB0cmFuc2l0aW9uLWNvbG9yc1wiLCBjaGlsZHJlbjogXCJNb25nb0RCXCIgfSlcbiAgICAgICAgXSB9KSxcbiAgICAgICAgLyogQF9fUFVSRV9fICovIGpzeHMoXCJhXCIsIHsgaHJlZjogXCJodHRwczovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmdcIiwgdGFyZ2V0OiBcIl9ibGFua1wiLCByZWw6IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiLCBjbGFzc05hbWU6IFwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcC00IHJvdW5kZWQtbGcgYmctY2FyZC81MCBib3JkZXIgYm9yZGVyLWJvcmRlci81MCBob3Zlcjpib3JkZXItYm9yZGVyIGhvdmVyOmJnLWNhcmQgdHJhbnNpdGlvbi1hbGwgZ3JvdXAgY3Vyc29yLXBvaW50ZXJcIiwgY2hpbGRyZW46IFtcbiAgICAgICAgICAvKiBAX19QVVJFX18gKi8ganN4KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJ0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtYi0xXCIsIGNoaWxkcmVuOiBcIkxhbmd1YWdlXCIgfSksXG4gICAgICAgICAgLyogQF9fUFVSRV9fICovIGpzeChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwiZm9udC1zZW1pYm9sZCB0ZXh0LXNtIGdyb3VwLWhvdmVyOnRleHQtZm9yZWdyb3VuZCB0cmFuc2l0aW9uLWNvbG9yc1wiLCBjaGlsZHJlbjogXCJUeXBlU2NyaXB0XCIgfSlcbiAgICAgICAgXSB9KVxuICAgICAgXSB9KSxcbiAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwidGV4dC1jZW50ZXIgcHQtNiBib3JkZXItdCBib3JkZXItYm9yZGVyLzUwXCIsIGNoaWxkcmVuOiAvKiBAX19QVVJFX18gKi8ganN4KFwicFwiLCB7IGNsYXNzTmFtZTogXCJ0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiLCBjaGlsZHJlbjogXCJEZW1vIGFwcGxpY2F0aW9uIHNob3djYXNpbmcgbW9kZXJuIGZ1bGwtc3RhY2sgZGV2ZWxvcG1lbnQgcGF0dGVybnNcIiB9KSB9KVxuICAgIF0gfSkgfSlcbiAgXSB9KTtcbn1cbmV4cG9ydCB7XG4gIEhvbWUgYXMgY29tcG9uZW50XG59O1xuIiwgImltcG9ydCB7IGpzeCwganN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgTGluaywgY3JlYXRlUm9vdFJvdXRlV2l0aENvbnRleHQsIEhlYWRDb250ZW50LCBTY3JpcHRzLCBjcmVhdGVGaWxlUm91dGUsIGxhenlSb3V0ZUNvbXBvbmVudCwgY3JlYXRlUm91dGVyIH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCB7IHNldHVwUm91dGVyU3NyUXVlcnlJbnRlZ3JhdGlvbiB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3Qtcm91dGVyLXNzci1xdWVyeVwiO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIsIHF1ZXJ5T3B0aW9ucyB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IFRhblN0YWNrUm91dGVyRGV2dG9vbHNQYW5lbCB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3Qtcm91dGVyLWRldnRvb2xzXCI7XG5pbXBvcnQgeyBUYW5TdGFja0RldnRvb2xzIH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1kZXZ0b29sc1wiO1xuaW1wb3J0IHsgWEljb24sIFN1biwgTW9vbiwgTWVudSwgQWxlcnRDaXJjbGUgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgKiBhcyBTaGVldFByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWRpYWxvZ1wiO1xuaW1wb3J0IHsgY2xzeCB9IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgeyB0d01lcmdlIH0gZnJvbSBcInRhaWx3aW5kLW1lcmdlXCI7XG5pbXBvcnQgeyBTbG90IH0gZnJvbSBcIkByYWRpeC11aS9yZWFjdC1zbG90XCI7XG5pbXBvcnQgeyBjdmEgfSBmcm9tIFwiY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5XCI7XG5pbXBvcnQgKiBhcyBEcm9wZG93bk1lbnVQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJlYWN0UXVlcnlEZXZ0b29sc1BhbmVsIH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeS1kZXZ0b29sc1wiO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVTZXJ2ZXJGbiwgYSBhcyBjcmVhdGVTZXJ2ZXJScGMsIGcgYXMgZ2V0Q29va2llJDEgfSBmcm9tIFwiLi4vc2VydmVyLmpzXCI7XG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XG5pbXBvcnQgeyBnIGFzIGdldFRvZG9zQ29sbGVjdGlvbiB9IGZyb20gXCIuL21vbmdvZGItREJFQTJ6RmUuanNcIjtcbmltcG9ydCB7IHQgYXMgdG9kb1RvUmVzcG9uc2UsIEMgYXMgQ3JlYXRlVG9kb1NjaGVtYSwgVSBhcyBVcGRhdGVUb2RvU2NoZW1hLCBEIGFzIERlbGV0ZVRvZG9TY2hlbWEgfSBmcm9tIFwiLi90eXBlcy1CbjZqRlNfQi5qc1wiO1xuZnVuY3Rpb24gZ2V0Q29udGV4dCgpIHtcbiAgY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoe1xuICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICBxdWVyaWVzOiB7XG4gICAgICAgIC8vIENvbnNpZGVyIGRhdGEgZnJlc2ggZm9yIDMwIHNlY29uZHMgKHByZXZlbnRzIGltbWVkaWF0ZSByZWZldGNoIG9uIGNsaWVudCBhZnRlciBTU1IpXG4gICAgICAgIHN0YWxlVGltZTogMzAgKiAxZTMsXG4gICAgICAgIC8vIEtlZXAgdW51c2VkIGRhdGEgaW4gY2FjaGUgZm9yIDUgbWludXRlc1xuICAgICAgICBnY1RpbWU6IDUgKiA2MCAqIDFlMyxcbiAgICAgICAgLy8gUmV0cnkgZmFpbGVkIHJlcXVlc3RzIDMgdGltZXMgd2l0aCBleHBvbmVudGlhbCBiYWNrb2ZmXG4gICAgICAgIHJldHJ5OiAzLFxuICAgICAgICAvLyBSZWZldGNoIG9uIHdpbmRvdyBmb2N1cyBmb3IgZGF0YSBmcmVzaG5lc3NcbiAgICAgICAgcmVmZXRjaE9uV2luZG93Rm9jdXM6IHRydWUsXG4gICAgICAgIC8vIFJlZmV0Y2ggb24gcmVjb25uZWN0IGFmdGVyIG5ldHdvcmsgaXNzdWVzXG4gICAgICAgIHJlZmV0Y2hPblJlY29ubmVjdDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIG11dGF0aW9uczoge1xuICAgICAgICAvLyBSZXRyeSBtdXRhdGlvbnMgb25jZSBvbiBmYWlsdXJlXG4gICAgICAgIHJldHJ5OiAxXG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBxdWVyeUNsaWVudFxuICB9O1xufVxuZnVuY3Rpb24gUHJvdmlkZXIoe1xuICBjaGlsZHJlbixcbiAgcXVlcnlDbGllbnRcbn0pIHtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBqc3goUXVlcnlDbGllbnRQcm92aWRlciwgeyBjbGllbnQ6IHF1ZXJ5Q2xpZW50LCBjaGlsZHJlbiB9KTtcbn1cbmZ1bmN0aW9uIGNuKC4uLmlucHV0cykge1xuICByZXR1cm4gdHdNZXJnZShjbHN4KGlucHV0cykpO1xufVxuZnVuY3Rpb24gU2hlZXQoeyAuLi5wcm9wcyB9KSB7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KFNoZWV0UHJpbWl0aXZlLlJvb3QsIHsgXCJkYXRhLXNsb3RcIjogXCJzaGVldFwiLCAuLi5wcm9wcyB9KTtcbn1cbmZ1bmN0aW9uIFNoZWV0VHJpZ2dlcih7XG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KFNoZWV0UHJpbWl0aXZlLlRyaWdnZXIsIHsgXCJkYXRhLXNsb3RcIjogXCJzaGVldC10cmlnZ2VyXCIsIC4uLnByb3BzIH0pO1xufVxuZnVuY3Rpb24gU2hlZXRQb3J0YWwoe1xuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGpzeChTaGVldFByaW1pdGl2ZS5Qb3J0YWwsIHsgXCJkYXRhLXNsb3RcIjogXCJzaGVldC1wb3J0YWxcIiwgLi4ucHJvcHMgfSk7XG59XG5mdW5jdGlvbiBTaGVldE92ZXJsYXkoe1xuICBjbGFzc05hbWUsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KFxuICAgIFNoZWV0UHJpbWl0aXZlLk92ZXJsYXksXG4gICAge1xuICAgICAgXCJkYXRhLXNsb3RcIjogXCJzaGVldC1vdmVybGF5XCIsXG4gICAgICBjbGFzc05hbWU6IGNuKFxuICAgICAgICBcImRhdGEtW3N0YXRlPW9wZW5dOmFuaW1hdGUtaW4gZGF0YS1bc3RhdGU9Y2xvc2VkXTphbmltYXRlLW91dCBkYXRhLVtzdGF0ZT1jbG9zZWRdOmZhZGUtb3V0LTAgZGF0YS1bc3RhdGU9b3Blbl06ZmFkZS1pbi0wIGZpeGVkIGluc2V0LTAgei01MCBiZy1ibGFjay81MFwiLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICksXG4gICAgICAuLi5wcm9wc1xuICAgIH1cbiAgKTtcbn1cbmZ1bmN0aW9uIFNoZWV0Q29udGVudCh7XG4gIGNsYXNzTmFtZSxcbiAgY2hpbGRyZW4sXG4gIHNpZGUgPSBcInJpZ2h0XCIsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4cyhTaGVldFBvcnRhbCwgeyBjaGlsZHJlbjogW1xuICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goU2hlZXRPdmVybGF5LCB7fSksXG4gICAgLyogQF9fUFVSRV9fICovIGpzeHMoXG4gICAgICBTaGVldFByaW1pdGl2ZS5Db250ZW50LFxuICAgICAge1xuICAgICAgICBcImRhdGEtc2xvdFwiOiBcInNoZWV0LWNvbnRlbnRcIixcbiAgICAgICAgY2xhc3NOYW1lOiBjbihcbiAgICAgICAgICBcImJnLWJhY2tncm91bmQgZGF0YS1bc3RhdGU9b3Blbl06YW5pbWF0ZS1pbiBkYXRhLVtzdGF0ZT1jbG9zZWRdOmFuaW1hdGUtb3V0IGZpeGVkIHotNTAgZmxleCBmbGV4LWNvbCBnYXAtNCBzaGFkb3ctbGcgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkYXRhLVtzdGF0ZT1jbG9zZWRdOmR1cmF0aW9uLTMwMCBkYXRhLVtzdGF0ZT1vcGVuXTpkdXJhdGlvbi01MDBcIixcbiAgICAgICAgICBzaWRlID09PSBcInJpZ2h0XCIgJiYgXCJkYXRhLVtzdGF0ZT1jbG9zZWRdOnNsaWRlLW91dC10by1yaWdodCBkYXRhLVtzdGF0ZT1vcGVuXTpzbGlkZS1pbi1mcm9tLXJpZ2h0IGluc2V0LXktMCByaWdodC0wIGgtZnVsbCB3LTMvNCBib3JkZXItbCBzbTptYXgtdy1zbVwiLFxuICAgICAgICAgIHNpZGUgPT09IFwibGVmdFwiICYmIFwiZGF0YS1bc3RhdGU9Y2xvc2VkXTpzbGlkZS1vdXQtdG8tbGVmdCBkYXRhLVtzdGF0ZT1vcGVuXTpzbGlkZS1pbi1mcm9tLWxlZnQgaW5zZXQteS0wIGxlZnQtMCBoLWZ1bGwgdy0zLzQgYm9yZGVyLXIgc206bWF4LXctc21cIixcbiAgICAgICAgICBzaWRlID09PSBcInRvcFwiICYmIFwiZGF0YS1bc3RhdGU9Y2xvc2VkXTpzbGlkZS1vdXQtdG8tdG9wIGRhdGEtW3N0YXRlPW9wZW5dOnNsaWRlLWluLWZyb20tdG9wIGluc2V0LXgtMCB0b3AtMCBoLWF1dG8gYm9yZGVyLWJcIixcbiAgICAgICAgICBzaWRlID09PSBcImJvdHRvbVwiICYmIFwiZGF0YS1bc3RhdGU9Y2xvc2VkXTpzbGlkZS1vdXQtdG8tYm90dG9tIGRhdGEtW3N0YXRlPW9wZW5dOnNsaWRlLWluLWZyb20tYm90dG9tIGluc2V0LXgtMCBib3R0b20tMCBoLWF1dG8gYm9yZGVyLXRcIixcbiAgICAgICAgICBjbGFzc05hbWVcbiAgICAgICAgKSxcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgLyogQF9fUFVSRV9fICovIGpzeHMoU2hlZXRQcmltaXRpdmUuQ2xvc2UsIHsgY2xhc3NOYW1lOiBcInJpbmctb2Zmc2V0LWJhY2tncm91bmQgZm9jdXM6cmluZy1yaW5nIGRhdGEtW3N0YXRlPW9wZW5dOmJnLXNlY29uZGFyeSBhYnNvbHV0ZSB0b3AtNCByaWdodC00IHJvdW5kZWQteHMgb3BhY2l0eS03MCB0cmFuc2l0aW9uLW9wYWNpdHkgaG92ZXI6b3BhY2l0eS0xMDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6b3V0bGluZS1oaWRkZW4gZGlzYWJsZWQ6cG9pbnRlci1ldmVudHMtbm9uZVwiLCBjaGlsZHJlbjogW1xuICAgICAgICAgICAgLyogQF9fUFVSRV9fICovIGpzeChYSWNvbiwgeyBjbGFzc05hbWU6IFwic2l6ZS00XCIgfSksXG4gICAgICAgICAgICAvKiBAX19QVVJFX18gKi8ganN4KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJzci1vbmx5XCIsIGNoaWxkcmVuOiBcIkNsb3NlXCIgfSlcbiAgICAgICAgICBdIH0pXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICApXG4gIF0gfSk7XG59XG5mdW5jdGlvbiBTaGVldEhlYWRlcih7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkge1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGpzeChcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIFwiZGF0YS1zbG90XCI6IFwic2hlZXQtaGVhZGVyXCIsXG4gICAgICBjbGFzc05hbWU6IGNuKFwiZmxleCBmbGV4LWNvbCBnYXAtMS41IHAtNFwiLCBjbGFzc05hbWUpLFxuICAgICAgLi4ucHJvcHNcbiAgICB9XG4gICk7XG59XG5mdW5jdGlvbiBTaGVldFRpdGxlKHtcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGpzeChcbiAgICBTaGVldFByaW1pdGl2ZS5UaXRsZSxcbiAgICB7XG4gICAgICBcImRhdGEtc2xvdFwiOiBcInNoZWV0LXRpdGxlXCIsXG4gICAgICBjbGFzc05hbWU6IGNuKFwidGV4dC1mb3JlZ3JvdW5kIGZvbnQtc2VtaWJvbGRcIiwgY2xhc3NOYW1lKSxcbiAgICAgIC4uLnByb3BzXG4gICAgfVxuICApO1xufVxuY29uc3QgYnV0dG9uVmFyaWFudHMgPSBjdmEoXG4gIFwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIHdoaXRlc3BhY2Utbm93cmFwIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWFsbCBkaXNhYmxlZDpwb2ludGVyLWV2ZW50cy1ub25lIGRpc2FibGVkOm9wYWNpdHktNTAgWyZfc3ZnXTpwb2ludGVyLWV2ZW50cy1ub25lIFsmX3N2Zzpub3QoW2NsYXNzKj0nc2l6ZS0nXSldOnNpemUtNCBzaHJpbmstMCBbJl9zdmddOnNocmluay0wIG91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOmJvcmRlci1yaW5nIGZvY3VzLXZpc2libGU6cmluZy1yaW5nLzUwIGZvY3VzLXZpc2libGU6cmluZy1bM3B4XSBhcmlhLWludmFsaWQ6cmluZy1kZXN0cnVjdGl2ZS8yMCBkYXJrOmFyaWEtaW52YWxpZDpyaW5nLWRlc3RydWN0aXZlLzQwIGFyaWEtaW52YWxpZDpib3JkZXItZGVzdHJ1Y3RpdmUgY3Vyc29yLXBvaW50ZXJcIixcbiAge1xuICAgIHZhcmlhbnRzOiB7XG4gICAgICB2YXJpYW50OiB7XG4gICAgICAgIGRlZmF1bHQ6IFwiYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBob3ZlcjpiZy1wcmltYXJ5LzkwXCIsXG4gICAgICAgIGRlc3RydWN0aXZlOiBcImJnLWRlc3RydWN0aXZlIHRleHQtd2hpdGUgaG92ZXI6YmctZGVzdHJ1Y3RpdmUvOTAgZm9jdXMtdmlzaWJsZTpyaW5nLWRlc3RydWN0aXZlLzIwIGRhcms6Zm9jdXMtdmlzaWJsZTpyaW5nLWRlc3RydWN0aXZlLzQwIGRhcms6YmctZGVzdHJ1Y3RpdmUvNjBcIixcbiAgICAgICAgb3V0bGluZTogXCJib3JkZXIgYmctYmFja2dyb3VuZCBzaGFkb3cteHMgaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtYWNjZW50LWZvcmVncm91bmQgZGFyazpiZy1pbnB1dC8zMCBkYXJrOmJvcmRlci1pbnB1dCBkYXJrOmhvdmVyOmJnLWlucHV0LzUwXCIsXG4gICAgICAgIHNlY29uZGFyeTogXCJiZy1zZWNvbmRhcnkgdGV4dC1zZWNvbmRhcnktZm9yZWdyb3VuZCBob3ZlcjpiZy1zZWNvbmRhcnkvODBcIixcbiAgICAgICAgZ2hvc3Q6IFwiaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtYWNjZW50LWZvcmVncm91bmQgZGFyazpob3ZlcjpiZy1hY2NlbnQvNTBcIixcbiAgICAgICAgbGluazogXCJ0ZXh0LXByaW1hcnkgdW5kZXJsaW5lLW9mZnNldC00IGhvdmVyOnVuZGVybGluZVwiXG4gICAgICB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICBkZWZhdWx0OiBcImgtOSBweC00IHB5LTIgaGFzLVs+c3ZnXTpweC0zXCIsXG4gICAgICAgIHNtOiBcImgtOCByb3VuZGVkLW1kIGdhcC0xLjUgcHgtMyBoYXMtWz5zdmddOnB4LTIuNVwiLFxuICAgICAgICBsZzogXCJoLTEwIHJvdW5kZWQtbWQgcHgtNiBoYXMtWz5zdmddOnB4LTRcIixcbiAgICAgICAgaWNvbjogXCJzaXplLTlcIixcbiAgICAgICAgXCJpY29uLXNtXCI6IFwic2l6ZS04XCIsXG4gICAgICAgIFwiaWNvbi1sZ1wiOiBcInNpemUtMTBcIlxuICAgICAgfVxuICAgIH0sXG4gICAgZGVmYXVsdFZhcmlhbnRzOiB7XG4gICAgICB2YXJpYW50OiBcImRlZmF1bHRcIixcbiAgICAgIHNpemU6IFwiZGVmYXVsdFwiXG4gICAgfVxuICB9XG4pO1xuZnVuY3Rpb24gQnV0dG9uKHtcbiAgY2xhc3NOYW1lLFxuICB2YXJpYW50LFxuICBzaXplLFxuICBhc0NoaWxkID0gZmFsc2UsXG4gIC4uLnByb3BzXG59KSB7XG4gIGNvbnN0IENvbXAgPSBhc0NoaWxkID8gU2xvdCA6IFwiYnV0dG9uXCI7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KFxuICAgIENvbXAsXG4gICAge1xuICAgICAgXCJkYXRhLXNsb3RcIjogXCJidXR0b25cIixcbiAgICAgIGNsYXNzTmFtZTogY24oYnV0dG9uVmFyaWFudHMoeyB2YXJpYW50LCBzaXplLCBjbGFzc05hbWUgfSkpLFxuICAgICAgLi4ucHJvcHNcbiAgICB9XG4gICk7XG59XG5mdW5jdGlvbiBEcm9wZG93bk1lbnUoe1xuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGpzeChEcm9wZG93bk1lbnVQcmltaXRpdmUuUm9vdCwgeyBcImRhdGEtc2xvdFwiOiBcImRyb3Bkb3duLW1lbnVcIiwgLi4ucHJvcHMgfSk7XG59XG5mdW5jdGlvbiBEcm9wZG93bk1lbnVUcmlnZ2VyKHtcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBqc3goXG4gICAgRHJvcGRvd25NZW51UHJpbWl0aXZlLlRyaWdnZXIsXG4gICAge1xuICAgICAgXCJkYXRhLXNsb3RcIjogXCJkcm9wZG93bi1tZW51LXRyaWdnZXJcIixcbiAgICAgIC4uLnByb3BzXG4gICAgfVxuICApO1xufVxuZnVuY3Rpb24gRHJvcGRvd25NZW51Q29udGVudCh7XG4gIGNsYXNzTmFtZSxcbiAgc2lkZU9mZnNldCA9IDQsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KERyb3Bkb3duTWVudVByaW1pdGl2ZS5Qb3J0YWwsIHsgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBqc3goXG4gICAgRHJvcGRvd25NZW51UHJpbWl0aXZlLkNvbnRlbnQsXG4gICAge1xuICAgICAgXCJkYXRhLXNsb3RcIjogXCJkcm9wZG93bi1tZW51LWNvbnRlbnRcIixcbiAgICAgIHNpZGVPZmZzZXQsXG4gICAgICBjbGFzc05hbWU6IGNuKFxuICAgICAgICBcImJnLXBvcG92ZXIgdGV4dC1wb3BvdmVyLWZvcmVncm91bmQgZGF0YS1bc3RhdGU9b3Blbl06YW5pbWF0ZS1pbiBkYXRhLVtzdGF0ZT1jbG9zZWRdOmFuaW1hdGUtb3V0IGRhdGEtW3N0YXRlPWNsb3NlZF06ZmFkZS1vdXQtMCBkYXRhLVtzdGF0ZT1vcGVuXTpmYWRlLWluLTAgZGF0YS1bc3RhdGU9Y2xvc2VkXTp6b29tLW91dC05NSBkYXRhLVtzdGF0ZT1vcGVuXTp6b29tLWluLTk1IGRhdGEtW3NpZGU9Ym90dG9tXTpzbGlkZS1pbi1mcm9tLXRvcC0yIGRhdGEtW3NpZGU9bGVmdF06c2xpZGUtaW4tZnJvbS1yaWdodC0yIGRhdGEtW3NpZGU9cmlnaHRdOnNsaWRlLWluLWZyb20tbGVmdC0yIGRhdGEtW3NpZGU9dG9wXTpzbGlkZS1pbi1mcm9tLWJvdHRvbS0yIHotNTAgbWF4LWgtKC0tcmFkaXgtZHJvcGRvd24tbWVudS1jb250ZW50LWF2YWlsYWJsZS1oZWlnaHQpIG1pbi13LVs4cmVtXSBvcmlnaW4tKC0tcmFkaXgtZHJvcGRvd24tbWVudS1jb250ZW50LXRyYW5zZm9ybS1vcmlnaW4pIG92ZXJmbG93LXgtaGlkZGVuIG92ZXJmbG93LXktYXV0byByb3VuZGVkLW1kIGJvcmRlciBwLTEgc2hhZG93LW1kXCIsXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKSxcbiAgICAgIC4uLnByb3BzXG4gICAgfVxuICApIH0pO1xufVxuZnVuY3Rpb24gRHJvcGRvd25NZW51SXRlbSh7XG4gIGNsYXNzTmFtZSxcbiAgaW5zZXQsXG4gIHZhcmlhbnQgPSBcImRlZmF1bHRcIixcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBqc3goXG4gICAgRHJvcGRvd25NZW51UHJpbWl0aXZlLkl0ZW0sXG4gICAge1xuICAgICAgXCJkYXRhLXNsb3RcIjogXCJkcm9wZG93bi1tZW51LWl0ZW1cIixcbiAgICAgIFwiZGF0YS1pbnNldFwiOiBpbnNldCxcbiAgICAgIFwiZGF0YS12YXJpYW50XCI6IHZhcmlhbnQsXG4gICAgICBjbGFzc05hbWU6IGNuKFxuICAgICAgICBcImZvY3VzOmJnLWFjY2VudCBmb2N1czp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGRhdGEtW3ZhcmlhbnQ9ZGVzdHJ1Y3RpdmVdOnRleHQtZGVzdHJ1Y3RpdmUgZGF0YS1bdmFyaWFudD1kZXN0cnVjdGl2ZV06Zm9jdXM6YmctZGVzdHJ1Y3RpdmUvMTAgZGFyazpkYXRhLVt2YXJpYW50PWRlc3RydWN0aXZlXTpmb2N1czpiZy1kZXN0cnVjdGl2ZS8yMCBkYXRhLVt2YXJpYW50PWRlc3RydWN0aXZlXTpmb2N1czp0ZXh0LWRlc3RydWN0aXZlIGRhdGEtW3ZhcmlhbnQ9ZGVzdHJ1Y3RpdmVdOio6W3N2Z106IXRleHQtZGVzdHJ1Y3RpdmUgWyZfc3ZnOm5vdChbY2xhc3MqPSd0ZXh0LSddKV06dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHJlbGF0aXZlIGZsZXggY3Vyc29yLWRlZmF1bHQgaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtc20gcHgtMiBweS0xLjUgdGV4dC1zbSBvdXRsaW5lLWhpZGRlbiBzZWxlY3Qtbm9uZSBkYXRhLVtkaXNhYmxlZF06cG9pbnRlci1ldmVudHMtbm9uZSBkYXRhLVtkaXNhYmxlZF06b3BhY2l0eS01MCBkYXRhLVtpbnNldF06cGwtOCBbJl9zdmddOnBvaW50ZXItZXZlbnRzLW5vbmUgWyZfc3ZnXTpzaHJpbmstMCBbJl9zdmc6bm90KFtjbGFzcyo9J3NpemUtJ10pXTpzaXplLTRcIixcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApLFxuICAgICAgLi4ucHJvcHNcbiAgICB9XG4gICk7XG59XG5jb25zdCBUaGVtZVByb3ZpZGVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoXG4gIHZvaWQgMFxuKTtcbmZ1bmN0aW9uIGdldENvb2tpZShuYW1lKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiB2b2lkIDA7XG4gIGNvbnN0IHZhbHVlID0gYDsgJHtkb2N1bWVudC5jb29raWV9YDtcbiAgY29uc3QgcGFydHMgPSB2YWx1ZS5zcGxpdChgOyAke25hbWV9PWApO1xuICBpZiAocGFydHMubGVuZ3RoID09PSAyKSByZXR1cm4gcGFydHMucG9wKCk/LnNwbGl0KFwiO1wiKS5zaGlmdCgpO1xufVxuZnVuY3Rpb24gc2V0Q29va2llKG5hbWUsIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcbiAgY29uc3QgbWF4QWdlID0gNjAgKiA2MCAqIDI0ICogMzY1O1xuICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lfT0ke3ZhbHVlfTsgbWF4LWFnZT0ke21heEFnZX07IHBhdGg9Lzsgc2FtZXNpdGU9bGF4YDtcbn1cbmZ1bmN0aW9uIFRoZW1lUHJvdmlkZXIoe1xuICBjaGlsZHJlbixcbiAgZGVmYXVsdFRoZW1lID0gXCJzeXN0ZW1cIixcbiAgc3RvcmFnZUtleSA9IFwidWktdGhlbWVcIixcbiAgLi4ucHJvcHNcbn0pIHtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShcbiAgICAoKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGRlZmF1bHRUaGVtZTtcbiAgICAgIGNvbnN0IGNvb2tpZVRoZW1lID0gZ2V0Q29va2llKHN0b3JhZ2VLZXkpO1xuICAgICAgcmV0dXJuIGNvb2tpZVRoZW1lID8/IGRlZmF1bHRUaGVtZTtcbiAgICB9XG4gICk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKFwibGlnaHRcIiwgXCJkYXJrXCIpO1xuICAgIGlmICh0aGVtZSA9PT0gXCJzeXN0ZW1cIikge1xuICAgICAgY29uc3Qgc3lzdGVtVGhlbWUgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIikubWF0Y2hlcyA/IFwiZGFya1wiIDogXCJsaWdodFwiO1xuICAgICAgcm9vdC5jbGFzc0xpc3QuYWRkKHN5c3RlbVRoZW1lKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcm9vdC5jbGFzc0xpc3QuYWRkKHRoZW1lKTtcbiAgfSwgW3RoZW1lXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHRoZW1lICE9PSBcInN5c3RlbVwiKSByZXR1cm47XG4gICAgY29uc3QgbWVkaWFRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKTtcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgY29uc3Qgcm9vdCA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoXCJsaWdodFwiLCBcImRhcmtcIik7XG4gICAgICByb290LmNsYXNzTGlzdC5hZGQoZS5tYXRjaGVzID8gXCJkYXJrXCIgOiBcImxpZ2h0XCIpO1xuICAgIH07XG4gICAgbWVkaWFRdWVyeS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhhbmRsZUNoYW5nZSk7XG4gICAgcmV0dXJuICgpID0+IG1lZGlhUXVlcnkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBoYW5kbGVDaGFuZ2UpO1xuICB9LCBbdGhlbWVdKTtcbiAgY29uc3QgdmFsdWUgPSB7XG4gICAgdGhlbWUsXG4gICAgc2V0VGhlbWU6IChuZXdUaGVtZSkgPT4ge1xuICAgICAgc2V0Q29va2llKHN0b3JhZ2VLZXksIG5ld1RoZW1lKTtcbiAgICAgIHNldFRoZW1lKG5ld1RoZW1lKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KFRoZW1lUHJvdmlkZXJDb250ZXh0LlByb3ZpZGVyLCB7IC4uLnByb3BzLCB2YWx1ZSwgY2hpbGRyZW4gfSk7XG59XG5jb25zdCB1c2VUaGVtZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoVGhlbWVQcm92aWRlckNvbnRleHQpO1xuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VUaGVtZSBtdXN0IGJlIHVzZWQgd2l0aGluIGEgVGhlbWVQcm92aWRlclwiKTtcbiAgfVxuICByZXR1cm4gY29udGV4dDtcbn07XG5mdW5jdGlvbiBUaGVtZVRvZ2dsZSgpIHtcbiAgY29uc3QgeyBzZXRUaGVtZSB9ID0gdXNlVGhlbWUoKTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBqc3hzKERyb3Bkb3duTWVudSwgeyBjaGlsZHJlbjogW1xuICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goRHJvcGRvd25NZW51VHJpZ2dlciwgeyBhc0NoaWxkOiB0cnVlLCBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIGpzeHMoQnV0dG9uLCB7IHZhcmlhbnQ6IFwiZ2hvc3RcIiwgc2l6ZTogXCJpY29uXCIsIGNoaWxkcmVuOiBbXG4gICAgICAvKiBAX19QVVJFX18gKi8ganN4KFN1biwgeyBjbGFzc05hbWU6IFwiaC1bMS4ycmVtXSB3LVsxLjJyZW1dIHJvdGF0ZS0wIHNjYWxlLTEwMCB0cmFuc2l0aW9uLWFsbCBkYXJrOi1yb3RhdGUtOTAgZGFyazpzY2FsZS0wXCIgfSksXG4gICAgICAvKiBAX19QVVJFX18gKi8ganN4KE1vb24sIHsgY2xhc3NOYW1lOiBcImFic29sdXRlIGgtWzEuMnJlbV0gdy1bMS4ycmVtXSByb3RhdGUtOTAgc2NhbGUtMCB0cmFuc2l0aW9uLWFsbCBkYXJrOnJvdGF0ZS0wIGRhcms6c2NhbGUtMTAwXCIgfSksXG4gICAgICAvKiBAX19QVVJFX18gKi8ganN4KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJzci1vbmx5XCIsIGNoaWxkcmVuOiBcIlRvZ2dsZSB0aGVtZVwiIH0pXG4gICAgXSB9KSB9KSxcbiAgICAvKiBAX19QVVJFX18gKi8ganN4cyhEcm9wZG93bk1lbnVDb250ZW50LCB7IGFsaWduOiBcImVuZFwiLCBjaGlsZHJlbjogW1xuICAgICAgLyogQF9fUFVSRV9fICovIGpzeChEcm9wZG93bk1lbnVJdGVtLCB7IG9uQ2xpY2s6ICgpID0+IHNldFRoZW1lKFwibGlnaHRcIiksIGNoaWxkcmVuOiBcIkxpZ2h0XCIgfSksXG4gICAgICAvKiBAX19QVVJFX18gKi8ganN4KERyb3Bkb3duTWVudUl0ZW0sIHsgb25DbGljazogKCkgPT4gc2V0VGhlbWUoXCJkYXJrXCIpLCBjaGlsZHJlbjogXCJEYXJrXCIgfSksXG4gICAgICAvKiBAX19QVVJFX18gKi8ganN4KERyb3Bkb3duTWVudUl0ZW0sIHsgb25DbGljazogKCkgPT4gc2V0VGhlbWUoXCJzeXN0ZW1cIiksIGNoaWxkcmVuOiBcIlN5c3RlbVwiIH0pXG4gICAgXSB9KVxuICBdIH0pO1xufVxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGpzeChcImhlYWRlclwiLCB7IGNsYXNzTmFtZTogXCJzdGlja3kgdG9wLTAgei01MCB3LWZ1bGwgcHgtNCBib3JkZXItYiBiZy1iYWNrZ3JvdW5kLzk1IGJhY2tkcm9wLWJsdXIgc3VwcG9ydHMtW2JhY2tkcm9wLWZpbHRlcl06YmctYmFja2dyb3VuZC82MFwiLCBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIGpzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29udGFpbmVyIGZsZXggaC0xNCBtYXgtdy1zY3JlZW4tMnhsIGl0ZW1zLWNlbnRlclwiLCBjaGlsZHJlbjogW1xuICAgIC8qIEBfX1BVUkVfXyAqLyBqc3hzKFNoZWV0LCB7IGNoaWxkcmVuOiBbXG4gICAgICAvKiBAX19QVVJFX18gKi8ganN4KFNoZWV0VHJpZ2dlciwgeyBhc0NoaWxkOiB0cnVlLCBjbGFzc05hbWU6IFwibXItMiBtZDpoaWRkZW5cIiwgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBqc3goQnV0dG9uLCB7IHZhcmlhbnQ6IFwiZ2hvc3RcIiwgc2l6ZTogXCJpY29uXCIsIFwiYXJpYS1sYWJlbFwiOiBcIk9wZW4gbWVudVwiLCBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIGpzeChNZW51LCB7IGNsYXNzTmFtZTogXCJoLTUgdy01XCIgfSkgfSkgfSksXG4gICAgICAvKiBAX19QVVJFX18gKi8ganN4cyhTaGVldENvbnRlbnQsIHsgc2lkZTogXCJsZWZ0XCIsIGNsYXNzTmFtZTogXCJ3LVszMDBweF0gc206dy1bNDAwcHhdXCIsIGNoaWxkcmVuOiBbXG4gICAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goU2hlZXRIZWFkZXIsIHsgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBqc3goU2hlZXRUaXRsZSwgeyBjaGlsZHJlbjogXCJOYXZpZ2F0aW9uXCIgfSkgfSksXG4gICAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3hzKFwibmF2XCIsIHsgY2xhc3NOYW1lOiBcImZsZXggZmxleC1jb2wgZ2FwLTQgbXQtOFwiLCBjaGlsZHJlbjogW1xuICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goXG4gICAgICAgICAgICBMaW5rLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0bzogXCIvXCIsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJ0ZXh0LWZvcmVncm91bmQvNjAgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6dGV4dC1mb3JlZ3JvdW5kIHRleHQtc20gZm9udC1tZWRpdW1cIixcbiAgICAgICAgICAgICAgYWN0aXZlUHJvcHM6IHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwidGV4dC1mb3JlZ3JvdW5kIHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOnRleHQtZm9yZWdyb3VuZCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFwiSG9tZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKSxcbiAgICAgICAgICAvKiBAX19QVVJFX18gKi8ganN4KFxuICAgICAgICAgICAgTGluayxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdG86IFwiL3RvZG9zXCIsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJ0ZXh0LWZvcmVncm91bmQvNjAgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6dGV4dC1mb3JlZ3JvdW5kIHRleHQtc20gZm9udC1tZWRpdW1cIixcbiAgICAgICAgICAgICAgYWN0aXZlUHJvcHM6IHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwidGV4dC1mb3JlZ3JvdW5kIHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOnRleHQtZm9yZWdyb3VuZCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFwiVG9kbyBEZW1vXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgIF0gfSlcbiAgICAgIF0gfSlcbiAgICBdIH0pLFxuICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goTGluaywgeyB0bzogXCIvXCIsIGNsYXNzTmFtZTogXCJtci02IGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiLCBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIGpzeChcbiAgICAgIFwiaW1nXCIsXG4gICAgICB7XG4gICAgICAgIHNyYzogXCIvdGFuc3RhY2std29yZC1sb2dvLXdoaXRlLnN2Z1wiLFxuICAgICAgICBhbHQ6IFwiVGFuU3RhY2tcIixcbiAgICAgICAgY2xhc3NOYW1lOiBcImgtNiBkYXJrOmludmVydC0wIGludmVydFwiXG4gICAgICB9XG4gICAgKSB9KSxcbiAgICAvKiBAX19QVVJFX18gKi8ganN4cyhcIm5hdlwiLCB7IGNsYXNzTmFtZTogXCJoaWRkZW4gbWQ6ZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTYgdGV4dC1zbVwiLCBjaGlsZHJlbjogW1xuICAgICAgLyogQF9fUFVSRV9fICovIGpzeChcbiAgICAgICAgTGluayxcbiAgICAgICAge1xuICAgICAgICAgIHRvOiBcIi9cIixcbiAgICAgICAgICBjbGFzc05hbWU6IFwidGV4dC1mb3JlZ3JvdW5kLzYwIHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOnRleHQtZm9yZWdyb3VuZCBmb250LW1lZGl1bVwiLFxuICAgICAgICAgIGFjdGl2ZVByb3BzOiB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwidGV4dC1mb3JlZ3JvdW5kIHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOnRleHQtZm9yZWdyb3VuZCBmb250LW1lZGl1bVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjaGlsZHJlbjogXCJIb21lXCJcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goXG4gICAgICAgIExpbmssXG4gICAgICAgIHtcbiAgICAgICAgICB0bzogXCIvdG9kb3NcIixcbiAgICAgICAgICBjbGFzc05hbWU6IFwidGV4dC1mb3JlZ3JvdW5kLzYwIHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOnRleHQtZm9yZWdyb3VuZCBmb250LW1lZGl1bVwiLFxuICAgICAgICAgIGFjdGl2ZVByb3BzOiB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwidGV4dC1mb3JlZ3JvdW5kIHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOnRleHQtZm9yZWdyb3VuZCBmb250LW1lZGl1bVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjaGlsZHJlbjogXCJUb2RvIERlbW9cIlxuICAgICAgICB9XG4gICAgICApXG4gICAgXSB9KSxcbiAgICAvKiBAX19QVVJFX18gKi8ganN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZsZXggZmxleC0xIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBzcGFjZS14LTJcIiwgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBqc3goVGhlbWVUb2dnbGUsIHt9KSB9KVxuICBdIH0pIH0pO1xufVxuY29uc3QgYWxlcnRWYXJpYW50cyA9IGN2YShcbiAgXCJyZWxhdGl2ZSB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgcHgtNCBweS0zIHRleHQtc20gZ3JpZCBoYXMtWz5zdmddOmdyaWQtY29scy1bY2FsYyh2YXIoLS1zcGFjaW5nKSo0KV8xZnJdIGdyaWQtY29scy1bMF8xZnJdIGhhcy1bPnN2Z106Z2FwLXgtMyBnYXAteS0wLjUgaXRlbXMtc3RhcnQgWyY+c3ZnXTpzaXplLTQgWyY+c3ZnXTp0cmFuc2xhdGUteS0wLjUgWyY+c3ZnXTp0ZXh0LWN1cnJlbnRcIixcbiAge1xuICAgIHZhcmlhbnRzOiB7XG4gICAgICB2YXJpYW50OiB7XG4gICAgICAgIGRlZmF1bHQ6IFwiYmctY2FyZCB0ZXh0LWNhcmQtZm9yZWdyb3VuZFwiLFxuICAgICAgICBkZXN0cnVjdGl2ZTogXCJ0ZXh0LWRlc3RydWN0aXZlIGJnLWNhcmQgWyY+c3ZnXTp0ZXh0LWN1cnJlbnQgKjpkYXRhLVtzbG90PWFsZXJ0LWRlc2NyaXB0aW9uXTp0ZXh0LWRlc3RydWN0aXZlLzkwXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlZmF1bHRWYXJpYW50czoge1xuICAgICAgdmFyaWFudDogXCJkZWZhdWx0XCJcbiAgICB9XG4gIH1cbik7XG5mdW5jdGlvbiBBbGVydCh7XG4gIGNsYXNzTmFtZSxcbiAgdmFyaWFudCxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBqc3goXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBcImRhdGEtc2xvdFwiOiBcImFsZXJ0XCIsXG4gICAgICByb2xlOiBcImFsZXJ0XCIsXG4gICAgICBjbGFzc05hbWU6IGNuKGFsZXJ0VmFyaWFudHMoeyB2YXJpYW50IH0pLCBjbGFzc05hbWUpLFxuICAgICAgLi4ucHJvcHNcbiAgICB9XG4gICk7XG59XG5mdW5jdGlvbiBBbGVydFRpdGxlKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSB7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgXCJkYXRhLXNsb3RcIjogXCJhbGVydC10aXRsZVwiLFxuICAgICAgY2xhc3NOYW1lOiBjbihcbiAgICAgICAgXCJjb2wtc3RhcnQtMiBsaW5lLWNsYW1wLTEgbWluLWgtNCBmb250LW1lZGl1bSB0cmFja2luZy10aWdodFwiLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICksXG4gICAgICAuLi5wcm9wc1xuICAgIH1cbiAgKTtcbn1cbmZ1bmN0aW9uIEFsZXJ0RGVzY3JpcHRpb24oe1xuICBjbGFzc05hbWUsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgXCJkYXRhLXNsb3RcIjogXCJhbGVydC1kZXNjcmlwdGlvblwiLFxuICAgICAgY2xhc3NOYW1lOiBjbihcbiAgICAgICAgXCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgY29sLXN0YXJ0LTIgZ3JpZCBqdXN0aWZ5LWl0ZW1zLXN0YXJ0IGdhcC0xIHRleHQtc20gWyZfcF06bGVhZGluZy1yZWxheGVkXCIsXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKSxcbiAgICAgIC4uLnByb3BzXG4gICAgfVxuICApO1xufVxuZnVuY3Rpb24gZ2V0RXJyb3JUaXBzKCkge1xuICByZXR1cm4gW1xuICAgIFwiQ2hlY2sgeW91ciBNT05HT0RCX1VSSSBpbiB0aGUgLmVudiBmaWxlXCIsXG4gICAgXCJWZXJpZnkgeW91ciBNb25nb0RCIGNyZWRlbnRpYWxzICh1c2VybmFtZS9wYXNzd29yZClcIixcbiAgICBcIkVuc3VyZSB5b3VyIElQIGFkZHJlc3MgaXMgd2hpdGVsaXN0ZWQgaW4gTW9uZ29EQiBBdGxhc1wiLFxuICAgIFwiQ29uZmlybSBNb25nb0RCIHNlcnZlciBpcyBydW5uaW5nIGFuZCBhY2Nlc3NpYmxlXCJcbiAgXTtcbn1cbmNsYXNzIEVycm9yQm91bmRhcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBoYXNFcnJvcjogZmFsc2UsIGVycm9yOiBudWxsIH07XG4gIH1cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcikge1xuICAgIHJldHVybiB7IGhhc0Vycm9yOiB0cnVlLCBlcnJvciB9O1xuICB9XG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yLCBlcnJvckluZm8pIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3JCb3VuZGFyeSBjYXVnaHQgYW4gZXJyb3I6XCIsIGVycm9yLCBlcnJvckluZm8pO1xuICB9XG4gIHJlc2V0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNFcnJvcjogZmFsc2UsIGVycm9yOiBudWxsIH0pO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaGFzRXJyb3IgJiYgdGhpcy5zdGF0ZS5lcnJvcikge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmFsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZmFsbGJhY2sodGhpcy5zdGF0ZS5lcnJvciwgdGhpcy5yZXNldCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGpzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1bNjB2aF0gcHgtNCBtYXgtdy1sZyBteC1hdXRvXCIsIGNoaWxkcmVuOiAvKiBAX19QVVJFX18gKi8ganN4cyhBbGVydCwgeyB2YXJpYW50OiBcImRlc3RydWN0aXZlXCIsIGNsYXNzTmFtZTogXCJib3JkZXItMlwiLCBjaGlsZHJlbjogW1xuICAgICAgICAvKiBAX19QVVJFX18gKi8ganN4KEFsZXJ0Q2lyY2xlLCB7fSksXG4gICAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goQWxlcnRUaXRsZSwgeyBjaGlsZHJlbjogdGhpcy5zdGF0ZS5lcnJvci5tZXNzYWdlIH0pLFxuICAgICAgICAvKiBAX19QVVJFX18gKi8ganN4cyhBbGVydERlc2NyaXB0aW9uLCB7IGNoaWxkcmVuOiBbXG4gICAgICAgICAgLyogQF9fUFVSRV9fICovIGpzeChcInBcIiwgeyBjaGlsZHJlbjogXCJQbGVhc2UgY2hlY2sgdGhlIGZvbGxvd2luZzpcIiB9KSxcbiAgICAgICAgICAvKiBAX19QVVJFX18gKi8ganN4KFwidWxcIiwgeyBjbGFzc05hbWU6IFwibGlzdC1pbnNpZGUgbGlzdC1kaXNjIHRleHQtc21cIiwgY2hpbGRyZW46IGdldEVycm9yVGlwcygpLm1hcCgodGlwLCBpbmRleCkgPT4gLyogQF9fUFVSRV9fICovIGpzeChcImxpXCIsIHsgY2xhc3NOYW1lOiBcImxlYWRpbmctcmVsYXhlZFwiLCBjaGlsZHJlbjogdGlwIH0sIGluZGV4KSkgfSksXG4gICAgICAgICAgLyogQF9fUFVSRV9fICovIGpzeChCdXR0b24sIHsgb25DbGljazogdGhpcy5yZXNldCwgdmFyaWFudDogXCJkZWZhdWx0XCIsIGNsYXNzTmFtZTogXCJtdC00XCIsIGNoaWxkcmVuOiBcIlRyeSBhZ2FpblwiIH0pXG4gICAgICAgIF0gfSlcbiAgICAgIF0gfSkgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICB9XG59XG5jb25zdCBUYW5TdGFja1F1ZXJ5RGV2dG9vbHMgPSB7XG4gIG5hbWU6IFwiVGFuc3RhY2sgUXVlcnlcIixcbiAgcmVuZGVyOiAvKiBAX19QVVJFX18gKi8ganN4KFJlYWN0UXVlcnlEZXZ0b29sc1BhbmVsLCB7fSlcbn07XG5jb25zdCBhcHBDc3MgPSBcIi9hc3NldHMvc3R5bGVzLUNiNUhac0VuLmNzc1wiO1xuY29uc3QgVEhFTUVfQ09PS0lFX05BTUUgPSBcInVpLXRoZW1lXCI7XG5jb25zdCBnZXRTZXJ2ZXJUaGVtZV9jcmVhdGVTZXJ2ZXJGbl9oYW5kbGVyID0gY3JlYXRlU2VydmVyUnBjKFwic3JjX3NlcnZlcl90aGVtZV90cy0tZ2V0U2VydmVyVGhlbWVfY3JlYXRlU2VydmVyRm5faGFuZGxlclwiLCAob3B0cywgc2lnbmFsKSA9PiB7XG4gIHJldHVybiBnZXRTZXJ2ZXJUaGVtZS5fX2V4ZWN1dGVTZXJ2ZXIob3B0cywgc2lnbmFsKTtcbn0pO1xuY29uc3QgZ2V0U2VydmVyVGhlbWUgPSBjcmVhdGVTZXJ2ZXJGbigpLmhhbmRsZXIoZ2V0U2VydmVyVGhlbWVfY3JlYXRlU2VydmVyRm5faGFuZGxlciwgKCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IGdldENvb2tpZSQxKFRIRU1FX0NPT0tJRV9OQU1FKTtcbiAgaWYgKHRoZW1lID09PSBcImRhcmtcIiB8fCB0aGVtZSA9PT0gXCJsaWdodFwiIHx8IHRoZW1lID09PSBcInN5c3RlbVwiKSB7XG4gICAgcmV0dXJuIHRoZW1lO1xuICB9XG4gIHJldHVybiBcInN5c3RlbVwiO1xufSk7XG5jb25zdCBSb3V0ZSQyID0gY3JlYXRlUm9vdFJvdXRlV2l0aENvbnRleHQoKSh7XG4gIGJlZm9yZUxvYWQ6IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB0aGVtZSA9IGF3YWl0IGdldFNlcnZlclRoZW1lKCk7XG4gICAgcmV0dXJuIHsgdGhlbWUgfTtcbiAgfSxcbiAgaGVhZDogKCkgPT4gKHtcbiAgICBtZXRhOiBbXG4gICAgICB7XG4gICAgICAgIGNoYXJTZXQ6IFwidXRmLThcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJ2aWV3cG9ydFwiLFxuICAgICAgICBjb250ZW50OiBcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiY29sb3Itc2NoZW1lXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwibGlnaHQgZGFya1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJUYW5TdGFjayBTdGFydCBTdGFydGVyXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIGxpbmtzOiBbXG4gICAgICB7XG4gICAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICAgIGhyZWY6IGFwcENzc1xuICAgICAgfVxuICAgIF1cbiAgfSksXG4gIG5vdEZvdW5kQ29tcG9uZW50OiAoKSA9PiAvKiBAX19QVVJFX18gKi8ganN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLVs2MHZoXSBweC00IG1heC13LW1kIG14LWF1dG9cIiwgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBqc3hzKEFsZXJ0LCB7IGNsYXNzTmFtZTogXCJib3JkZXItMlwiLCBjaGlsZHJlbjogW1xuICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goQWxlcnRDaXJjbGUsIHsgY2xhc3NOYW1lOiBcImgtNSB3LTVcIiB9KSxcbiAgICAvKiBAX19QVVJFX18gKi8ganN4KEFsZXJ0VGl0bGUsIHsgY2xhc3NOYW1lOiBcInRleHQteGxcIiwgY2hpbGRyZW46IFwiNDA0IC0gUGFnZSBOb3QgRm91bmRcIiB9KSxcbiAgICAvKiBAX19QVVJFX18gKi8ganN4cyhBbGVydERlc2NyaXB0aW9uLCB7IGNsYXNzTmFtZTogXCJtdC0yXCIsIGNoaWxkcmVuOiBbXG4gICAgICAvKiBAX19QVVJFX18gKi8ganN4KFwicFwiLCB7IGNsYXNzTmFtZTogXCJtYi00XCIsIGNoaWxkcmVuOiBcIlRoZSBwYWdlIHlvdSdyZSBsb29raW5nIGZvciBkb2Vzbid0IGV4aXN0LlwiIH0pLFxuICAgICAgLyogQF9fUFVSRV9fICovIGpzeChCdXR0b24sIHsgYXNDaGlsZDogdHJ1ZSwgdmFyaWFudDogXCJkZWZhdWx0XCIsIGNsYXNzTmFtZTogXCJtdC0yXCIsIGNoaWxkcmVuOiAvKiBAX19QVVJFX18gKi8ganN4KFwiYVwiLCB7IGhyZWY6IFwiL1wiLCBjaGlsZHJlbjogXCJHbyBiYWNrIGhvbWVcIiB9KSB9KVxuICAgIF0gfSlcbiAgXSB9KSB9KSxcbiAgc2hlbGxDb21wb25lbnQ6IFJvb3REb2N1bWVudFxufSk7XG5mdW5jdGlvbiBSb290RG9jdW1lbnQoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IHsgdGhlbWUgfSA9IFJvdXRlJDIudXNlUm91dGVDb250ZXh0KCk7XG4gIGNvbnN0IGh0bWxDbGFzc05hbWUgPSB0aGVtZSA9PT0gXCJkYXJrXCIgPyBcImRhcmtcIiA6IHRoZW1lID09PSBcImxpZ2h0XCIgPyBcImxpZ2h0XCIgOiB2b2lkIDA7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4cyhcImh0bWxcIiwgeyBsYW5nOiBcImVuXCIsIGNsYXNzTmFtZTogaHRtbENsYXNzTmFtZSwgc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nOiB0cnVlLCBjaGlsZHJlbjogW1xuICAgIC8qIEBfX1BVUkVfXyAqLyBqc3hzKFwiaGVhZFwiLCB7IGNoaWxkcmVuOiBbXG4gICAgICAvKiBAX19QVVJFX18gKi8ganN4KEhlYWRDb250ZW50LCB7fSksXG4gICAgICAvKiBAX19QVVJFX18gKi8ganN4KFxuICAgICAgICBcInNjcmlwdFwiLFxuICAgICAgICB7XG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgICAgIF9faHRtbDogYChmdW5jdGlvbigpe2NvbnN0IGU9XCJ1aS10aGVtZVwiLHQ9XCI7IFwiK2RvY3VtZW50LmNvb2tpZSxuPXQuc3BsaXQoXCI7IFwiK2UrXCI9XCIpO2xldCBvPVwic3lzdGVtXCI7aWYoMj09PW4ubGVuZ3RoKXtjb25zdCBlPW4ucG9wKCkuc3BsaXQoXCI7XCIpLnNoaWZ0KCk7ZSYmKG89ZSl9Y29uc3QgYz1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7aWYoXCJkYXJrXCI9PT1vKWMuY2xhc3NMaXN0LmFkZChcImRhcmtcIik7ZWxzZSBpZihcImxpZ2h0XCI9PT1vKWMuY2xhc3NMaXN0LmFkZChcImxpZ2h0XCIpO2Vsc2UgaWYoXCJzeXN0ZW1cIj09PW8pe2NvbnN0IGU9d2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXM/XCJkYXJrXCI6XCJsaWdodFwiO2MuY2xhc3NMaXN0LmFkZChlKX19KSgpO2BcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIClcbiAgICBdIH0pLFxuICAgIC8qIEBfX1BVUkVfXyAqLyBqc3hzKFwiYm9keVwiLCB7IGNoaWxkcmVuOiBbXG4gICAgICAvKiBAX19QVVJFX18gKi8ganN4KFRoZW1lUHJvdmlkZXIsIHsgZGVmYXVsdFRoZW1lOiBcInN5c3RlbVwiLCBzdG9yYWdlS2V5OiBcInVpLXRoZW1lXCIsIGNoaWxkcmVuOiAvKiBAX19QVVJFX18gKi8ganN4cyhFcnJvckJvdW5kYXJ5LCB7IGNoaWxkcmVuOiBbXG4gICAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goSGVhZGVyLCB7fSksXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAvKiBAX19QVVJFX18gKi8ganN4KFxuICAgICAgICAgIFRhblN0YWNrRGV2dG9vbHMsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbS1yaWdodFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJUYW5zdGFjayBSb3V0ZXJcIixcbiAgICAgICAgICAgICAgICByZW5kZXI6IC8qIEBfX1BVUkVfXyAqLyBqc3goVGFuU3RhY2tSb3V0ZXJEZXZ0b29sc1BhbmVsLCB7fSlcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgVGFuU3RhY2tRdWVyeURldnRvb2xzXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICBdIH0pIH0pLFxuICAgICAgLyogQF9fUFVSRV9fICovIGpzeChTY3JpcHRzLCB7fSlcbiAgICBdIH0pXG4gIF0gfSk7XG59XG5jb25zdCBnZXRUb2Rvc19jcmVhdGVTZXJ2ZXJGbl9oYW5kbGVyID0gY3JlYXRlU2VydmVyUnBjKFwic3JjX3NlcnZlcl90b2Rvc190cy0tZ2V0VG9kb3NfY3JlYXRlU2VydmVyRm5faGFuZGxlclwiLCAob3B0cywgc2lnbmFsKSA9PiB7XG4gIHJldHVybiBnZXRUb2Rvcy5fX2V4ZWN1dGVTZXJ2ZXIob3B0cywgc2lnbmFsKTtcbn0pO1xuY29uc3QgZ2V0VG9kb3MgPSBjcmVhdGVTZXJ2ZXJGbigpLmhhbmRsZXIoZ2V0VG9kb3NfY3JlYXRlU2VydmVyRm5faGFuZGxlciwgYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjb2xsZWN0aW9uID0gYXdhaXQgZ2V0VG9kb3NDb2xsZWN0aW9uKCk7XG4gIGNvbnN0IHRvZG9zID0gYXdhaXQgY29sbGVjdGlvbi5maW5kKHt9KS5zb3J0KHtcbiAgICBjcmVhdGVkQXQ6IC0xXG4gIH0pLnRvQXJyYXkoKTtcbiAgcmV0dXJuIHRvZG9zLm1hcCh0b2RvVG9SZXNwb25zZSk7XG59KTtcbmNvbnN0IGNyZWF0ZVRvZG9fY3JlYXRlU2VydmVyRm5faGFuZGxlciA9IGNyZWF0ZVNlcnZlclJwYyhcInNyY19zZXJ2ZXJfdG9kb3NfdHMtLWNyZWF0ZVRvZG9fY3JlYXRlU2VydmVyRm5faGFuZGxlclwiLCAob3B0cywgc2lnbmFsKSA9PiB7XG4gIHJldHVybiBjcmVhdGVUb2RvLl9fZXhlY3V0ZVNlcnZlcihvcHRzLCBzaWduYWwpO1xufSk7XG5jb25zdCBjcmVhdGVUb2RvID0gY3JlYXRlU2VydmVyRm4oe1xuICBtZXRob2Q6IFwiUE9TVFwiXG59KS5pbnB1dFZhbGlkYXRvcihDcmVhdGVUb2RvU2NoZW1hKS5oYW5kbGVyKGNyZWF0ZVRvZG9fY3JlYXRlU2VydmVyRm5faGFuZGxlciwgYXN5bmMgKHtcbiAgZGF0YVxufSkgPT4ge1xuICBjb25zdCBjb2xsZWN0aW9uID0gYXdhaXQgZ2V0VG9kb3NDb2xsZWN0aW9uKCk7XG4gIGNvbnN0IG5vdyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZSgpO1xuICBjb25zdCBuZXdUb2RvID0ge1xuICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgY3JlYXRlZEF0OiBub3csXG4gICAgdXBkYXRlZEF0OiBub3dcbiAgfTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29sbGVjdGlvbi5pbnNlcnRPbmUobmV3VG9kbyk7XG4gIGNvbnN0IGNyZWF0ZWRUb2RvID0ge1xuICAgIGlkOiByZXN1bHQuaW5zZXJ0ZWRJZC50b1N0cmluZygpLFxuICAgIHRpdGxlOiBuZXdUb2RvLnRpdGxlLFxuICAgIGNvbXBsZXRlZDogbmV3VG9kby5jb21wbGV0ZWQsXG4gICAgY3JlYXRlZEF0OiBuZXdUb2RvLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgIHVwZGF0ZWRBdDogbmV3VG9kby51cGRhdGVkQXQudG9JU09TdHJpbmcoKVxuICB9O1xuICByZXR1cm4gY3JlYXRlZFRvZG87XG59KTtcbmNvbnN0IHVwZGF0ZVRvZG9fY3JlYXRlU2VydmVyRm5faGFuZGxlciA9IGNyZWF0ZVNlcnZlclJwYyhcInNyY19zZXJ2ZXJfdG9kb3NfdHMtLXVwZGF0ZVRvZG9fY3JlYXRlU2VydmVyRm5faGFuZGxlclwiLCAob3B0cywgc2lnbmFsKSA9PiB7XG4gIHJldHVybiB1cGRhdGVUb2RvLl9fZXhlY3V0ZVNlcnZlcihvcHRzLCBzaWduYWwpO1xufSk7XG5jb25zdCB1cGRhdGVUb2RvID0gY3JlYXRlU2VydmVyRm4oe1xuICBtZXRob2Q6IFwiUE9TVFwiXG59KS5pbnB1dFZhbGlkYXRvcihVcGRhdGVUb2RvU2NoZW1hKS5oYW5kbGVyKHVwZGF0ZVRvZG9fY3JlYXRlU2VydmVyRm5faGFuZGxlciwgYXN5bmMgKHtcbiAgZGF0YVxufSkgPT4ge1xuICBjb25zdCBjb2xsZWN0aW9uID0gYXdhaXQgZ2V0VG9kb3NDb2xsZWN0aW9uKCk7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICAuLi51cGRhdGVzXG4gIH0gPSBkYXRhO1xuICBpZiAoIXVwZGF0ZXMudGl0bGUgJiYgdXBkYXRlcy5jb21wbGV0ZWQgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk11c3QgcHJvdmlkZSBhdCBsZWFzdCBvbmUgZmllbGQgdG8gdXBkYXRlICh0aXRsZSBvciBjb21wbGV0ZWQpXCIpO1xuICB9XG4gIGNvbnN0IHVwZGF0ZURhdGEgPSB7XG4gICAgdXBkYXRlZEF0OiAvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoKVxuICB9O1xuICBpZiAodXBkYXRlcy50aXRsZSAhPT0gdm9pZCAwKSB7XG4gICAgdXBkYXRlRGF0YS50aXRsZSA9IHVwZGF0ZXMudGl0bGU7XG4gIH1cbiAgaWYgKHVwZGF0ZXMuY29tcGxldGVkICE9PSB2b2lkIDApIHtcbiAgICB1cGRhdGVEYXRhLmNvbXBsZXRlZCA9IHVwZGF0ZXMuY29tcGxldGVkO1xuICB9XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbGxlY3Rpb24uZmluZE9uZUFuZFVwZGF0ZSh7XG4gICAgX2lkOiBuZXcgT2JqZWN0SWQoaWQpXG4gIH0sIHtcbiAgICAkc2V0OiB1cGRhdGVEYXRhXG4gIH0sIHtcbiAgICByZXR1cm5Eb2N1bWVudDogXCJhZnRlclwiXG4gIH0pO1xuICBpZiAoIXJlc3VsdCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVG9kbyB3aXRoIGlkICR7aWR9IG5vdCBmb3VuZGApO1xuICB9XG4gIHJldHVybiB0b2RvVG9SZXNwb25zZShyZXN1bHQpO1xufSk7XG5jb25zdCBkZWxldGVUb2RvX2NyZWF0ZVNlcnZlckZuX2hhbmRsZXIgPSBjcmVhdGVTZXJ2ZXJScGMoXCJzcmNfc2VydmVyX3RvZG9zX3RzLS1kZWxldGVUb2RvX2NyZWF0ZVNlcnZlckZuX2hhbmRsZXJcIiwgKG9wdHMsIHNpZ25hbCkgPT4ge1xuICByZXR1cm4gZGVsZXRlVG9kby5fX2V4ZWN1dGVTZXJ2ZXIob3B0cywgc2lnbmFsKTtcbn0pO1xuY29uc3QgZGVsZXRlVG9kbyA9IGNyZWF0ZVNlcnZlckZuKHtcbiAgbWV0aG9kOiBcIlBPU1RcIlxufSkuaW5wdXRWYWxpZGF0b3IoRGVsZXRlVG9kb1NjaGVtYSkuaGFuZGxlcihkZWxldGVUb2RvX2NyZWF0ZVNlcnZlckZuX2hhbmRsZXIsIGFzeW5jICh7XG4gIGRhdGFcbn0pID0+IHtcbiAgY29uc3QgY29sbGVjdGlvbiA9IGF3YWl0IGdldFRvZG9zQ29sbGVjdGlvbigpO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb2xsZWN0aW9uLmRlbGV0ZU9uZSh7XG4gICAgX2lkOiBuZXcgT2JqZWN0SWQoZGF0YS5pZClcbiAgfSk7XG4gIGlmIChyZXN1bHQuZGVsZXRlZENvdW50ID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBUb2RvIHdpdGggaWQgJHtkYXRhLmlkfSBub3QgZm91bmRgKTtcbiAgfVxuICByZXR1cm47XG59KTtcbmNvbnN0IHRvZG9RdWVyaWVzID0ge1xuICAvKipcbiAgICogUXVlcnkgY29uZmlndXJhdGlvbiBmb3IgZmV0Y2hpbmcgYWxsIHRvZG9zXG4gICAqIFVzZXMgc2VydmVyIGZ1bmN0aW9uIGZvciB0eXBlLXNhZmUgZGF0YSBmZXRjaGluZ1xuICAgKi9cbiAgbGlzdDogKCkgPT4gcXVlcnlPcHRpb25zKHtcbiAgICBxdWVyeUtleTogW1widG9kb3NcIiwgXCJsaXN0XCJdLFxuICAgIHF1ZXJ5Rm46ICgpID0+IGdldFRvZG9zKClcbiAgICAvLyBzdGFsZVRpbWUgYW5kIGdjVGltZSBhcmUgY29uZmlndXJlZCBnbG9iYWxseSBpbiByb290LXByb3ZpZGVyLnRzeFxuICAgIC8vIE92ZXJyaWRlIGhlcmUgb25seSBpZiB0aGlzIHF1ZXJ5IG5lZWRzIGRpZmZlcmVudCBzZXR0aW5nc1xuICB9KVxufTtcbmNvbnN0ICQkc3BsaXRDb21wb25lbnRJbXBvcnRlciQxID0gKCkgPT4gaW1wb3J0KFwiLi90b2Rvcy0weXdLY2JXVC5qc1wiKTtcbmNvbnN0IFJvdXRlJDEgPSBjcmVhdGVGaWxlUm91dGUoXCIvdG9kb3NcIikoe1xuICAvLyBQcmVmZXRjaCB0b2RvcyBkYXRhIG9uIHRoZSBzZXJ2ZXIgZm9yIGZhc3RlciBpbml0aWFsIGxvYWRcbiAgbG9hZGVyOiAoe1xuICAgIGNvbnRleHRcbiAgfSkgPT4gY29udGV4dC5xdWVyeUNsaWVudC5lbnN1cmVRdWVyeURhdGEodG9kb1F1ZXJpZXMubGlzdCgpKSxcbiAgY29tcG9uZW50OiBsYXp5Um91dGVDb21wb25lbnQoJCRzcGxpdENvbXBvbmVudEltcG9ydGVyJDEsIFwiY29tcG9uZW50XCIpXG59KTtcbmNvbnN0ICQkc3BsaXRDb21wb25lbnRJbXBvcnRlciA9ICgpID0+IGltcG9ydChcIi4vaW5kZXgtQ1JUeEJyeXEuanNcIik7XG5jb25zdCBSb3V0ZSA9IGNyZWF0ZUZpbGVSb3V0ZShcIi9cIikoe1xuICBjb21wb25lbnQ6IGxhenlSb3V0ZUNvbXBvbmVudCgkJHNwbGl0Q29tcG9uZW50SW1wb3J0ZXIsIFwiY29tcG9uZW50XCIpXG59KTtcbmNvbnN0IFRvZG9zUm91dGUgPSBSb3V0ZSQxLnVwZGF0ZSh7XG4gIGlkOiBcIi90b2Rvc1wiLFxuICBwYXRoOiBcIi90b2Rvc1wiLFxuICBnZXRQYXJlbnRSb3V0ZTogKCkgPT4gUm91dGUkMlxufSk7XG5jb25zdCBJbmRleFJvdXRlID0gUm91dGUudXBkYXRlKHtcbiAgaWQ6IFwiL1wiLFxuICBwYXRoOiBcIi9cIixcbiAgZ2V0UGFyZW50Um91dGU6ICgpID0+IFJvdXRlJDJcbn0pO1xuY29uc3Qgcm9vdFJvdXRlQ2hpbGRyZW4gPSB7XG4gIEluZGV4Um91dGUsXG4gIFRvZG9zUm91dGVcbn07XG5jb25zdCByb3V0ZVRyZWUgPSBSb3V0ZSQyLl9hZGRGaWxlQ2hpbGRyZW4ocm9vdFJvdXRlQ2hpbGRyZW4pLl9hZGRGaWxlVHlwZXMoKTtcbmNvbnN0IGdldFJvdXRlciA9ICgpID0+IHtcbiAgY29uc3QgcnFDb250ZXh0ID0gZ2V0Q29udGV4dCgpO1xuICBjb25zdCByb3V0ZXIyID0gY3JlYXRlUm91dGVyKHtcbiAgICByb3V0ZVRyZWUsXG4gICAgY29udGV4dDogeyAuLi5ycUNvbnRleHQgfSxcbiAgICBkZWZhdWx0UHJlbG9hZDogXCJpbnRlbnRcIixcbiAgICBXcmFwOiAocHJvcHMpID0+IHtcbiAgICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KFByb3ZpZGVyLCB7IC4uLnJxQ29udGV4dCwgY2hpbGRyZW46IHByb3BzLmNoaWxkcmVuIH0pO1xuICAgIH1cbiAgfSk7XG4gIHNldHVwUm91dGVyU3NyUXVlcnlJbnRlZ3JhdGlvbih7IHJvdXRlcjogcm91dGVyMiwgcXVlcnlDbGllbnQ6IHJxQ29udGV4dC5xdWVyeUNsaWVudCB9KTtcbiAgcmV0dXJuIHJvdXRlcjI7XG59O1xuY29uc3Qgcm91dGVyID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5mcmVlemUoLyogQF9fUFVSRV9fICovIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgZ2V0Um91dGVyXG59LCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xuZXhwb3J0IHtcbiAgQnV0dG9uIGFzIEIsXG4gIGNuIGFzIGEsXG4gIGNyZWF0ZVRvZG8gYXMgYyxcbiAgZGVsZXRlVG9kbyBhcyBkLFxuICByb3V0ZXIgYXMgcixcbiAgdG9kb1F1ZXJpZXMgYXMgdCxcbiAgdXBkYXRlVG9kbyBhcyB1XG59O1xuIiwgImNvbnN0IHN0YXJ0SW5zdGFuY2UgPSB2b2lkIDA7XG5leHBvcnQge1xuICBzdGFydEluc3RhbmNlXG59O1xuIiwgImltcG9ydCB7IEFzeW5jTG9jYWxTdG9yYWdlIH0gZnJvbSBcIm5vZGU6YXN5bmNfaG9va3NcIjtcbmltcG9ydCB7IGpzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgZGVmaW5lSGFuZGxlckNhbGxiYWNrLCByZW5kZXJSb3V0ZXJUb1N0cmVhbSB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3Qtcm91dGVyL3Nzci9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJvdXRlclByb3ZpZGVyIH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1yb3V0ZXJcIjtcbmZ1bmN0aW9uIFN0YXJ0U2VydmVyKHByb3BzKSB7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KFJvdXRlclByb3ZpZGVyLCB7IHJvdXRlcjogcHJvcHMucm91dGVyIH0pO1xufVxuY29uc3QgZGVmYXVsdFN0cmVhbUhhbmRsZXIgPSBkZWZpbmVIYW5kbGVyQ2FsbGJhY2soXG4gICh7IHJlcXVlc3QsIHJvdXRlciwgcmVzcG9uc2VIZWFkZXJzIH0pID0+IHJlbmRlclJvdXRlclRvU3RyZWFtKHtcbiAgICByZXF1ZXN0LFxuICAgIHJvdXRlcixcbiAgICByZXNwb25zZUhlYWRlcnMsXG4gICAgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBqc3goU3RhcnRTZXJ2ZXIsIHsgcm91dGVyIH0pXG4gIH0pXG4pO1xuY29uc3Qgc3RhdGVJbmRleEtleSA9IFwiX19UU1JfaW5kZXhcIjtcbmZ1bmN0aW9uIGNyZWF0ZUhpc3Rvcnkob3B0cykge1xuICBsZXQgbG9jYXRpb24gPSBvcHRzLmdldExvY2F0aW9uKCk7XG4gIGNvbnN0IHN1YnNjcmliZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgY29uc3Qgbm90aWZ5ID0gKGFjdGlvbikgPT4ge1xuICAgIGxvY2F0aW9uID0gb3B0cy5nZXRMb2NhdGlvbigpO1xuICAgIHN1YnNjcmliZXJzLmZvckVhY2goKHN1YnNjcmliZXIpID0+IHN1YnNjcmliZXIoeyBsb2NhdGlvbiwgYWN0aW9uIH0pKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlSW5kZXhDaGFuZ2UgPSAoYWN0aW9uKSA9PiB7XG4gICAgaWYgKG9wdHMubm90aWZ5T25JbmRleENoYW5nZSA/PyB0cnVlKSBub3RpZnkoYWN0aW9uKTtcbiAgICBlbHNlIGxvY2F0aW9uID0gb3B0cy5nZXRMb2NhdGlvbigpO1xuICB9O1xuICBjb25zdCB0cnlOYXZpZ2F0aW9uID0gYXN5bmMgKHtcbiAgICB0YXNrLFxuICAgIG5hdmlnYXRlT3B0cyxcbiAgICAuLi5hY3Rpb25JbmZvXG4gIH0pID0+IHtcbiAgICBjb25zdCBpZ25vcmVCbG9ja2VyID0gbmF2aWdhdGVPcHRzPy5pZ25vcmVCbG9ja2VyID8/IGZhbHNlO1xuICAgIGlmIChpZ25vcmVCbG9ja2VyKSB7XG4gICAgICB0YXNrKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGJsb2NrZXJzID0gb3B0cy5nZXRCbG9ja2Vycz8uKCkgPz8gW107XG4gICAgY29uc3QgaXNQdXNoT3JSZXBsYWNlID0gYWN0aW9uSW5mby50eXBlID09PSBcIlBVU0hcIiB8fCBhY3Rpb25JbmZvLnR5cGUgPT09IFwiUkVQTEFDRVwiO1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgYmxvY2tlcnMubGVuZ3RoICYmIGlzUHVzaE9yUmVwbGFjZSkge1xuICAgICAgZm9yIChjb25zdCBibG9ja2VyIG9mIGJsb2NrZXJzKSB7XG4gICAgICAgIGNvbnN0IG5leHRMb2NhdGlvbiA9IHBhcnNlSHJlZihhY3Rpb25JbmZvLnBhdGgsIGFjdGlvbkluZm8uc3RhdGUpO1xuICAgICAgICBjb25zdCBpc0Jsb2NrZWQgPSBhd2FpdCBibG9ja2VyLmJsb2NrZXJGbih7XG4gICAgICAgICAgY3VycmVudExvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgICBuZXh0TG9jYXRpb24sXG4gICAgICAgICAgYWN0aW9uOiBhY3Rpb25JbmZvLnR5cGVcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpc0Jsb2NrZWQpIHtcbiAgICAgICAgICBvcHRzLm9uQmxvY2tlZD8uKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRhc2soKTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBnZXQgbG9jYXRpb24oKSB7XG4gICAgICByZXR1cm4gbG9jYXRpb247XG4gICAgfSxcbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgcmV0dXJuIG9wdHMuZ2V0TGVuZ3RoKCk7XG4gICAgfSxcbiAgICBzdWJzY3JpYmVycyxcbiAgICBzdWJzY3JpYmU6IChjYikgPT4ge1xuICAgICAgc3Vic2NyaWJlcnMuYWRkKGNiKTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHN1YnNjcmliZXJzLmRlbGV0ZShjYik7XG4gICAgICB9O1xuICAgIH0sXG4gICAgcHVzaDogKHBhdGgsIHN0YXRlLCBuYXZpZ2F0ZU9wdHMpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IGxvY2F0aW9uLnN0YXRlW3N0YXRlSW5kZXhLZXldO1xuICAgICAgc3RhdGUgPSBhc3NpZ25LZXlBbmRJbmRleChjdXJyZW50SW5kZXggKyAxLCBzdGF0ZSk7XG4gICAgICB0cnlOYXZpZ2F0aW9uKHtcbiAgICAgICAgdGFzazogKCkgPT4ge1xuICAgICAgICAgIG9wdHMucHVzaFN0YXRlKHBhdGgsIHN0YXRlKTtcbiAgICAgICAgICBub3RpZnkoeyB0eXBlOiBcIlBVU0hcIiB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbmF2aWdhdGVPcHRzLFxuICAgICAgICB0eXBlOiBcIlBVU0hcIixcbiAgICAgICAgcGF0aCxcbiAgICAgICAgc3RhdGVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcmVwbGFjZTogKHBhdGgsIHN0YXRlLCBuYXZpZ2F0ZU9wdHMpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IGxvY2F0aW9uLnN0YXRlW3N0YXRlSW5kZXhLZXldO1xuICAgICAgc3RhdGUgPSBhc3NpZ25LZXlBbmRJbmRleChjdXJyZW50SW5kZXgsIHN0YXRlKTtcbiAgICAgIHRyeU5hdmlnYXRpb24oe1xuICAgICAgICB0YXNrOiAoKSA9PiB7XG4gICAgICAgICAgb3B0cy5yZXBsYWNlU3RhdGUocGF0aCwgc3RhdGUpO1xuICAgICAgICAgIG5vdGlmeSh7IHR5cGU6IFwiUkVQTEFDRVwiIH0pO1xuICAgICAgICB9LFxuICAgICAgICBuYXZpZ2F0ZU9wdHMsXG4gICAgICAgIHR5cGU6IFwiUkVQTEFDRVwiLFxuICAgICAgICBwYXRoLFxuICAgICAgICBzdGF0ZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBnbzogKGluZGV4LCBuYXZpZ2F0ZU9wdHMpID0+IHtcbiAgICAgIHRyeU5hdmlnYXRpb24oe1xuICAgICAgICB0YXNrOiAoKSA9PiB7XG4gICAgICAgICAgb3B0cy5nbyhpbmRleCk7XG4gICAgICAgICAgaGFuZGxlSW5kZXhDaGFuZ2UoeyB0eXBlOiBcIkdPXCIsIGluZGV4IH0pO1xuICAgICAgICB9LFxuICAgICAgICBuYXZpZ2F0ZU9wdHMsXG4gICAgICAgIHR5cGU6IFwiR09cIlxuICAgICAgfSk7XG4gICAgfSxcbiAgICBiYWNrOiAobmF2aWdhdGVPcHRzKSA9PiB7XG4gICAgICB0cnlOYXZpZ2F0aW9uKHtcbiAgICAgICAgdGFzazogKCkgPT4ge1xuICAgICAgICAgIG9wdHMuYmFjayhuYXZpZ2F0ZU9wdHM/Lmlnbm9yZUJsb2NrZXIgPz8gZmFsc2UpO1xuICAgICAgICAgIGhhbmRsZUluZGV4Q2hhbmdlKHsgdHlwZTogXCJCQUNLXCIgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG5hdmlnYXRlT3B0cyxcbiAgICAgICAgdHlwZTogXCJCQUNLXCJcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZm9yd2FyZDogKG5hdmlnYXRlT3B0cykgPT4ge1xuICAgICAgdHJ5TmF2aWdhdGlvbih7XG4gICAgICAgIHRhc2s6ICgpID0+IHtcbiAgICAgICAgICBvcHRzLmZvcndhcmQobmF2aWdhdGVPcHRzPy5pZ25vcmVCbG9ja2VyID8/IGZhbHNlKTtcbiAgICAgICAgICBoYW5kbGVJbmRleENoYW5nZSh7IHR5cGU6IFwiRk9SV0FSRFwiIH0pO1xuICAgICAgICB9LFxuICAgICAgICBuYXZpZ2F0ZU9wdHMsXG4gICAgICAgIHR5cGU6IFwiRk9SV0FSRFwiXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGNhbkdvQmFjazogKCkgPT4gbG9jYXRpb24uc3RhdGVbc3RhdGVJbmRleEtleV0gIT09IDAsXG4gICAgY3JlYXRlSHJlZjogKHN0cikgPT4gb3B0cy5jcmVhdGVIcmVmKHN0ciksXG4gICAgYmxvY2s6IChibG9ja2VyKSA9PiB7XG4gICAgICBpZiAoIW9wdHMuc2V0QmxvY2tlcnMpIHJldHVybiAoKSA9PiB7XG4gICAgICB9O1xuICAgICAgY29uc3QgYmxvY2tlcnMgPSBvcHRzLmdldEJsb2NrZXJzPy4oKSA/PyBbXTtcbiAgICAgIG9wdHMuc2V0QmxvY2tlcnMoWy4uLmJsb2NrZXJzLCBibG9ja2VyXSk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjb25zdCBibG9ja2VyczIgPSBvcHRzLmdldEJsb2NrZXJzPy4oKSA/PyBbXTtcbiAgICAgICAgb3B0cy5zZXRCbG9ja2Vycz8uKGJsb2NrZXJzMi5maWx0ZXIoKGIpID0+IGIgIT09IGJsb2NrZXIpKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICBmbHVzaDogKCkgPT4gb3B0cy5mbHVzaD8uKCksXG4gICAgZGVzdHJveTogKCkgPT4gb3B0cy5kZXN0cm95Py4oKSxcbiAgICBub3RpZnlcbiAgfTtcbn1cbmZ1bmN0aW9uIGFzc2lnbktleUFuZEluZGV4KGluZGV4LCBzdGF0ZSkge1xuICBpZiAoIXN0YXRlKSB7XG4gICAgc3RhdGUgPSB7fTtcbiAgfVxuICBjb25zdCBrZXkgPSBjcmVhdGVSYW5kb21LZXkoKTtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBrZXksXG4gICAgLy8gVE9ETzogUmVtb3ZlIGluIHYyIC0gdXNlIF9fVFNSX2tleSBpbnN0ZWFkXG4gICAgX19UU1Jfa2V5OiBrZXksXG4gICAgW3N0YXRlSW5kZXhLZXldOiBpbmRleFxuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlTWVtb3J5SGlzdG9yeShvcHRzID0ge1xuICBpbml0aWFsRW50cmllczogW1wiL1wiXVxufSkge1xuICBjb25zdCBlbnRyaWVzID0gb3B0cy5pbml0aWFsRW50cmllcztcbiAgbGV0IGluZGV4ID0gb3B0cy5pbml0aWFsSW5kZXggPyBNYXRoLm1pbihNYXRoLm1heChvcHRzLmluaXRpYWxJbmRleCwgMCksIGVudHJpZXMubGVuZ3RoIC0gMSkgOiBlbnRyaWVzLmxlbmd0aCAtIDE7XG4gIGNvbnN0IHN0YXRlcyA9IGVudHJpZXMubWFwKFxuICAgIChfZW50cnksIGluZGV4MikgPT4gYXNzaWduS2V5QW5kSW5kZXgoaW5kZXgyLCB2b2lkIDApXG4gICk7XG4gIGNvbnN0IGdldExvY2F0aW9uID0gKCkgPT4gcGFyc2VIcmVmKGVudHJpZXNbaW5kZXhdLCBzdGF0ZXNbaW5kZXhdKTtcbiAgcmV0dXJuIGNyZWF0ZUhpc3Rvcnkoe1xuICAgIGdldExvY2F0aW9uLFxuICAgIGdldExlbmd0aDogKCkgPT4gZW50cmllcy5sZW5ndGgsXG4gICAgcHVzaFN0YXRlOiAocGF0aCwgc3RhdGUpID0+IHtcbiAgICAgIGlmIChpbmRleCA8IGVudHJpZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICBlbnRyaWVzLnNwbGljZShpbmRleCArIDEpO1xuICAgICAgICBzdGF0ZXMuc3BsaWNlKGluZGV4ICsgMSk7XG4gICAgICB9XG4gICAgICBzdGF0ZXMucHVzaChzdGF0ZSk7XG4gICAgICBlbnRyaWVzLnB1c2gocGF0aCk7XG4gICAgICBpbmRleCA9IE1hdGgubWF4KGVudHJpZXMubGVuZ3RoIC0gMSwgMCk7XG4gICAgfSxcbiAgICByZXBsYWNlU3RhdGU6IChwYXRoLCBzdGF0ZSkgPT4ge1xuICAgICAgc3RhdGVzW2luZGV4XSA9IHN0YXRlO1xuICAgICAgZW50cmllc1tpbmRleF0gPSBwYXRoO1xuICAgIH0sXG4gICAgYmFjazogKCkgPT4ge1xuICAgICAgaW5kZXggPSBNYXRoLm1heChpbmRleCAtIDEsIDApO1xuICAgIH0sXG4gICAgZm9yd2FyZDogKCkgPT4ge1xuICAgICAgaW5kZXggPSBNYXRoLm1pbihpbmRleCArIDEsIGVudHJpZXMubGVuZ3RoIC0gMSk7XG4gICAgfSxcbiAgICBnbzogKG4pID0+IHtcbiAgICAgIGluZGV4ID0gTWF0aC5taW4oTWF0aC5tYXgoaW5kZXggKyBuLCAwKSwgZW50cmllcy5sZW5ndGggLSAxKTtcbiAgICB9LFxuICAgIGNyZWF0ZUhyZWY6IChwYXRoKSA9PiBwYXRoXG4gIH0pO1xufVxuZnVuY3Rpb24gcGFyc2VIcmVmKGhyZWYsIHN0YXRlKSB7XG4gIGNvbnN0IGhhc2hJbmRleCA9IGhyZWYuaW5kZXhPZihcIiNcIik7XG4gIGNvbnN0IHNlYXJjaEluZGV4ID0gaHJlZi5pbmRleE9mKFwiP1wiKTtcbiAgY29uc3QgYWRkZWRLZXkgPSBjcmVhdGVSYW5kb21LZXkoKTtcbiAgcmV0dXJuIHtcbiAgICBocmVmLFxuICAgIHBhdGhuYW1lOiBocmVmLnN1YnN0cmluZyhcbiAgICAgIDAsXG4gICAgICBoYXNoSW5kZXggPiAwID8gc2VhcmNoSW5kZXggPiAwID8gTWF0aC5taW4oaGFzaEluZGV4LCBzZWFyY2hJbmRleCkgOiBoYXNoSW5kZXggOiBzZWFyY2hJbmRleCA+IDAgPyBzZWFyY2hJbmRleCA6IGhyZWYubGVuZ3RoXG4gICAgKSxcbiAgICBoYXNoOiBoYXNoSW5kZXggPiAtMSA/IGhyZWYuc3Vic3RyaW5nKGhhc2hJbmRleCkgOiBcIlwiLFxuICAgIHNlYXJjaDogc2VhcmNoSW5kZXggPiAtMSA/IGhyZWYuc2xpY2Uoc2VhcmNoSW5kZXgsIGhhc2hJbmRleCA9PT0gLTEgPyB2b2lkIDAgOiBoYXNoSW5kZXgpIDogXCJcIixcbiAgICBzdGF0ZTogc3RhdGUgfHwgeyBbc3RhdGVJbmRleEtleV06IDAsIGtleTogYWRkZWRLZXksIF9fVFNSX2tleTogYWRkZWRLZXkgfVxuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlUmFuZG9tS2V5KCkge1xuICByZXR1cm4gKE1hdGgucmFuZG9tKCkgKyAxKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpO1xufVxuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSBcInN0cmluZ1wiKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImFyZ3VtZW50IHN0ciBtdXN0IGJlIGEgc3RyaW5nXCIpO1xuICB9XG4gIGNvbnN0IG9iaiA9IHt9O1xuICBjb25zdCBvcHQgPSB7fTtcbiAgY29uc3QgZGVjID0gb3B0LmRlY29kZSB8fCBkZWNvZGU7XG4gIGxldCBpbmRleCA9IDA7XG4gIHdoaWxlIChpbmRleCA8IHN0ci5sZW5ndGgpIHtcbiAgICBjb25zdCBlcUlkeCA9IHN0ci5pbmRleE9mKFwiPVwiLCBpbmRleCk7XG4gICAgaWYgKGVxSWR4ID09PSAtMSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGxldCBlbmRJZHggPSBzdHIuaW5kZXhPZihcIjtcIiwgaW5kZXgpO1xuICAgIGlmIChlbmRJZHggPT09IC0xKSB7XG4gICAgICBlbmRJZHggPSBzdHIubGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAoZW5kSWR4IDwgZXFJZHgpIHtcbiAgICAgIGluZGV4ID0gc3RyLmxhc3RJbmRleE9mKFwiO1wiLCBlcUlkeCAtIDEpICsgMTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBjb25zdCBrZXkgPSBzdHIuc2xpY2UoaW5kZXgsIGVxSWR4KS50cmltKCk7XG4gICAgaWYgKG9wdD8uZmlsdGVyICYmICFvcHQ/LmZpbHRlcihrZXkpKSB7XG4gICAgICBpbmRleCA9IGVuZElkeCArIDE7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKHZvaWQgMCA9PT0gb2JqW2tleV0pIHtcbiAgICAgIGxldCB2YWwgPSBzdHIuc2xpY2UoZXFJZHggKyAxLCBlbmRJZHgpLnRyaW0oKTtcbiAgICAgIGlmICh2YWwuY29kZVBvaW50QXQoMCkgPT09IDM0KSB7XG4gICAgICAgIHZhbCA9IHZhbC5zbGljZSgxLCAtMSk7XG4gICAgICB9XG4gICAgICBvYmpba2V5XSA9IHRyeURlY29kZSh2YWwsIGRlYyk7XG4gICAgfVxuICAgIGluZGV4ID0gZW5kSWR4ICsgMTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gZGVjb2RlKHN0cikge1xuICByZXR1cm4gc3RyLmluY2x1ZGVzKFwiJVwiKSA/IGRlY29kZVVSSUNvbXBvbmVudChzdHIpIDogc3RyO1xufVxuZnVuY3Rpb24gdHJ5RGVjb2RlKHN0ciwgZGVjb2RlMikge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGUyKHN0cik7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cbmZ1bmN0aW9uIHNwbGl0U2V0Q29va2llU3RyaW5nKGNvb2tpZXNTdHJpbmcpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY29va2llc1N0cmluZykpIHtcbiAgICByZXR1cm4gY29va2llc1N0cmluZy5mbGF0TWFwKChjKSA9PiBzcGxpdFNldENvb2tpZVN0cmluZyhjKSk7XG4gIH1cbiAgaWYgKHR5cGVvZiBjb29raWVzU3RyaW5nICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGNvbnN0IGNvb2tpZXNTdHJpbmdzID0gW107XG4gIGxldCBwb3MgPSAwO1xuICBsZXQgc3RhcnQ7XG4gIGxldCBjaDtcbiAgbGV0IGxhc3RDb21tYTtcbiAgbGV0IG5leHRTdGFydDtcbiAgbGV0IGNvb2tpZXNTZXBhcmF0b3JGb3VuZDtcbiAgY29uc3Qgc2tpcFdoaXRlc3BhY2UgPSAoKSA9PiB7XG4gICAgd2hpbGUgKHBvcyA8IGNvb2tpZXNTdHJpbmcubGVuZ3RoICYmIC9cXHMvLnRlc3QoY29va2llc1N0cmluZy5jaGFyQXQocG9zKSkpIHtcbiAgICAgIHBvcyArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gcG9zIDwgY29va2llc1N0cmluZy5sZW5ndGg7XG4gIH07XG4gIGNvbnN0IG5vdFNwZWNpYWxDaGFyID0gKCkgPT4ge1xuICAgIGNoID0gY29va2llc1N0cmluZy5jaGFyQXQocG9zKTtcbiAgICByZXR1cm4gY2ggIT09IFwiPVwiICYmIGNoICE9PSBcIjtcIiAmJiBjaCAhPT0gXCIsXCI7XG4gIH07XG4gIHdoaWxlIChwb3MgPCBjb29raWVzU3RyaW5nLmxlbmd0aCkge1xuICAgIHN0YXJ0ID0gcG9zO1xuICAgIGNvb2tpZXNTZXBhcmF0b3JGb3VuZCA9IGZhbHNlO1xuICAgIHdoaWxlIChza2lwV2hpdGVzcGFjZSgpKSB7XG4gICAgICBjaCA9IGNvb2tpZXNTdHJpbmcuY2hhckF0KHBvcyk7XG4gICAgICBpZiAoY2ggPT09IFwiLFwiKSB7XG4gICAgICAgIGxhc3RDb21tYSA9IHBvcztcbiAgICAgICAgcG9zICs9IDE7XG4gICAgICAgIHNraXBXaGl0ZXNwYWNlKCk7XG4gICAgICAgIG5leHRTdGFydCA9IHBvcztcbiAgICAgICAgd2hpbGUgKHBvcyA8IGNvb2tpZXNTdHJpbmcubGVuZ3RoICYmIG5vdFNwZWNpYWxDaGFyKCkpIHtcbiAgICAgICAgICBwb3MgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zIDwgY29va2llc1N0cmluZy5sZW5ndGggJiYgY29va2llc1N0cmluZy5jaGFyQXQocG9zKSA9PT0gXCI9XCIpIHtcbiAgICAgICAgICBjb29raWVzU2VwYXJhdG9yRm91bmQgPSB0cnVlO1xuICAgICAgICAgIHBvcyA9IG5leHRTdGFydDtcbiAgICAgICAgICBjb29raWVzU3RyaW5ncy5wdXNoKGNvb2tpZXNTdHJpbmcuc2xpY2Uoc3RhcnQsIGxhc3RDb21tYSkpO1xuICAgICAgICAgIHN0YXJ0ID0gcG9zO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBvcyA9IGxhc3RDb21tYSArIDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvcyArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWNvb2tpZXNTZXBhcmF0b3JGb3VuZCB8fCBwb3MgPj0gY29va2llc1N0cmluZy5sZW5ndGgpIHtcbiAgICAgIGNvb2tpZXNTdHJpbmdzLnB1c2goY29va2llc1N0cmluZy5zbGljZShzdGFydCkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY29va2llc1N0cmluZ3M7XG59XG5mdW5jdGlvbiB0b0hlYWRlcnNJbnN0YW5jZShpbml0KSB7XG4gIGlmIChpbml0IGluc3RhbmNlb2YgSGVhZGVycykge1xuICAgIHJldHVybiBuZXcgSGVhZGVycyhpbml0KTtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGluaXQpKSB7XG4gICAgcmV0dXJuIG5ldyBIZWFkZXJzKGluaXQpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBpbml0ID09PSBcIm9iamVjdFwiKSB7XG4gICAgcmV0dXJuIG5ldyBIZWFkZXJzKGluaXQpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgSGVhZGVycygpO1xuICB9XG59XG5mdW5jdGlvbiBtZXJnZUhlYWRlcnMoLi4uaGVhZGVycykge1xuICByZXR1cm4gaGVhZGVycy5yZWR1Y2UoKGFjYywgaGVhZGVyKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyc0luc3RhbmNlID0gdG9IZWFkZXJzSW5zdGFuY2UoaGVhZGVyKTtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBoZWFkZXJzSW5zdGFuY2UuZW50cmllcygpKSB7XG4gICAgICBpZiAoa2V5ID09PSBcInNldC1jb29raWVcIikge1xuICAgICAgICBjb25zdCBzcGxpdENvb2tpZXMgPSBzcGxpdFNldENvb2tpZVN0cmluZyh2YWx1ZSk7XG4gICAgICAgIHNwbGl0Q29va2llcy5mb3JFYWNoKChjb29raWUpID0+IGFjYy5hcHBlbmQoXCJzZXQtY29va2llXCIsIGNvb2tpZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWNjLnNldChrZXksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgfSwgbmV3IEhlYWRlcnMoKSk7XG59XG5mdW5jdGlvbiBqc29uKHBheWxvYWQsIGluaXQpIHtcbiAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeShwYXlsb2FkKSwge1xuICAgIC4uLmluaXQsXG4gICAgaGVhZGVyczogbWVyZ2VIZWFkZXJzKFxuICAgICAgeyBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgaW5pdD8uaGVhZGVyc1xuICAgIClcbiAgfSk7XG59XG52YXIgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiO1xudmFyIHByZWZpeCA9IFwiSW52YXJpYW50IGZhaWxlZFwiO1xuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoY29uZGl0aW9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJlZml4KTtcbiAgfVxuICB2YXIgcHJvdmlkZWQgPSB0eXBlb2YgbWVzc2FnZSA9PT0gXCJmdW5jdGlvblwiID8gbWVzc2FnZSgpIDogbWVzc2FnZTtcbiAgdmFyIHZhbHVlID0gcHJvdmlkZWQgPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiOiBcIikuY29uY2F0KHByb3ZpZGVkKSA6IHByZWZpeDtcbiAgdGhyb3cgbmV3IEVycm9yKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRyb2xsZWRQcm9taXNlKG9uUmVzb2x2ZSkge1xuICBsZXQgcmVzb2x2ZUxvYWRQcm9taXNlO1xuICBsZXQgcmVqZWN0TG9hZFByb21pc2U7XG4gIGNvbnN0IGNvbnRyb2xsZWRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHJlc29sdmVMb2FkUHJvbWlzZSA9IHJlc29sdmU7XG4gICAgcmVqZWN0TG9hZFByb21pc2UgPSByZWplY3Q7XG4gIH0pO1xuICBjb250cm9sbGVkUHJvbWlzZS5zdGF0dXMgPSBcInBlbmRpbmdcIjtcbiAgY29udHJvbGxlZFByb21pc2UucmVzb2x2ZSA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnRyb2xsZWRQcm9taXNlLnN0YXR1cyA9IFwicmVzb2x2ZWRcIjtcbiAgICBjb250cm9sbGVkUHJvbWlzZS52YWx1ZSA9IHZhbHVlO1xuICAgIHJlc29sdmVMb2FkUHJvbWlzZSh2YWx1ZSk7XG4gIH07XG4gIGNvbnRyb2xsZWRQcm9taXNlLnJlamVjdCA9IChlKSA9PiB7XG4gICAgY29udHJvbGxlZFByb21pc2Uuc3RhdHVzID0gXCJyZWplY3RlZFwiO1xuICAgIHJlamVjdExvYWRQcm9taXNlKGUpO1xuICB9O1xuICByZXR1cm4gY29udHJvbGxlZFByb21pc2U7XG59XG5jb25zdCByb290Um91dGVJZCA9IFwiX19yb290X19cIjtcbmZ1bmN0aW9uIGlzTm90Rm91bmQob2JqKSB7XG4gIHJldHVybiAhIW9iaj8uaXNOb3RGb3VuZDtcbn1cbmZ1bmN0aW9uIGlzUmVkaXJlY3Qob2JqKSB7XG4gIHJldHVybiBvYmogaW5zdGFuY2VvZiBSZXNwb25zZSAmJiAhIW9iai5vcHRpb25zO1xufVxuZnVuY3Rpb24gaXNSZXNvbHZlZFJlZGlyZWN0KG9iaikge1xuICByZXR1cm4gaXNSZWRpcmVjdChvYmopICYmICEhb2JqLm9wdGlvbnMuaHJlZjtcbn1cbmZ1bmN0aW9uIGV4ZWN1dGVSZXdyaXRlSW5wdXQocmV3cml0ZSwgdXJsKSB7XG4gIGNvbnN0IHJlcyA9IHJld3JpdGU/LmlucHV0Py4oeyB1cmwgfSk7XG4gIGlmIChyZXMpIHtcbiAgICBpZiAodHlwZW9mIHJlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIG5ldyBVUkwocmVzKTtcbiAgICB9IGVsc2UgaWYgKHJlcyBpbnN0YW5jZW9mIFVSTCkge1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVybDtcbn1cbnZhciBSID0gKChhKSA9PiAoYVthLkFnZ3JlZ2F0ZUVycm9yID0gMV0gPSBcIkFnZ3JlZ2F0ZUVycm9yXCIsIGFbYS5BcnJvd0Z1bmN0aW9uID0gMl0gPSBcIkFycm93RnVuY3Rpb25cIiwgYVthLkVycm9yUHJvdG90eXBlU3RhY2sgPSA0XSA9IFwiRXJyb3JQcm90b3R5cGVTdGFja1wiLCBhW2EuT2JqZWN0QXNzaWduID0gOF0gPSBcIk9iamVjdEFzc2lnblwiLCBhW2EuQmlnSW50VHlwZWRBcnJheSA9IDE2XSA9IFwiQmlnSW50VHlwZWRBcnJheVwiLCBhKSkoUiB8fCB7fSk7XG5mdW5jdGlvbiBOcihvKSB7XG4gIHN3aXRjaCAobykge1xuICAgIGNhc2UgJ1wiJzpcbiAgICAgIHJldHVybiAnXFxcXFwiJztcbiAgICBjYXNlIFwiXFxcXFwiOlxuICAgICAgcmV0dXJuIFwiXFxcXFxcXFxcIjtcbiAgICBjYXNlIGBcbmA6XG4gICAgICByZXR1cm4gXCJcXFxcblwiO1xuICAgIGNhc2UgXCJcXHJcIjpcbiAgICAgIHJldHVybiBcIlxcXFxyXCI7XG4gICAgY2FzZSBcIlxcYlwiOlxuICAgICAgcmV0dXJuIFwiXFxcXGJcIjtcbiAgICBjYXNlIFwiXHRcIjpcbiAgICAgIHJldHVybiBcIlxcXFx0XCI7XG4gICAgY2FzZSBcIlxcZlwiOlxuICAgICAgcmV0dXJuIFwiXFxcXGZcIjtcbiAgICBjYXNlIFwiPFwiOlxuICAgICAgcmV0dXJuIFwiXFxcXHgzQ1wiO1xuICAgIGNhc2UgXCJcXHUyMDI4XCI6XG4gICAgICByZXR1cm4gXCJcXFxcdTIwMjhcIjtcbiAgICBjYXNlIFwiXFx1MjAyOVwiOlxuICAgICAgcmV0dXJuIFwiXFxcXHUyMDI5XCI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybjtcbiAgfVxufVxuZnVuY3Rpb24gZChvKSB7XG4gIGxldCBlID0gXCJcIiwgciA9IDAsIHQ7XG4gIGZvciAobGV0IG4gPSAwLCBhID0gby5sZW5ndGg7IG4gPCBhOyBuKyspIHQgPSBOcihvW25dKSwgdCAmJiAoZSArPSBvLnNsaWNlKHIsIG4pICsgdCwgciA9IG4gKyAxKTtcbiAgcmV0dXJuIHIgPT09IDAgPyBlID0gbyA6IGUgKz0gby5zbGljZShyKSwgZTtcbn1cbmZ1bmN0aW9uIGJyKG8pIHtcbiAgc3dpdGNoIChvKSB7XG4gICAgY2FzZSBcIlxcXFxcXFxcXCI6XG4gICAgICByZXR1cm4gXCJcXFxcXCI7XG4gICAgY2FzZSAnXFxcXFwiJzpcbiAgICAgIHJldHVybiAnXCInO1xuICAgIGNhc2UgXCJcXFxcblwiOlxuICAgICAgcmV0dXJuIGBcbmA7XG4gICAgY2FzZSBcIlxcXFxyXCI6XG4gICAgICByZXR1cm4gXCJcXHJcIjtcbiAgICBjYXNlIFwiXFxcXGJcIjpcbiAgICAgIHJldHVybiBcIlxcYlwiO1xuICAgIGNhc2UgXCJcXFxcdFwiOlxuICAgICAgcmV0dXJuIFwiXHRcIjtcbiAgICBjYXNlIFwiXFxcXGZcIjpcbiAgICAgIHJldHVybiBcIlxcZlwiO1xuICAgIGNhc2UgXCJcXFxceDNDXCI6XG4gICAgICByZXR1cm4gXCI8XCI7XG4gICAgY2FzZSBcIlxcXFx1MjAyOFwiOlxuICAgICAgcmV0dXJuIFwiXFx1MjAyOFwiO1xuICAgIGNhc2UgXCJcXFxcdTIwMjlcIjpcbiAgICAgIHJldHVybiBcIlxcdTIwMjlcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG87XG4gIH1cbn1cbmZ1bmN0aW9uIE4obykge1xuICByZXR1cm4gby5yZXBsYWNlKC8oXFxcXFxcXFx8XFxcXFwifFxcXFxufFxcXFxyfFxcXFxifFxcXFx0fFxcXFxmfFxcXFx1MjAyOHxcXFxcdTIwMjl8XFxcXHgzQykvZywgYnIpO1xufVxudmFyIE8gPSBcIl9fU0VST1ZBTF9SRUZTX19cIiwgUSA9IFwiJFJcIiwgYWUgPSBgc2VsZi4ke1F9YDtcbmZ1bmN0aW9uIHhyKG8pIHtcbiAgcmV0dXJuIG8gPT0gbnVsbCA/IGAke2FlfT0ke2FlfXx8W11gIDogYCgke2FlfT0ke2FlfXx8e30pW1wiJHtkKG8pfVwiXT1bXWA7XG59XG5mdW5jdGlvbiBmKG8sIGUpIHtcbiAgaWYgKCFvKSB0aHJvdyBlO1xufVxudmFyIEJlID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgQyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5mdW5jdGlvbiBqZShvKSB7XG4gIHJldHVybiBCZS5oYXMobyk7XG59XG5mdW5jdGlvbiBBcihvKSB7XG4gIHJldHVybiBDLmhhcyhvKTtcbn1cbmZ1bmN0aW9uIEtlKG8pIHtcbiAgcmV0dXJuIGYoamUobyksIG5ldyBpZShvKSksIEJlLmdldChvKTtcbn1cbmZ1bmN0aW9uIEplKG8pIHtcbiAgcmV0dXJuIGYoQXIobyksIG5ldyBsZShvKSksIEMuZ2V0KG8pO1xufVxudHlwZW9mIGdsb2JhbFRoaXMgIT0gXCJ1bmRlZmluZWRcIiA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbG9iYWxUaGlzLCBPLCB7IHZhbHVlOiBDLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiBmYWxzZSwgZW51bWVyYWJsZTogZmFsc2UgfSkgOiB0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LCBPLCB7IHZhbHVlOiBDLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiBmYWxzZSwgZW51bWVyYWJsZTogZmFsc2UgfSkgOiB0eXBlb2Ygc2VsZiAhPSBcInVuZGVmaW5lZFwiID8gT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYsIE8sIHsgdmFsdWU6IEMsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IGZhbHNlLCBlbnVtZXJhYmxlOiBmYWxzZSB9KSA6IHR5cGVvZiBnbG9iYWwgIT0gXCJ1bmRlZmluZWRcIiAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCBPLCB7IHZhbHVlOiBDLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiBmYWxzZSwgZW51bWVyYWJsZTogZmFsc2UgfSk7XG5mdW5jdGlvbiBIcihvKSB7XG4gIHJldHVybiBvO1xufVxuZnVuY3Rpb24gWWUobywgZSkge1xuICBmb3IgKGxldCByID0gMCwgdCA9IGUubGVuZ3RoOyByIDwgdDsgcisrKSB7XG4gICAgbGV0IG4gPSBlW3JdO1xuICAgIG8uaGFzKG4pIHx8IChvLmFkZChuKSwgbi5leHRlbmRzICYmIFllKG8sIG4uZXh0ZW5kcykpO1xuICB9XG59XG5mdW5jdGlvbiBtKG8pIHtcbiAgaWYgKG8pIHtcbiAgICBsZXQgZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gICAgcmV0dXJuIFllKGUsIG8pLCBbLi4uZV07XG4gIH1cbn1cbnZhciAkZSA9IHsgMDogXCJTeW1ib2wuYXN5bmNJdGVyYXRvclwiLCAxOiBcIlN5bWJvbC5oYXNJbnN0YW5jZVwiLCAyOiBcIlN5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGVcIiwgMzogXCJTeW1ib2wuaXRlcmF0b3JcIiwgNDogXCJTeW1ib2wubWF0Y2hcIiwgNTogXCJTeW1ib2wubWF0Y2hBbGxcIiwgNjogXCJTeW1ib2wucmVwbGFjZVwiLCA3OiBcIlN5bWJvbC5zZWFyY2hcIiwgODogXCJTeW1ib2wuc3BlY2llc1wiLCA5OiBcIlN5bWJvbC5zcGxpdFwiLCAxMDogXCJTeW1ib2wudG9QcmltaXRpdmVcIiwgMTE6IFwiU3ltYm9sLnRvU3RyaW5nVGFnXCIsIDEyOiBcIlN5bWJvbC51bnNjb3BhYmxlc1wiIH0sIGNlID0geyBbU3ltYm9sLmFzeW5jSXRlcmF0b3JdOiAwLCBbU3ltYm9sLmhhc0luc3RhbmNlXTogMSwgW1N5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGVdOiAyLCBbU3ltYm9sLml0ZXJhdG9yXTogMywgW1N5bWJvbC5tYXRjaF06IDQsIFtTeW1ib2wubWF0Y2hBbGxdOiA1LCBbU3ltYm9sLnJlcGxhY2VdOiA2LCBbU3ltYm9sLnNlYXJjaF06IDcsIFtTeW1ib2wuc3BlY2llc106IDgsIFtTeW1ib2wuc3BsaXRdOiA5LCBbU3ltYm9sLnRvUHJpbWl0aXZlXTogMTAsIFtTeW1ib2wudG9TdHJpbmdUYWddOiAxMSwgW1N5bWJvbC51bnNjb3BhYmxlc106IDEyIH0sIEdlID0geyAwOiBTeW1ib2wuYXN5bmNJdGVyYXRvciwgMTogU3ltYm9sLmhhc0luc3RhbmNlLCAyOiBTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlLCAzOiBTeW1ib2wuaXRlcmF0b3IsIDQ6IFN5bWJvbC5tYXRjaCwgNTogU3ltYm9sLm1hdGNoQWxsLCA2OiBTeW1ib2wucmVwbGFjZSwgNzogU3ltYm9sLnNlYXJjaCwgODogU3ltYm9sLnNwZWNpZXMsIDk6IFN5bWJvbC5zcGxpdCwgMTA6IFN5bWJvbC50b1ByaW1pdGl2ZSwgMTE6IFN5bWJvbC50b1N0cmluZ1RhZywgMTI6IFN5bWJvbC51bnNjb3BhYmxlcyB9LCBxZSA9IHsgMjogXCIhMFwiLCAzOiBcIiExXCIsIDE6IFwidm9pZCAwXCIsIDA6IFwibnVsbFwiLCA0OiBcIi0wXCIsIDU6IFwiMS8wXCIsIDY6IFwiLTEvMFwiLCA3OiBcIjAvMFwiIH0sIEhlID0geyAyOiB0cnVlLCAzOiBmYWxzZSwgMTogdm9pZCAwLCAwOiBudWxsLCA0OiAtMCwgNTogTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLCA2OiBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksIDc6IE51bWJlci5OYU4gfTtcbnZhciB1ZSA9IHsgMDogXCJFcnJvclwiLCAxOiBcIkV2YWxFcnJvclwiLCAyOiBcIlJhbmdlRXJyb3JcIiwgMzogXCJSZWZlcmVuY2VFcnJvclwiLCA0OiBcIlN5bnRheEVycm9yXCIsIDU6IFwiVHlwZUVycm9yXCIsIDY6IFwiVVJJRXJyb3JcIiB9LCBaZSA9IHsgMDogRXJyb3IsIDE6IEV2YWxFcnJvciwgMjogUmFuZ2VFcnJvciwgMzogUmVmZXJlbmNlRXJyb3IsIDQ6IFN5bnRheEVycm9yLCA1OiBUeXBlRXJyb3IsIDY6IFVSSUVycm9yIH0sIHMgPSB2b2lkIDA7XG5mdW5jdGlvbiB1JDEobywgZSwgciwgdCwgbiwgYSwgaSwgbCwgYywgcDIsIGgsIFgpIHtcbiAgcmV0dXJuIHsgdDogbywgaTogZSwgczogciwgbDogdCwgYzogbiwgbTogYSwgcDogaSwgZTogbCwgYTogYywgZjogcDIsIGI6IGgsIG86IFggfTtcbn1cbmZ1bmN0aW9uIHgobykge1xuICByZXR1cm4gdSQxKDIsIHMsIG8sIHMsIHMsIHMsIHMsIHMsIHMsIHMsIHMsIHMpO1xufVxudmFyIEkgPSB4KDIpLCBBID0geCgzKSwgcGUgPSB4KDEpLCBkZSA9IHgoMCksIFhlID0geCg0KSwgUWUgPSB4KDUpLCBlciA9IHgoNiksIHJyID0geCg3KTtcbmZ1bmN0aW9uIG1lKG8pIHtcbiAgcmV0dXJuIG8gaW5zdGFuY2VvZiBFdmFsRXJyb3IgPyAxIDogbyBpbnN0YW5jZW9mIFJhbmdlRXJyb3IgPyAyIDogbyBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yID8gMyA6IG8gaW5zdGFuY2VvZiBTeW50YXhFcnJvciA/IDQgOiBvIGluc3RhbmNlb2YgVHlwZUVycm9yID8gNSA6IG8gaW5zdGFuY2VvZiBVUklFcnJvciA/IDYgOiAwO1xufVxuZnVuY3Rpb24gd3Iobykge1xuICBsZXQgZSA9IHVlW21lKG8pXTtcbiAgcmV0dXJuIG8ubmFtZSAhPT0gZSA/IHsgbmFtZTogby5uYW1lIH0gOiBvLmNvbnN0cnVjdG9yLm5hbWUgIT09IGUgPyB7IG5hbWU6IG8uY29uc3RydWN0b3IubmFtZSB9IDoge307XG59XG5mdW5jdGlvbiBqKG8sIGUpIHtcbiAgbGV0IHIgPSB3cihvKSwgdCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG8pO1xuICBmb3IgKGxldCBuID0gMCwgYSA9IHQubGVuZ3RoLCBpOyBuIDwgYTsgbisrKSBpID0gdFtuXSwgaSAhPT0gXCJuYW1lXCIgJiYgaSAhPT0gXCJtZXNzYWdlXCIgJiYgKGkgPT09IFwic3RhY2tcIiA/IGUgJiA0ICYmIChyID0gciB8fCB7fSwgcltpXSA9IG9baV0pIDogKHIgPSByIHx8IHt9LCByW2ldID0gb1tpXSkpO1xuICByZXR1cm4gcjtcbn1cbmZ1bmN0aW9uIGZlKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5pc0Zyb3plbihvKSA/IDMgOiBPYmplY3QuaXNTZWFsZWQobykgPyAyIDogT2JqZWN0LmlzRXh0ZW5zaWJsZShvKSA/IDAgOiAxO1xufVxuZnVuY3Rpb24gZ2Uobykge1xuICBzd2l0Y2ggKG8pIHtcbiAgICBjYXNlIE51bWJlci5QT1NJVElWRV9JTkZJTklUWTpcbiAgICAgIHJldHVybiBRZTtcbiAgICBjYXNlIE51bWJlci5ORUdBVElWRV9JTkZJTklUWTpcbiAgICAgIHJldHVybiBlcjtcbiAgfVxuICByZXR1cm4gbyAhPT0gbyA/IHJyIDogT2JqZWN0LmlzKG8sIC0wKSA/IFhlIDogdSQxKDAsIHMsIG8sIHMsIHMsIHMsIHMsIHMsIHMsIHMsIHMsIHMpO1xufVxuZnVuY3Rpb24gdyhvKSB7XG4gIHJldHVybiB1JDEoMSwgcywgZChvKSwgcywgcywgcywgcywgcywgcywgcywgcywgcyk7XG59XG5mdW5jdGlvbiBTZShvKSB7XG4gIHJldHVybiB1JDEoMywgcywgXCJcIiArIG8sIHMsIHMsIHMsIHMsIHMsIHMsIHMsIHMsIHMpO1xufVxuZnVuY3Rpb24gc3Iobykge1xuICByZXR1cm4gdSQxKDQsIG8sIHMsIHMsIHMsIHMsIHMsIHMsIHMsIHMsIHMsIHMpO1xufVxuZnVuY3Rpb24gaGUobywgZSkge1xuICBsZXQgciA9IGUudmFsdWVPZigpO1xuICByZXR1cm4gdSQxKDUsIG8sIHIgIT09IHIgPyBcIlwiIDogZS50b0lTT1N0cmluZygpLCBzLCBzLCBzLCBzLCBzLCBzLCBzLCBzLCBzKTtcbn1cbmZ1bmN0aW9uIHllKG8sIGUpIHtcbiAgcmV0dXJuIHUkMSg2LCBvLCBzLCBzLCBkKGUuc291cmNlKSwgZS5mbGFncywgcywgcywgcywgcywgcywgcyk7XG59XG5mdW5jdGlvbiB2ZShvLCBlKSB7XG4gIGxldCByID0gbmV3IFVpbnQ4QXJyYXkoZSksIHQgPSByLmxlbmd0aCwgbiA9IG5ldyBBcnJheSh0KTtcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCB0OyBhKyspIG5bYV0gPSByW2FdO1xuICByZXR1cm4gdSQxKDE5LCBvLCBuLCBzLCBzLCBzLCBzLCBzLCBzLCBzLCBzLCBzKTtcbn1cbmZ1bmN0aW9uIG9yKG8sIGUpIHtcbiAgcmV0dXJuIHUkMSgxNywgbywgY2VbZV0sIHMsIHMsIHMsIHMsIHMsIHMsIHMsIHMsIHMpO1xufVxuZnVuY3Rpb24gbnIobywgZSkge1xuICByZXR1cm4gdSQxKDE4LCBvLCBkKEtlKGUpKSwgcywgcywgcywgcywgcywgcywgcywgcywgcyk7XG59XG5mdW5jdGlvbiBfKG8sIGUsIHIpIHtcbiAgcmV0dXJuIHUkMSgyNSwgbywgciwgcywgZChlKSwgcywgcywgcywgcywgcywgcywgcyk7XG59XG5mdW5jdGlvbiBOZShvLCBlLCByKSB7XG4gIHJldHVybiB1JDEoOSwgbywgcywgZS5sZW5ndGgsIHMsIHMsIHMsIHMsIHIsIHMsIHMsIGZlKGUpKTtcbn1cbmZ1bmN0aW9uIGJlKG8sIGUpIHtcbiAgcmV0dXJuIHUkMSgyMSwgbywgcywgcywgcywgcywgcywgcywgcywgZSwgcywgcyk7XG59XG5mdW5jdGlvbiB4ZShvLCBlLCByKSB7XG4gIHJldHVybiB1JDEoMTUsIG8sIHMsIGUubGVuZ3RoLCBlLmNvbnN0cnVjdG9yLm5hbWUsIHMsIHMsIHMsIHMsIHIsIGUuYnl0ZU9mZnNldCwgcyk7XG59XG5mdW5jdGlvbiBJZShvLCBlLCByKSB7XG4gIHJldHVybiB1JDEoMTYsIG8sIHMsIGUubGVuZ3RoLCBlLmNvbnN0cnVjdG9yLm5hbWUsIHMsIHMsIHMsIHMsIHIsIGUuYnl0ZU9mZnNldCwgcyk7XG59XG5mdW5jdGlvbiBBZShvLCBlLCByKSB7XG4gIHJldHVybiB1JDEoMjAsIG8sIHMsIGUuYnl0ZUxlbmd0aCwgcywgcywgcywgcywgcywgciwgZS5ieXRlT2Zmc2V0LCBzKTtcbn1cbmZ1bmN0aW9uIHdlKG8sIGUsIHIpIHtcbiAgcmV0dXJuIHUkMSgxMywgbywgbWUoZSksIHMsIHMsIGQoZS5tZXNzYWdlKSwgciwgcywgcywgcywgcywgcyk7XG59XG5mdW5jdGlvbiBFZShvLCBlLCByKSB7XG4gIHJldHVybiB1JDEoMTQsIG8sIG1lKGUpLCBzLCBzLCBkKGUubWVzc2FnZSksIHIsIHMsIHMsIHMsIHMsIHMpO1xufVxuZnVuY3Rpb24gUGUobywgZSwgcikge1xuICByZXR1cm4gdSQxKDcsIG8sIHMsIGUsIHMsIHMsIHMsIHMsIHIsIHMsIHMsIHMpO1xufVxuZnVuY3Rpb24gTShvLCBlKSB7XG4gIHJldHVybiB1JDEoMjgsIHMsIHMsIHMsIHMsIHMsIHMsIHMsIFtvLCBlXSwgcywgcywgcyk7XG59XG5mdW5jdGlvbiBVKG8sIGUpIHtcbiAgcmV0dXJuIHUkMSgzMCwgcywgcywgcywgcywgcywgcywgcywgW28sIGVdLCBzLCBzLCBzKTtcbn1cbmZ1bmN0aW9uIEwobywgZSwgcikge1xuICByZXR1cm4gdSQxKDMxLCBvLCBzLCBzLCBzLCBzLCBzLCBzLCByLCBlLCBzLCBzKTtcbn1cbmZ1bmN0aW9uIFJlKG8sIGUpIHtcbiAgcmV0dXJuIHUkMSgzMiwgbywgcywgcywgcywgcywgcywgcywgcywgZSwgcywgcyk7XG59XG5mdW5jdGlvbiBPZShvLCBlKSB7XG4gIHJldHVybiB1JDEoMzMsIG8sIHMsIHMsIHMsIHMsIHMsIHMsIHMsIGUsIHMsIHMpO1xufVxuZnVuY3Rpb24gQ2UobywgZSkge1xuICByZXR1cm4gdSQxKDM0LCBvLCBzLCBzLCBzLCBzLCBzLCBzLCBzLCBlLCBzLCBzKTtcbn1cbnZhciB7IHRvU3RyaW5nOiBfZSB9ID0gT2JqZWN0LnByb3RvdHlwZTtcbmZ1bmN0aW9uIEVyKG8sIGUpIHtcbiAgcmV0dXJuIGUgaW5zdGFuY2VvZiBFcnJvciA/IGBTZXJvdmFsIGNhdWdodCBhbiBlcnJvciBkdXJpbmcgdGhlICR7b30gcHJvY2Vzcy5cbiAgXG4ke2UubmFtZX1cbiR7ZS5tZXNzYWdlfVxuXG4tIEZvciBtb3JlIGluZm9ybWF0aW9uLCBwbGVhc2UgY2hlY2sgdGhlIFwiY2F1c2VcIiBwcm9wZXJ0eSBvZiB0aGlzIGVycm9yLlxuLSBJZiB5b3UgYmVsaWV2ZSB0aGlzIGlzIGFuIGVycm9yIGluIFNlcm92YWwsIHBsZWFzZSBzdWJtaXQgYW4gaXNzdWUgYXQgaHR0cHM6Ly9naXRodWIuY29tL2x4c21uc3ljL3Nlcm92YWwvaXNzdWVzL25ld2AgOiBgU2Vyb3ZhbCBjYXVnaHQgYW4gZXJyb3IgZHVyaW5nIHRoZSAke299IHByb2Nlc3MuXG5cblwiJHtfZS5jYWxsKGUpfVwiXG5cbkZvciBtb3JlIGluZm9ybWF0aW9uLCBwbGVhc2UgY2hlY2sgdGhlIFwiY2F1c2VcIiBwcm9wZXJ0eSBvZiB0aGlzIGVycm9yLmA7XG59XG52YXIgZWUkMSA9IGNsYXNzIGVlIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihyLCB0KSB7XG4gICAgc3VwZXIoRXIociwgdCkpO1xuICAgIHRoaXMuY2F1c2UgPSB0O1xuICB9XG59LCBFID0gY2xhc3MgZXh0ZW5kcyBlZSQxIHtcbiAgY29uc3RydWN0b3IoZSkge1xuICAgIHN1cGVyKFwicGFyc2luZ1wiLCBlKTtcbiAgfVxufSwgVGUgPSBjbGFzcyBleHRlbmRzIGVlJDEge1xuICBjb25zdHJ1Y3RvcihlKSB7XG4gICAgc3VwZXIoXCJzZXJpYWxpemF0aW9uXCIsIGUpO1xuICB9XG59LCB6ZSA9IGNsYXNzIGV4dGVuZHMgZWUkMSB7XG4gIGNvbnN0cnVjdG9yKGUpIHtcbiAgICBzdXBlcihcImRlc2VyaWFsaXphdGlvblwiLCBlKTtcbiAgfVxufSwgZyA9IGNsYXNzIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihyKSB7XG4gICAgc3VwZXIoYFRoZSB2YWx1ZSAke19lLmNhbGwocil9IG9mIHR5cGUgXCIke3R5cGVvZiByfVwiIGNhbm5vdCBiZSBwYXJzZWQvc2VyaWFsaXplZC5cbiAgICAgIFxuVGhlcmUgYXJlIGZldyB3b3JrYXJvdW5kcyBmb3IgdGhpcyBwcm9ibGVtOlxuLSBUcmFuc2Zvcm0gdGhlIHZhbHVlIGluIGEgd2F5IHRoYXQgaXQgY2FuIGJlIHNlcmlhbGl6ZWQuXG4tIElmIHRoZSByZWZlcmVuY2UgaXMgcHJlc2VudCBvbiBtdWx0aXBsZSBydW50aW1lcyAoaXNvbW9ycGhpYyksIHlvdSBjYW4gdXNlIHRoZSBSZWZlcmVuY2UgQVBJIHRvIG1hcCB0aGUgcmVmZXJlbmNlcy5gKTtcbiAgICB0aGlzLnZhbHVlID0gcjtcbiAgfVxufSwgeSA9IGNsYXNzIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihlKSB7XG4gICAgc3VwZXIoJ1Vuc3VwcG9ydGVkIG5vZGUgdHlwZSBcIicgKyBlLnQgKyAnXCIuJyk7XG4gIH1cbn0sIFcgPSBjbGFzcyBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoZSkge1xuICAgIHN1cGVyKCdNaXNzaW5nIHBsdWdpbiBmb3IgdGFnIFwiJyArIGUgKyAnXCIuJyk7XG4gIH1cbn0sIFAgPSBjbGFzcyBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoZSkge1xuICAgIHN1cGVyKCdNaXNzaW5nIFwiJyArIGUgKyAnXCIgaW5zdGFuY2UuJyk7XG4gIH1cbn0sIGllID0gY2xhc3MgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHIpIHtcbiAgICBzdXBlcignTWlzc2luZyByZWZlcmVuY2UgZm9yIHRoZSB2YWx1ZSBcIicgKyBfZS5jYWxsKHIpICsgJ1wiIG9mIHR5cGUgXCInICsgdHlwZW9mIHIgKyAnXCInKTtcbiAgICB0aGlzLnZhbHVlID0gcjtcbiAgfVxufSwgbGUgPSBjbGFzcyBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoZSkge1xuICAgIHN1cGVyKCdNaXNzaW5nIHJlZmVyZW5jZSBmb3IgaWQgXCInICsgZChlKSArICdcIicpO1xuICB9XG59LCBrZSA9IGNsYXNzIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihlKSB7XG4gICAgc3VwZXIoJ1Vua25vd24gVHlwZWRBcnJheSBcIicgKyBlICsgJ1wiJyk7XG4gIH1cbn07XG52YXIgVCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoZSwgcikge1xuICAgIHRoaXMudmFsdWUgPSBlO1xuICAgIHRoaXMucmVwbGFjZW1lbnQgPSByO1xuICB9XG59O1xuZnVuY3Rpb24geiQxKG8sIGUsIHIpIHtcbiAgcmV0dXJuIG8gJiAyID8gKGUubGVuZ3RoID09PSAxID8gZVswXSA6IFwiKFwiICsgZS5qb2luKFwiLFwiKSArIFwiKVwiKSArIFwiPT5cIiArIChyLnN0YXJ0c1dpdGgoXCJ7XCIpID8gXCIoXCIgKyByICsgXCIpXCIgOiByKSA6IFwiZnVuY3Rpb24oXCIgKyBlLmpvaW4oXCIsXCIpICsgXCIpe3JldHVybiBcIiArIHIgKyBcIn1cIjtcbn1cbmZ1bmN0aW9uIFMobywgZSwgcikge1xuICByZXR1cm4gbyAmIDIgPyAoZS5sZW5ndGggPT09IDEgPyBlWzBdIDogXCIoXCIgKyBlLmpvaW4oXCIsXCIpICsgXCIpXCIpICsgXCI9PntcIiArIHIgKyBcIn1cIiA6IFwiZnVuY3Rpb24oXCIgKyBlLmpvaW4oXCIsXCIpICsgXCIpe1wiICsgciArIFwifVwiO1xufVxudmFyIGFyID0ge30sIGlyID0ge307XG52YXIgbHIgPSB7IDA6IHt9LCAxOiB7fSwgMjoge30sIDM6IHt9LCA0OiB7fSB9O1xuZnVuY3Rpb24gUHIobykge1xuICByZXR1cm4geiQxKG8sIFtcInJcIl0sIFwiKHIucD1uZXcgUHJvbWlzZShcIiArIFMobywgW1wic1wiLCBcImZcIl0sIFwici5zPXMsci5mPWZcIikgKyBcIikpXCIpO1xufVxuZnVuY3Rpb24gUnIobykge1xuICByZXR1cm4gUyhvLCBbXCJyXCIsIFwiZFwiXSwgXCJyLnMoZCksci5wLnM9MSxyLnAudj1kXCIpO1xufVxuZnVuY3Rpb24gT3Iobykge1xuICByZXR1cm4gUyhvLCBbXCJyXCIsIFwiZFwiXSwgXCJyLmYoZCksci5wLnM9MixyLnAudj1kXCIpO1xufVxuZnVuY3Rpb24gQ3Iobykge1xuICByZXR1cm4geiQxKG8sIFtcImJcIiwgXCJhXCIsIFwic1wiLCBcImxcIiwgXCJwXCIsIFwiZlwiLCBcImVcIiwgXCJuXCJdLCBcIihiPVtdLGE9ITAscz0hMSxsPVtdLHA9MCxmPVwiICsgUyhvLCBbXCJ2XCIsIFwibVwiLCBcInhcIl0sIFwiZm9yKHg9MDt4PHA7eCsrKWxbeF0mJmxbeF1bbV0odilcIikgKyBcIixuPVwiICsgUyhvLCBbXCJvXCIsIFwieFwiLCBcInpcIiwgXCJjXCJdLCAnZm9yKHg9MCx6PWIubGVuZ3RoO3g8ejt4KyspKGM9Ylt4XSwoIWEmJng9PT16LTEpP29bcz9cInJldHVyblwiOlwidGhyb3dcIl0oYyk6by5uZXh0KGMpKScpICsgXCIsZT1cIiArIHokMShvLCBbXCJvXCIsIFwidFwiXSwgXCIoYSYmKGxbdD1wKytdPW8pLG4obyksXCIgKyBTKG8sIFtdLCBcImEmJihsW3RdPXZvaWQgMClcIikgKyBcIilcIikgKyBcIix7X19TRVJPVkFMX1NUUkVBTV9fOiEwLG9uOlwiICsgeiQxKG8sIFtcIm9cIl0sIFwiZShvKVwiKSArIFwiLG5leHQ6XCIgKyBTKG8sIFtcInZcIl0sICdhJiYoYi5wdXNoKHYpLGYodixcIm5leHRcIikpJykgKyBcIix0aHJvdzpcIiArIFMobywgW1widlwiXSwgJ2EmJihiLnB1c2godiksZih2LFwidGhyb3dcIiksYT1zPSExLGwubGVuZ3RoPTApJykgKyBcIixyZXR1cm46XCIgKyBTKG8sIFtcInZcIl0sICdhJiYoYi5wdXNoKHYpLGYodixcInJldHVyblwiKSxhPSExLHM9ITAsbC5sZW5ndGg9MCknKSArIFwifSlcIik7XG59XG5mdW5jdGlvbiBjcihvLCBlKSB7XG4gIHN3aXRjaCAoZSkge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiBcIltdXCI7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIFByKG8pO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBScihvKTtcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gT3Iobyk7XG4gICAgY2FzZSA0OlxuICAgICAgcmV0dXJuIENyKG8pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCJcIjtcbiAgfVxufVxuZnVuY3Rpb24gcmUkMSgpIHtcbiAgbGV0IG8sIGU7XG4gIHJldHVybiB7IHByb21pc2U6IG5ldyBQcm9taXNlKChyLCB0KSA9PiB7XG4gICAgbyA9IHIsIGUgPSB0O1xuICB9KSwgcmVzb2x2ZShyKSB7XG4gICAgbyhyKTtcbiAgfSwgcmVqZWN0KHIpIHtcbiAgICBlKHIpO1xuICB9IH07XG59XG5mdW5jdGlvbiBGZShvKSB7XG4gIHJldHVybiBcIl9fU0VST1ZBTF9TVFJFQU1fX1wiIGluIG87XG59XG5mdW5jdGlvbiBLKCkge1xuICBsZXQgbyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCksIGUgPSBbXSwgciA9IHRydWUsIHQgPSB0cnVlO1xuICBmdW5jdGlvbiBuKGwpIHtcbiAgICBmb3IgKGxldCBjIG9mIG8ua2V5cygpKSBjLm5leHQobCk7XG4gIH1cbiAgZnVuY3Rpb24gYShsKSB7XG4gICAgZm9yIChsZXQgYyBvZiBvLmtleXMoKSkgYy50aHJvdyhsKTtcbiAgfVxuICBmdW5jdGlvbiBpKGwpIHtcbiAgICBmb3IgKGxldCBjIG9mIG8ua2V5cygpKSBjLnJldHVybihsKTtcbiAgfVxuICByZXR1cm4geyBfX1NFUk9WQUxfU1RSRUFNX186IHRydWUsIG9uKGwpIHtcbiAgICByICYmIG8uYWRkKGwpO1xuICAgIGZvciAobGV0IGMgPSAwLCBwMiA9IGUubGVuZ3RoOyBjIDwgcDI7IGMrKykge1xuICAgICAgbGV0IGggPSBlW2NdO1xuICAgICAgYyA9PT0gcDIgLSAxICYmICFyID8gdCA/IGwucmV0dXJuKGgpIDogbC50aHJvdyhoKSA6IGwubmV4dChoKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHIgJiYgby5kZWxldGUobCk7XG4gICAgfTtcbiAgfSwgbmV4dChsKSB7XG4gICAgciAmJiAoZS5wdXNoKGwpLCBuKGwpKTtcbiAgfSwgdGhyb3cobCkge1xuICAgIHIgJiYgKGUucHVzaChsKSwgYShsKSwgciA9IGZhbHNlLCB0ID0gZmFsc2UsIG8uY2xlYXIoKSk7XG4gIH0sIHJldHVybihsKSB7XG4gICAgciAmJiAoZS5wdXNoKGwpLCBpKGwpLCByID0gZmFsc2UsIHQgPSB0cnVlLCBvLmNsZWFyKCkpO1xuICB9IH07XG59XG5mdW5jdGlvbiBWZShvKSB7XG4gIGxldCBlID0gSygpLCByID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKTtcbiAgYXN5bmMgZnVuY3Rpb24gdCgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IG4gPSBhd2FpdCByLm5leHQoKTtcbiAgICAgIG4uZG9uZSA/IGUucmV0dXJuKG4udmFsdWUpIDogKGUubmV4dChuLnZhbHVlKSwgYXdhaXQgdCgpKTtcbiAgICB9IGNhdGNoIChuKSB7XG4gICAgICBlLnRocm93KG4pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdCgpLmNhdGNoKCgpID0+IHtcbiAgfSksIGU7XG59XG5mdW5jdGlvbiB1cihvKSB7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgbGV0IGUgPSBbXSwgciA9IFtdLCB0ID0gMCwgbiA9IC0xLCBhID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gaSgpIHtcbiAgICAgIGZvciAobGV0IGMgPSAwLCBwMiA9IHIubGVuZ3RoOyBjIDwgcDI7IGMrKykgcltjXS5yZXNvbHZlKHsgZG9uZTogdHJ1ZSwgdmFsdWU6IHZvaWQgMCB9KTtcbiAgICB9XG4gICAgby5vbih7IG5leHQoYykge1xuICAgICAgbGV0IHAyID0gci5zaGlmdCgpO1xuICAgICAgcDIgJiYgcDIucmVzb2x2ZSh7IGRvbmU6IGZhbHNlLCB2YWx1ZTogYyB9KSwgZS5wdXNoKGMpO1xuICAgIH0sIHRocm93KGMpIHtcbiAgICAgIGxldCBwMiA9IHIuc2hpZnQoKTtcbiAgICAgIHAyICYmIHAyLnJlamVjdChjKSwgaSgpLCBuID0gZS5sZW5ndGgsIGUucHVzaChjKSwgYSA9IHRydWU7XG4gICAgfSwgcmV0dXJuKGMpIHtcbiAgICAgIGxldCBwMiA9IHIuc2hpZnQoKTtcbiAgICAgIHAyICYmIHAyLnJlc29sdmUoeyBkb25lOiB0cnVlLCB2YWx1ZTogYyB9KSwgaSgpLCBuID0gZS5sZW5ndGgsIGUucHVzaChjKTtcbiAgICB9IH0pO1xuICAgIGZ1bmN0aW9uIGwoKSB7XG4gICAgICBsZXQgYyA9IHQrKywgcDIgPSBlW2NdO1xuICAgICAgaWYgKGMgIT09IG4pIHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogcDIgfTtcbiAgICAgIGlmIChhKSB0aHJvdyBwMjtcbiAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBwMiB9O1xuICAgIH1cbiAgICByZXR1cm4geyBbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSwgYXN5bmMgbmV4dCgpIHtcbiAgICAgIGlmIChuID09PSAtMSkge1xuICAgICAgICBsZXQgYyA9IHQrKztcbiAgICAgICAgaWYgKGMgPj0gZS5sZW5ndGgpIHtcbiAgICAgICAgICBsZXQgcDIgPSByZSQxKCk7XG4gICAgICAgICAgcmV0dXJuIHIucHVzaChwMiksIGF3YWl0IHAyLnByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBlW2NdIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gdCA+IG4gPyB7IGRvbmU6IHRydWUsIHZhbHVlOiB2b2lkIDAgfSA6IGwoKTtcbiAgICB9IH07XG4gIH07XG59XG5mdW5jdGlvbiBKKG8pIHtcbiAgbGV0IGUgPSBbXSwgciA9IC0xLCB0ID0gLTEsIG4gPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgZm9yICg7IDsgKSB0cnkge1xuICAgIGxldCBhID0gbi5uZXh0KCk7XG4gICAgaWYgKGUucHVzaChhLnZhbHVlKSwgYS5kb25lKSB7XG4gICAgICB0ID0gZS5sZW5ndGggLSAxO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChhKSB7XG4gICAgciA9IGUubGVuZ3RoLCBlLnB1c2goYSk7XG4gIH1cbiAgcmV0dXJuIHsgdjogZSwgdDogciwgZDogdCB9O1xufVxuZnVuY3Rpb24gcHIobykge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGxldCBlID0gMDtcbiAgICByZXR1cm4geyBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sIG5leHQoKSB7XG4gICAgICBpZiAoZSA+IG8uZCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IHMgfTtcbiAgICAgIGxldCByID0gZSsrLCB0ID0gby52W3JdO1xuICAgICAgaWYgKHIgPT09IG8udCkgdGhyb3cgdDtcbiAgICAgIHJldHVybiB7IGRvbmU6IHIgPT09IG8uZCwgdmFsdWU6IHQgfTtcbiAgICB9IH07XG4gIH07XG59XG5hc3luYyBmdW5jdGlvbiBNZShvKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIFsxLCBhd2FpdCBvXTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBbMCwgZV07XG4gIH1cbn1cbnZhciBZID0gY2xhc3Mge1xuICBjb25zdHJ1Y3RvcihlKSB7XG4gICAgdGhpcy5tYXJrZWQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICAgIHRoaXMucGx1Z2lucyA9IGUucGx1Z2lucywgdGhpcy5mZWF0dXJlcyA9IDMxIF4gKGUuZGlzYWJsZWRGZWF0dXJlcyB8fCAwKSwgdGhpcy5yZWZzID0gZS5yZWZzIHx8IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gIH1cbiAgbWFya1JlZihlKSB7XG4gICAgdGhpcy5tYXJrZWQuYWRkKGUpO1xuICB9XG4gIGlzTWFya2VkKGUpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrZWQuaGFzKGUpO1xuICB9XG4gIGNyZWF0ZUluZGV4KGUpIHtcbiAgICBsZXQgciA9IHRoaXMucmVmcy5zaXplO1xuICAgIHJldHVybiB0aGlzLnJlZnMuc2V0KGUsIHIpLCByO1xuICB9XG4gIGdldEluZGV4ZWRWYWx1ZShlKSB7XG4gICAgbGV0IHIgPSB0aGlzLnJlZnMuZ2V0KGUpO1xuICAgIHJldHVybiByICE9IG51bGwgPyAodGhpcy5tYXJrUmVmKHIpLCB7IHR5cGU6IDEsIHZhbHVlOiBzcihyKSB9KSA6IHsgdHlwZTogMCwgdmFsdWU6IHRoaXMuY3JlYXRlSW5kZXgoZSkgfTtcbiAgfVxuICBnZXRSZWZlcmVuY2UoZSkge1xuICAgIGxldCByID0gdGhpcy5nZXRJbmRleGVkVmFsdWUoZSk7XG4gICAgcmV0dXJuIHIudHlwZSA9PT0gMSA/IHIgOiBqZShlKSA/IHsgdHlwZTogMiwgdmFsdWU6IG5yKHIudmFsdWUsIGUpIH0gOiByO1xuICB9XG4gIHBhcnNlV2VsbEtub3duU3ltYm9sKGUpIHtcbiAgICBsZXQgciA9IHRoaXMuZ2V0UmVmZXJlbmNlKGUpO1xuICAgIHJldHVybiByLnR5cGUgIT09IDAgPyByLnZhbHVlIDogKGYoZSBpbiBjZSwgbmV3IGcoZSkpLCBvcihyLnZhbHVlLCBlKSk7XG4gIH1cbiAgcGFyc2VTcGVjaWFsUmVmZXJlbmNlKGUpIHtcbiAgICBsZXQgciA9IHRoaXMuZ2V0SW5kZXhlZFZhbHVlKGxyW2VdKTtcbiAgICByZXR1cm4gci50eXBlID09PSAxID8gci52YWx1ZSA6IHUkMSgyNiwgci52YWx1ZSwgZSwgcywgcywgcywgcywgcywgcywgcywgcywgcyk7XG4gIH1cbiAgcGFyc2VJdGVyYXRvckZhY3RvcnkoKSB7XG4gICAgbGV0IGUgPSB0aGlzLmdldEluZGV4ZWRWYWx1ZShhcik7XG4gICAgcmV0dXJuIGUudHlwZSA9PT0gMSA/IGUudmFsdWUgOiB1JDEoMjcsIGUudmFsdWUsIHMsIHMsIHMsIHMsIHMsIHMsIHMsIHRoaXMucGFyc2VXZWxsS25vd25TeW1ib2woU3ltYm9sLml0ZXJhdG9yKSwgcywgcyk7XG4gIH1cbiAgcGFyc2VBc3luY0l0ZXJhdG9yRmFjdG9yeSgpIHtcbiAgICBsZXQgZSA9IHRoaXMuZ2V0SW5kZXhlZFZhbHVlKGlyKTtcbiAgICByZXR1cm4gZS50eXBlID09PSAxID8gZS52YWx1ZSA6IHUkMSgyOSwgZS52YWx1ZSwgcywgcywgcywgcywgcywgcywgW3RoaXMucGFyc2VTcGVjaWFsUmVmZXJlbmNlKDEpLCB0aGlzLnBhcnNlV2VsbEtub3duU3ltYm9sKFN5bWJvbC5hc3luY0l0ZXJhdG9yKV0sIHMsIHMsIHMpO1xuICB9XG4gIGNyZWF0ZU9iamVjdE5vZGUoZSwgciwgdCwgbikge1xuICAgIHJldHVybiB1JDEodCA/IDExIDogMTAsIGUsIHMsIHMsIHMsIHMsIG4sIHMsIHMsIHMsIHMsIGZlKHIpKTtcbiAgfVxuICBjcmVhdGVNYXBOb2RlKGUsIHIsIHQsIG4pIHtcbiAgICByZXR1cm4gdSQxKDgsIGUsIHMsIHMsIHMsIHMsIHMsIHsgazogciwgdjogdCwgczogbiB9LCBzLCB0aGlzLnBhcnNlU3BlY2lhbFJlZmVyZW5jZSgwKSwgcywgcyk7XG4gIH1cbiAgY3JlYXRlUHJvbWlzZUNvbnN0cnVjdG9yTm9kZShlLCByKSB7XG4gICAgcmV0dXJuIHUkMSgyMiwgZSwgciwgcywgcywgcywgcywgcywgcywgdGhpcy5wYXJzZVNwZWNpYWxSZWZlcmVuY2UoMSksIHMsIHMpO1xuICB9XG59O1xudmFyIGsgPSBjbGFzcyBleHRlbmRzIFkge1xuICBhc3luYyBwYXJzZUl0ZW1zKGUpIHtcbiAgICBsZXQgciA9IFtdO1xuICAgIGZvciAobGV0IHQgPSAwLCBuID0gZS5sZW5ndGg7IHQgPCBuOyB0KyspIHQgaW4gZSAmJiAoclt0XSA9IGF3YWl0IHRoaXMucGFyc2UoZVt0XSkpO1xuICAgIHJldHVybiByO1xuICB9XG4gIGFzeW5jIHBhcnNlQXJyYXkoZSwgcikge1xuICAgIHJldHVybiBOZShlLCByLCBhd2FpdCB0aGlzLnBhcnNlSXRlbXMocikpO1xuICB9XG4gIGFzeW5jIHBhcnNlUHJvcGVydGllcyhlKSB7XG4gICAgbGV0IHIgPSBPYmplY3QuZW50cmllcyhlKSwgdCA9IFtdLCBuID0gW107XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSByLmxlbmd0aDsgaSA8IGw7IGkrKykgdC5wdXNoKGQocltpXVswXSkpLCBuLnB1c2goYXdhaXQgdGhpcy5wYXJzZShyW2ldWzFdKSk7XG4gICAgbGV0IGEgPSBTeW1ib2wuaXRlcmF0b3I7XG4gICAgcmV0dXJuIGEgaW4gZSAmJiAodC5wdXNoKHRoaXMucGFyc2VXZWxsS25vd25TeW1ib2woYSkpLCBuLnB1c2goTSh0aGlzLnBhcnNlSXRlcmF0b3JGYWN0b3J5KCksIGF3YWl0IHRoaXMucGFyc2UoSihlKSkpKSksIGEgPSBTeW1ib2wuYXN5bmNJdGVyYXRvciwgYSBpbiBlICYmICh0LnB1c2godGhpcy5wYXJzZVdlbGxLbm93blN5bWJvbChhKSksIG4ucHVzaChVKHRoaXMucGFyc2VBc3luY0l0ZXJhdG9yRmFjdG9yeSgpLCBhd2FpdCB0aGlzLnBhcnNlKFZlKGUpKSkpKSwgYSA9IFN5bWJvbC50b1N0cmluZ1RhZywgYSBpbiBlICYmICh0LnB1c2godGhpcy5wYXJzZVdlbGxLbm93blN5bWJvbChhKSksIG4ucHVzaCh3KGVbYV0pKSksIGEgPSBTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlLCBhIGluIGUgJiYgKHQucHVzaCh0aGlzLnBhcnNlV2VsbEtub3duU3ltYm9sKGEpKSwgbi5wdXNoKGVbYV0gPyBJIDogQSkpLCB7IGs6IHQsIHY6IG4sIHM6IHQubGVuZ3RoIH07XG4gIH1cbiAgYXN5bmMgcGFyc2VQbGFpbk9iamVjdChlLCByLCB0KSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlT2JqZWN0Tm9kZShlLCByLCB0LCBhd2FpdCB0aGlzLnBhcnNlUHJvcGVydGllcyhyKSk7XG4gIH1cbiAgYXN5bmMgcGFyc2VCb3hlZChlLCByKSB7XG4gICAgcmV0dXJuIGJlKGUsIGF3YWl0IHRoaXMucGFyc2Uoci52YWx1ZU9mKCkpKTtcbiAgfVxuICBhc3luYyBwYXJzZVR5cGVkQXJyYXkoZSwgcikge1xuICAgIHJldHVybiB4ZShlLCByLCBhd2FpdCB0aGlzLnBhcnNlKHIuYnVmZmVyKSk7XG4gIH1cbiAgYXN5bmMgcGFyc2VCaWdJbnRUeXBlZEFycmF5KGUsIHIpIHtcbiAgICByZXR1cm4gSWUoZSwgciwgYXdhaXQgdGhpcy5wYXJzZShyLmJ1ZmZlcikpO1xuICB9XG4gIGFzeW5jIHBhcnNlRGF0YVZpZXcoZSwgcikge1xuICAgIHJldHVybiBBZShlLCByLCBhd2FpdCB0aGlzLnBhcnNlKHIuYnVmZmVyKSk7XG4gIH1cbiAgYXN5bmMgcGFyc2VFcnJvcihlLCByKSB7XG4gICAgbGV0IHQgPSBqKHIsIHRoaXMuZmVhdHVyZXMpO1xuICAgIHJldHVybiB3ZShlLCByLCB0ID8gYXdhaXQgdGhpcy5wYXJzZVByb3BlcnRpZXModCkgOiBzKTtcbiAgfVxuICBhc3luYyBwYXJzZUFnZ3JlZ2F0ZUVycm9yKGUsIHIpIHtcbiAgICBsZXQgdCA9IGoociwgdGhpcy5mZWF0dXJlcyk7XG4gICAgcmV0dXJuIEVlKGUsIHIsIHQgPyBhd2FpdCB0aGlzLnBhcnNlUHJvcGVydGllcyh0KSA6IHMpO1xuICB9XG4gIGFzeW5jIHBhcnNlTWFwKGUsIHIpIHtcbiAgICBsZXQgdCA9IFtdLCBuID0gW107XG4gICAgZm9yIChsZXQgW2EsIGldIG9mIHIuZW50cmllcygpKSB0LnB1c2goYXdhaXQgdGhpcy5wYXJzZShhKSksIG4ucHVzaChhd2FpdCB0aGlzLnBhcnNlKGkpKTtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNYXBOb2RlKGUsIHQsIG4sIHIuc2l6ZSk7XG4gIH1cbiAgYXN5bmMgcGFyc2VTZXQoZSwgcikge1xuICAgIGxldCB0ID0gW107XG4gICAgZm9yIChsZXQgbiBvZiByLmtleXMoKSkgdC5wdXNoKGF3YWl0IHRoaXMucGFyc2UobikpO1xuICAgIHJldHVybiBQZShlLCByLnNpemUsIHQpO1xuICB9XG4gIGFzeW5jIHBhcnNlUHJvbWlzZShlLCByKSB7XG4gICAgbGV0IFt0LCBuXSA9IGF3YWl0IE1lKHIpO1xuICAgIHJldHVybiB1JDEoMTIsIGUsIHQsIHMsIHMsIHMsIHMsIHMsIHMsIGF3YWl0IHRoaXMucGFyc2UobiksIHMsIHMpO1xuICB9XG4gIGFzeW5jIHBhcnNlUGx1Z2luKGUsIHIpIHtcbiAgICBsZXQgdCA9IHRoaXMucGx1Z2lucztcbiAgICBpZiAodCkgZm9yIChsZXQgbiA9IDAsIGEgPSB0Lmxlbmd0aDsgbiA8IGE7IG4rKykge1xuICAgICAgbGV0IGkgPSB0W25dO1xuICAgICAgaWYgKGkucGFyc2UuYXN5bmMgJiYgaS50ZXN0KHIpKSByZXR1cm4gXyhlLCBpLnRhZywgYXdhaXQgaS5wYXJzZS5hc3luYyhyLCB0aGlzLCB7IGlkOiBlIH0pKTtcbiAgICB9XG4gICAgcmV0dXJuIHM7XG4gIH1cbiAgYXN5bmMgcGFyc2VTdHJlYW0oZSwgcikge1xuICAgIHJldHVybiBMKGUsIHRoaXMucGFyc2VTcGVjaWFsUmVmZXJlbmNlKDQpLCBhd2FpdCBuZXcgUHJvbWlzZSgodCwgbikgPT4ge1xuICAgICAgbGV0IGEgPSBbXSwgaSA9IHIub24oeyBuZXh0OiAobCkgPT4ge1xuICAgICAgICB0aGlzLm1hcmtSZWYoZSksIHRoaXMucGFyc2UobCkudGhlbigoYykgPT4ge1xuICAgICAgICAgIGEucHVzaChSZShlLCBjKSk7XG4gICAgICAgIH0sIChjKSA9PiB7XG4gICAgICAgICAgbihjKSwgaSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIHRocm93OiAobCkgPT4ge1xuICAgICAgICB0aGlzLm1hcmtSZWYoZSksIHRoaXMucGFyc2UobCkudGhlbigoYykgPT4ge1xuICAgICAgICAgIGEucHVzaChPZShlLCBjKSksIHQoYSksIGkoKTtcbiAgICAgICAgfSwgKGMpID0+IHtcbiAgICAgICAgICBuKGMpLCBpKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgcmV0dXJuOiAobCkgPT4ge1xuICAgICAgICB0aGlzLm1hcmtSZWYoZSksIHRoaXMucGFyc2UobCkudGhlbigoYykgPT4ge1xuICAgICAgICAgIGEucHVzaChDZShlLCBjKSksIHQoYSksIGkoKTtcbiAgICAgICAgfSwgKGMpID0+IHtcbiAgICAgICAgICBuKGMpLCBpKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSB9KTtcbiAgICB9KSk7XG4gIH1cbiAgYXN5bmMgcGFyc2VPYmplY3QoZSwgcikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHIpKSByZXR1cm4gdGhpcy5wYXJzZUFycmF5KGUsIHIpO1xuICAgIGlmIChGZShyKSkgcmV0dXJuIHRoaXMucGFyc2VTdHJlYW0oZSwgcik7XG4gICAgbGV0IHQgPSByLmNvbnN0cnVjdG9yO1xuICAgIGlmICh0ID09PSBUKSByZXR1cm4gdGhpcy5wYXJzZShyLnJlcGxhY2VtZW50KTtcbiAgICBsZXQgbiA9IGF3YWl0IHRoaXMucGFyc2VQbHVnaW4oZSwgcik7XG4gICAgaWYgKG4pIHJldHVybiBuO1xuICAgIHN3aXRjaCAodCkge1xuICAgICAgY2FzZSBPYmplY3Q6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlUGxhaW5PYmplY3QoZSwgciwgZmFsc2UpO1xuICAgICAgY2FzZSBzOlxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVBsYWluT2JqZWN0KGUsIHIsIHRydWUpO1xuICAgICAgY2FzZSBEYXRlOlxuICAgICAgICByZXR1cm4gaGUoZSwgcik7XG4gICAgICBjYXNlIFJlZ0V4cDpcbiAgICAgICAgcmV0dXJuIHllKGUsIHIpO1xuICAgICAgY2FzZSBFcnJvcjpcbiAgICAgIGNhc2UgRXZhbEVycm9yOlxuICAgICAgY2FzZSBSYW5nZUVycm9yOlxuICAgICAgY2FzZSBSZWZlcmVuY2VFcnJvcjpcbiAgICAgIGNhc2UgU3ludGF4RXJyb3I6XG4gICAgICBjYXNlIFR5cGVFcnJvcjpcbiAgICAgIGNhc2UgVVJJRXJyb3I6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlRXJyb3IoZSwgcik7XG4gICAgICBjYXNlIE51bWJlcjpcbiAgICAgIGNhc2UgQm9vbGVhbjpcbiAgICAgIGNhc2UgU3RyaW5nOlxuICAgICAgY2FzZSBCaWdJbnQ6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlQm94ZWQoZSwgcik7XG4gICAgICBjYXNlIEFycmF5QnVmZmVyOlxuICAgICAgICByZXR1cm4gdmUoZSwgcik7XG4gICAgICBjYXNlIEludDhBcnJheTpcbiAgICAgIGNhc2UgSW50MTZBcnJheTpcbiAgICAgIGNhc2UgSW50MzJBcnJheTpcbiAgICAgIGNhc2UgVWludDhBcnJheTpcbiAgICAgIGNhc2UgVWludDE2QXJyYXk6XG4gICAgICBjYXNlIFVpbnQzMkFycmF5OlxuICAgICAgY2FzZSBVaW50OENsYW1wZWRBcnJheTpcbiAgICAgIGNhc2UgRmxvYXQzMkFycmF5OlxuICAgICAgY2FzZSBGbG9hdDY0QXJyYXk6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlVHlwZWRBcnJheShlLCByKTtcbiAgICAgIGNhc2UgRGF0YVZpZXc6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlRGF0YVZpZXcoZSwgcik7XG4gICAgICBjYXNlIE1hcDpcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VNYXAoZSwgcik7XG4gICAgICBjYXNlIFNldDpcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VTZXQoZSwgcik7XG4gICAgfVxuICAgIGlmICh0ID09PSBQcm9taXNlIHx8IHIgaW5zdGFuY2VvZiBQcm9taXNlKSByZXR1cm4gdGhpcy5wYXJzZVByb21pc2UoZSwgcik7XG4gICAgbGV0IGEgPSB0aGlzLmZlYXR1cmVzO1xuICAgIGlmIChhICYgMTYpIHN3aXRjaCAodCkge1xuICAgICAgY2FzZSBCaWdJbnQ2NEFycmF5OlxuICAgICAgY2FzZSBCaWdVaW50NjRBcnJheTpcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VCaWdJbnRUeXBlZEFycmF5KGUsIHIpO1xuICAgIH1cbiAgICBpZiAoYSAmIDEgJiYgdHlwZW9mIEFnZ3JlZ2F0ZUVycm9yICE9IFwidW5kZWZpbmVkXCIgJiYgKHQgPT09IEFnZ3JlZ2F0ZUVycm9yIHx8IHIgaW5zdGFuY2VvZiBBZ2dyZWdhdGVFcnJvcikpIHJldHVybiB0aGlzLnBhcnNlQWdncmVnYXRlRXJyb3IoZSwgcik7XG4gICAgaWYgKHIgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIHRoaXMucGFyc2VFcnJvcihlLCByKTtcbiAgICBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIHIgfHwgU3ltYm9sLmFzeW5jSXRlcmF0b3IgaW4gcikgcmV0dXJuIHRoaXMucGFyc2VQbGFpbk9iamVjdChlLCByLCAhIXQpO1xuICAgIHRocm93IG5ldyBnKHIpO1xuICB9XG4gIGFzeW5jIHBhcnNlRnVuY3Rpb24oZSkge1xuICAgIGxldCByID0gdGhpcy5nZXRSZWZlcmVuY2UoZSk7XG4gICAgaWYgKHIudHlwZSAhPT0gMCkgcmV0dXJuIHIudmFsdWU7XG4gICAgbGV0IHQgPSBhd2FpdCB0aGlzLnBhcnNlUGx1Z2luKHIudmFsdWUsIGUpO1xuICAgIGlmICh0KSByZXR1cm4gdDtcbiAgICB0aHJvdyBuZXcgZyhlKTtcbiAgfVxuICBhc3luYyBwYXJzZShlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgZSkge1xuICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgICAgcmV0dXJuIGUgPyBJIDogQTtcbiAgICAgIGNhc2UgXCJ1bmRlZmluZWRcIjpcbiAgICAgICAgcmV0dXJuIHBlO1xuICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICByZXR1cm4gdyhlKTtcbiAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgcmV0dXJuIGdlKGUpO1xuICAgICAgY2FzZSBcImJpZ2ludFwiOlxuICAgICAgICByZXR1cm4gU2UoZSk7XG4gICAgICBjYXNlIFwib2JqZWN0XCI6IHtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICBsZXQgciA9IHRoaXMuZ2V0UmVmZXJlbmNlKGUpO1xuICAgICAgICAgIHJldHVybiByLnR5cGUgPT09IDAgPyBhd2FpdCB0aGlzLnBhcnNlT2JqZWN0KHIudmFsdWUsIGUpIDogci52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGU7XG4gICAgICB9XG4gICAgICBjYXNlIFwic3ltYm9sXCI6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlV2VsbEtub3duU3ltYm9sKGUpO1xuICAgICAgY2FzZSBcImZ1bmN0aW9uXCI6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlRnVuY3Rpb24oZSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgZyhlKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgcGFyc2VUb3AoZSkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5wYXJzZShlKTtcbiAgICB9IGNhdGNoIChyKSB7XG4gICAgICB0aHJvdyByIGluc3RhbmNlb2YgRSA/IHIgOiBuZXcgRShyKTtcbiAgICB9XG4gIH1cbn07XG52YXIgJCA9IGNsYXNzIGV4dGVuZHMgayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy5tb2RlID0gXCJjcm9zc1wiO1xuICB9XG59O1xuZnVuY3Rpb24gZHIobykge1xuICBzd2l0Y2ggKG8pIHtcbiAgICBjYXNlIFwiSW50OEFycmF5XCI6XG4gICAgICByZXR1cm4gSW50OEFycmF5O1xuICAgIGNhc2UgXCJJbnQxNkFycmF5XCI6XG4gICAgICByZXR1cm4gSW50MTZBcnJheTtcbiAgICBjYXNlIFwiSW50MzJBcnJheVwiOlxuICAgICAgcmV0dXJuIEludDMyQXJyYXk7XG4gICAgY2FzZSBcIlVpbnQ4QXJyYXlcIjpcbiAgICAgIHJldHVybiBVaW50OEFycmF5O1xuICAgIGNhc2UgXCJVaW50MTZBcnJheVwiOlxuICAgICAgcmV0dXJuIFVpbnQxNkFycmF5O1xuICAgIGNhc2UgXCJVaW50MzJBcnJheVwiOlxuICAgICAgcmV0dXJuIFVpbnQzMkFycmF5O1xuICAgIGNhc2UgXCJVaW50OENsYW1wZWRBcnJheVwiOlxuICAgICAgcmV0dXJuIFVpbnQ4Q2xhbXBlZEFycmF5O1xuICAgIGNhc2UgXCJGbG9hdDMyQXJyYXlcIjpcbiAgICAgIHJldHVybiBGbG9hdDMyQXJyYXk7XG4gICAgY2FzZSBcIkZsb2F0NjRBcnJheVwiOlxuICAgICAgcmV0dXJuIEZsb2F0NjRBcnJheTtcbiAgICBjYXNlIFwiQmlnSW50NjRBcnJheVwiOlxuICAgICAgcmV0dXJuIEJpZ0ludDY0QXJyYXk7XG4gICAgY2FzZSBcIkJpZ1VpbnQ2NEFycmF5XCI6XG4gICAgICByZXR1cm4gQmlnVWludDY0QXJyYXk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBrZShvKTtcbiAgfVxufVxuZnVuY3Rpb24gbXIobywgZSkge1xuICBzd2l0Y2ggKGUpIHtcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZShvKTtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKG8pO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBPYmplY3Quc2VhbChvKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG87XG4gIH1cbn1cbnZhciBGID0gY2xhc3Mge1xuICBjb25zdHJ1Y3RvcihlKSB7XG4gICAgdGhpcy5wbHVnaW5zID0gZS5wbHVnaW5zLCB0aGlzLnJlZnMgPSBlLnJlZnMgfHwgLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgfVxuICBkZXNlcmlhbGl6ZVJlZmVyZW5jZShlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSwgSmUoTihlLnMpKSk7XG4gIH1cbiAgZGVzZXJpYWxpemVBcnJheShlKSB7XG4gICAgbGV0IHIgPSBlLmwsIHQgPSB0aGlzLmFzc2lnbkluZGV4ZWRWYWx1ZShlLmksIG5ldyBBcnJheShyKSksIG47XG4gICAgZm9yIChsZXQgYSA9IDA7IGEgPCByOyBhKyspIG4gPSBlLmFbYV0sIG4gJiYgKHRbYV0gPSB0aGlzLmRlc2VyaWFsaXplKG4pKTtcbiAgICByZXR1cm4gbXIodCwgZS5vKSwgdDtcbiAgfVxuICBkZXNlcmlhbGl6ZVByb3BlcnRpZXMoZSwgcikge1xuICAgIGxldCB0ID0gZS5zO1xuICAgIGlmICh0KSB7XG4gICAgICBsZXQgbiA9IGUuaywgYSA9IGUudjtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsOyBpIDwgdDsgaSsrKSBsID0gbltpXSwgdHlwZW9mIGwgPT0gXCJzdHJpbmdcIiA/IHJbTihsKV0gPSB0aGlzLmRlc2VyaWFsaXplKGFbaV0pIDogclt0aGlzLmRlc2VyaWFsaXplKGwpXSA9IHRoaXMuZGVzZXJpYWxpemUoYVtpXSk7XG4gICAgfVxuICAgIHJldHVybiByO1xuICB9XG4gIGRlc2VyaWFsaXplT2JqZWN0KGUpIHtcbiAgICBsZXQgciA9IHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSwgZS50ID09PSAxMCA/IHt9IDogLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICAgIHJldHVybiB0aGlzLmRlc2VyaWFsaXplUHJvcGVydGllcyhlLnAsIHIpLCBtcihyLCBlLm8pLCByO1xuICB9XG4gIGRlc2VyaWFsaXplRGF0ZShlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSwgbmV3IERhdGUoZS5zKSk7XG4gIH1cbiAgZGVzZXJpYWxpemVSZWdFeHAoZSkge1xuICAgIHJldHVybiB0aGlzLmFzc2lnbkluZGV4ZWRWYWx1ZShlLmksIG5ldyBSZWdFeHAoTihlLmMpLCBlLm0pKTtcbiAgfVxuICBkZXNlcmlhbGl6ZVNldChlKSB7XG4gICAgbGV0IHIgPSB0aGlzLmFzc2lnbkluZGV4ZWRWYWx1ZShlLmksIC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCkpLCB0ID0gZS5hO1xuICAgIGZvciAobGV0IG4gPSAwLCBhID0gZS5sOyBuIDwgYTsgbisrKSByLmFkZCh0aGlzLmRlc2VyaWFsaXplKHRbbl0pKTtcbiAgICByZXR1cm4gcjtcbiAgfVxuICBkZXNlcmlhbGl6ZU1hcChlKSB7XG4gICAgbGV0IHIgPSB0aGlzLmFzc2lnbkluZGV4ZWRWYWx1ZShlLmksIC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCkpLCB0ID0gZS5lLmssIG4gPSBlLmUudjtcbiAgICBmb3IgKGxldCBhID0gMCwgaSA9IGUuZS5zOyBhIDwgaTsgYSsrKSByLnNldCh0aGlzLmRlc2VyaWFsaXplKHRbYV0pLCB0aGlzLmRlc2VyaWFsaXplKG5bYV0pKTtcbiAgICByZXR1cm4gcjtcbiAgfVxuICBkZXNlcmlhbGl6ZUFycmF5QnVmZmVyKGUpIHtcbiAgICBsZXQgciA9IG5ldyBVaW50OEFycmF5KGUucyk7XG4gICAgcmV0dXJuIHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSwgci5idWZmZXIpO1xuICB9XG4gIGRlc2VyaWFsaXplVHlwZWRBcnJheShlKSB7XG4gICAgbGV0IHIgPSBkcihlLmMpLCB0ID0gdGhpcy5kZXNlcmlhbGl6ZShlLmYpO1xuICAgIHJldHVybiB0aGlzLmFzc2lnbkluZGV4ZWRWYWx1ZShlLmksIG5ldyByKHQsIGUuYiwgZS5sKSk7XG4gIH1cbiAgZGVzZXJpYWxpemVEYXRhVmlldyhlKSB7XG4gICAgbGV0IHIgPSB0aGlzLmRlc2VyaWFsaXplKGUuZik7XG4gICAgcmV0dXJuIHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSwgbmV3IERhdGFWaWV3KHIsIGUuYiwgZS5sKSk7XG4gIH1cbiAgZGVzZXJpYWxpemVEaWN0aW9uYXJ5KGUsIHIpIHtcbiAgICBpZiAoZS5wKSB7XG4gICAgICBsZXQgdCA9IHRoaXMuZGVzZXJpYWxpemVQcm9wZXJ0aWVzKGUucCwge30pO1xuICAgICAgT2JqZWN0LmFzc2lnbihyLCB0KTtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgZGVzZXJpYWxpemVBZ2dyZWdhdGVFcnJvcihlKSB7XG4gICAgbGV0IHIgPSB0aGlzLmFzc2lnbkluZGV4ZWRWYWx1ZShlLmksIG5ldyBBZ2dyZWdhdGVFcnJvcihbXSwgTihlLm0pKSk7XG4gICAgcmV0dXJuIHRoaXMuZGVzZXJpYWxpemVEaWN0aW9uYXJ5KGUsIHIpO1xuICB9XG4gIGRlc2VyaWFsaXplRXJyb3IoZSkge1xuICAgIGxldCByID0gWmVbZS5zXSwgdCA9IHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSwgbmV3IHIoTihlLm0pKSk7XG4gICAgcmV0dXJuIHRoaXMuZGVzZXJpYWxpemVEaWN0aW9uYXJ5KGUsIHQpO1xuICB9XG4gIGRlc2VyaWFsaXplUHJvbWlzZShlKSB7XG4gICAgbGV0IHIgPSByZSQxKCksIHQgPSB0aGlzLmFzc2lnbkluZGV4ZWRWYWx1ZShlLmksIHIpLCBuID0gdGhpcy5kZXNlcmlhbGl6ZShlLmYpO1xuICAgIHJldHVybiBlLnMgPyByLnJlc29sdmUobikgOiByLnJlamVjdChuKSwgdC5wcm9taXNlO1xuICB9XG4gIGRlc2VyaWFsaXplQm94ZWQoZSkge1xuICAgIHJldHVybiB0aGlzLmFzc2lnbkluZGV4ZWRWYWx1ZShlLmksIE9iamVjdCh0aGlzLmRlc2VyaWFsaXplKGUuZikpKTtcbiAgfVxuICBkZXNlcmlhbGl6ZVBsdWdpbihlKSB7XG4gICAgbGV0IHIgPSB0aGlzLnBsdWdpbnM7XG4gICAgaWYgKHIpIHtcbiAgICAgIGxldCB0ID0gTihlLmMpO1xuICAgICAgZm9yIChsZXQgbiA9IDAsIGEgPSByLmxlbmd0aDsgbiA8IGE7IG4rKykge1xuICAgICAgICBsZXQgaSA9IHJbbl07XG4gICAgICAgIGlmIChpLnRhZyA9PT0gdCkgcmV0dXJuIHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSwgaS5kZXNlcmlhbGl6ZShlLnMsIHRoaXMsIHsgaWQ6IGUuaSB9KSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBXKGUuYyk7XG4gIH1cbiAgZGVzZXJpYWxpemVQcm9taXNlQ29uc3RydWN0b3IoZSkge1xuICAgIHJldHVybiB0aGlzLmFzc2lnbkluZGV4ZWRWYWx1ZShlLmksIHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUucywgcmUkMSgpKS5wcm9taXNlKTtcbiAgfVxuICBkZXNlcmlhbGl6ZVByb21pc2VSZXNvbHZlKGUpIHtcbiAgICBsZXQgciA9IHRoaXMucmVmcy5nZXQoZS5pKTtcbiAgICBmKHIsIG5ldyBQKFwiUHJvbWlzZVwiKSksIHIucmVzb2x2ZSh0aGlzLmRlc2VyaWFsaXplKGUuYVsxXSkpO1xuICB9XG4gIGRlc2VyaWFsaXplUHJvbWlzZVJlamVjdChlKSB7XG4gICAgbGV0IHIgPSB0aGlzLnJlZnMuZ2V0KGUuaSk7XG4gICAgZihyLCBuZXcgUChcIlByb21pc2VcIikpLCByLnJlamVjdCh0aGlzLmRlc2VyaWFsaXplKGUuYVsxXSkpO1xuICB9XG4gIGRlc2VyaWFsaXplSXRlcmF0b3JGYWN0b3J5SW5zdGFuY2UoZSkge1xuICAgIHRoaXMuZGVzZXJpYWxpemUoZS5hWzBdKTtcbiAgICBsZXQgciA9IHRoaXMuZGVzZXJpYWxpemUoZS5hWzFdKTtcbiAgICByZXR1cm4gcHIocik7XG4gIH1cbiAgZGVzZXJpYWxpemVBc3luY0l0ZXJhdG9yRmFjdG9yeUluc3RhbmNlKGUpIHtcbiAgICB0aGlzLmRlc2VyaWFsaXplKGUuYVswXSk7XG4gICAgbGV0IHIgPSB0aGlzLmRlc2VyaWFsaXplKGUuYVsxXSk7XG4gICAgcmV0dXJuIHVyKHIpO1xuICB9XG4gIGRlc2VyaWFsaXplU3RyZWFtQ29uc3RydWN0b3IoZSkge1xuICAgIGxldCByID0gdGhpcy5hc3NpZ25JbmRleGVkVmFsdWUoZS5pLCBLKCkpLCB0ID0gZS5hLmxlbmd0aDtcbiAgICBpZiAodCkgZm9yIChsZXQgbiA9IDA7IG4gPCB0OyBuKyspIHRoaXMuZGVzZXJpYWxpemUoZS5hW25dKTtcbiAgICByZXR1cm4gcjtcbiAgfVxuICBkZXNlcmlhbGl6ZVN0cmVhbU5leHQoZSkge1xuICAgIGxldCByID0gdGhpcy5yZWZzLmdldChlLmkpO1xuICAgIGYociwgbmV3IFAoXCJTdHJlYW1cIikpLCByLm5leHQodGhpcy5kZXNlcmlhbGl6ZShlLmYpKTtcbiAgfVxuICBkZXNlcmlhbGl6ZVN0cmVhbVRocm93KGUpIHtcbiAgICBsZXQgciA9IHRoaXMucmVmcy5nZXQoZS5pKTtcbiAgICBmKHIsIG5ldyBQKFwiU3RyZWFtXCIpKSwgci50aHJvdyh0aGlzLmRlc2VyaWFsaXplKGUuZikpO1xuICB9XG4gIGRlc2VyaWFsaXplU3RyZWFtUmV0dXJuKGUpIHtcbiAgICBsZXQgciA9IHRoaXMucmVmcy5nZXQoZS5pKTtcbiAgICBmKHIsIG5ldyBQKFwiU3RyZWFtXCIpKSwgci5yZXR1cm4odGhpcy5kZXNlcmlhbGl6ZShlLmYpKTtcbiAgfVxuICBkZXNlcmlhbGl6ZUl0ZXJhdG9yRmFjdG9yeShlKSB7XG4gICAgdGhpcy5kZXNlcmlhbGl6ZShlLmYpO1xuICB9XG4gIGRlc2VyaWFsaXplQXN5bmNJdGVyYXRvckZhY3RvcnkoZSkge1xuICAgIHRoaXMuZGVzZXJpYWxpemUoZS5hWzFdKTtcbiAgfVxuICBkZXNlcmlhbGl6ZVRvcChlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0aGlzLmRlc2VyaWFsaXplKGUpO1xuICAgIH0gY2F0Y2ggKHIpIHtcbiAgICAgIHRocm93IG5ldyB6ZShyKTtcbiAgICB9XG4gIH1cbiAgZGVzZXJpYWxpemUoZSkge1xuICAgIHN3aXRjaCAoZS50KSB7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBIZVtlLnNdO1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gZS5zO1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gTihlLnMpO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gQmlnSW50KGUucyk7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHJldHVybiB0aGlzLnJlZnMuZ2V0KGUuaSk7XG4gICAgICBjYXNlIDE4OlxuICAgICAgICByZXR1cm4gdGhpcy5kZXNlcmlhbGl6ZVJlZmVyZW5jZShlKTtcbiAgICAgIGNhc2UgOTpcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzZXJpYWxpemVBcnJheShlKTtcbiAgICAgIGNhc2UgMTA6XG4gICAgICBjYXNlIDExOlxuICAgICAgICByZXR1cm4gdGhpcy5kZXNlcmlhbGl6ZU9iamVjdChlKTtcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzZXJpYWxpemVEYXRlKGUpO1xuICAgICAgY2FzZSA2OlxuICAgICAgICByZXR1cm4gdGhpcy5kZXNlcmlhbGl6ZVJlZ0V4cChlKTtcbiAgICAgIGNhc2UgNzpcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzZXJpYWxpemVTZXQoZSk7XG4gICAgICBjYXNlIDg6XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2VyaWFsaXplTWFwKGUpO1xuICAgICAgY2FzZSAxOTpcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzZXJpYWxpemVBcnJheUJ1ZmZlcihlKTtcbiAgICAgIGNhc2UgMTY6XG4gICAgICBjYXNlIDE1OlxuICAgICAgICByZXR1cm4gdGhpcy5kZXNlcmlhbGl6ZVR5cGVkQXJyYXkoZSk7XG4gICAgICBjYXNlIDIwOlxuICAgICAgICByZXR1cm4gdGhpcy5kZXNlcmlhbGl6ZURhdGFWaWV3KGUpO1xuICAgICAgY2FzZSAxNDpcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzZXJpYWxpemVBZ2dyZWdhdGVFcnJvcihlKTtcbiAgICAgIGNhc2UgMTM6XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2VyaWFsaXplRXJyb3IoZSk7XG4gICAgICBjYXNlIDEyOlxuICAgICAgICByZXR1cm4gdGhpcy5kZXNlcmlhbGl6ZVByb21pc2UoZSk7XG4gICAgICBjYXNlIDE3OlxuICAgICAgICByZXR1cm4gR2VbZS5zXTtcbiAgICAgIGNhc2UgMjE6XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2VyaWFsaXplQm94ZWQoZSk7XG4gICAgICBjYXNlIDI1OlxuICAgICAgICByZXR1cm4gdGhpcy5kZXNlcmlhbGl6ZVBsdWdpbihlKTtcbiAgICAgIGNhc2UgMjI6XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2VyaWFsaXplUHJvbWlzZUNvbnN0cnVjdG9yKGUpO1xuICAgICAgY2FzZSAyMzpcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzZXJpYWxpemVQcm9taXNlUmVzb2x2ZShlKTtcbiAgICAgIGNhc2UgMjQ6XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2VyaWFsaXplUHJvbWlzZVJlamVjdChlKTtcbiAgICAgIGNhc2UgMjg6XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2VyaWFsaXplSXRlcmF0b3JGYWN0b3J5SW5zdGFuY2UoZSk7XG4gICAgICBjYXNlIDMwOlxuICAgICAgICByZXR1cm4gdGhpcy5kZXNlcmlhbGl6ZUFzeW5jSXRlcmF0b3JGYWN0b3J5SW5zdGFuY2UoZSk7XG4gICAgICBjYXNlIDMxOlxuICAgICAgICByZXR1cm4gdGhpcy5kZXNlcmlhbGl6ZVN0cmVhbUNvbnN0cnVjdG9yKGUpO1xuICAgICAgY2FzZSAzMjpcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzZXJpYWxpemVTdHJlYW1OZXh0KGUpO1xuICAgICAgY2FzZSAzMzpcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzZXJpYWxpemVTdHJlYW1UaHJvdyhlKTtcbiAgICAgIGNhc2UgMzQ6XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2VyaWFsaXplU3RyZWFtUmV0dXJuKGUpO1xuICAgICAgY2FzZSAyNzpcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzZXJpYWxpemVJdGVyYXRvckZhY3RvcnkoZSk7XG4gICAgICBjYXNlIDI5OlxuICAgICAgICByZXR1cm4gdGhpcy5kZXNlcmlhbGl6ZUFzeW5jSXRlcmF0b3JGYWN0b3J5KGUpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IHkoZSk7XG4gICAgfVxuICB9XG59O1xudmFyIGtyID0gL15bJEEtWl9dWzAtOUEtWl8kXSokL2k7XG5mdW5jdGlvbiBMZShvKSB7XG4gIGxldCBlID0gb1swXTtcbiAgcmV0dXJuIChlID09PSBcIiRcIiB8fCBlID09PSBcIl9cIiB8fCBlID49IFwiQVwiICYmIGUgPD0gXCJaXCIgfHwgZSA+PSBcImFcIiAmJiBlIDw9IFwielwiKSAmJiBrci50ZXN0KG8pO1xufVxuZnVuY3Rpb24gc2Uobykge1xuICBzd2l0Y2ggKG8udCkge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiBvLnMgKyBcIj1cIiArIG8udjtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gby5zICsgXCIuc2V0KFwiICsgby5rICsgXCIsXCIgKyBvLnYgKyBcIilcIjtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gby5zICsgXCIuYWRkKFwiICsgby52ICsgXCIpXCI7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIG8ucyArIFwiLmRlbGV0ZShcIiArIG8uayArIFwiKVwiO1xuICB9XG59XG5mdW5jdGlvbiBGcihvKSB7XG4gIGxldCBlID0gW10sIHIgPSBvWzBdO1xuICBmb3IgKGxldCB0ID0gMSwgbiA9IG8ubGVuZ3RoLCBhLCBpID0gcjsgdCA8IG47IHQrKykgYSA9IG9bdF0sIGEudCA9PT0gMCAmJiBhLnYgPT09IGkudiA/IHIgPSB7IHQ6IDAsIHM6IGEucywgazogcywgdjogc2UocikgfSA6IGEudCA9PT0gMiAmJiBhLnMgPT09IGkucyA/IHIgPSB7IHQ6IDIsIHM6IHNlKHIpLCBrOiBhLmssIHY6IGEudiB9IDogYS50ID09PSAxICYmIGEucyA9PT0gaS5zID8gciA9IHsgdDogMSwgczogc2UociksIGs6IHMsIHY6IGEudiB9IDogYS50ID09PSAzICYmIGEucyA9PT0gaS5zID8gciA9IHsgdDogMywgczogc2UociksIGs6IGEuaywgdjogcyB9IDogKGUucHVzaChyKSwgciA9IGEpLCBpID0gYTtcbiAgcmV0dXJuIGUucHVzaChyKSwgZTtcbn1cbmZ1bmN0aW9uIGZyKG8pIHtcbiAgaWYgKG8ubGVuZ3RoKSB7XG4gICAgbGV0IGUgPSBcIlwiLCByID0gRnIobyk7XG4gICAgZm9yIChsZXQgdCA9IDAsIG4gPSByLmxlbmd0aDsgdCA8IG47IHQrKykgZSArPSBzZShyW3RdKSArIFwiLFwiO1xuICAgIHJldHVybiBlO1xuICB9XG4gIHJldHVybiBzO1xufVxudmFyIFZyID0gXCJPYmplY3QuY3JlYXRlKG51bGwpXCIsIERyID0gXCJuZXcgU2V0XCIsIEJyID0gXCJuZXcgTWFwXCIsIGpyID0gXCJQcm9taXNlLnJlc29sdmVcIiwgX3IgPSBcIlByb21pc2UucmVqZWN0XCIsIE1yID0geyAzOiBcIk9iamVjdC5mcmVlemVcIiwgMjogXCJPYmplY3Quc2VhbFwiLCAxOiBcIk9iamVjdC5wcmV2ZW50RXh0ZW5zaW9uc1wiLCAwOiBzIH0sIFYgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGUpIHtcbiAgICB0aGlzLnN0YWNrID0gW107XG4gICAgdGhpcy5mbGFncyA9IFtdO1xuICAgIHRoaXMuYXNzaWdubWVudHMgPSBbXTtcbiAgICB0aGlzLnBsdWdpbnMgPSBlLnBsdWdpbnMsIHRoaXMuZmVhdHVyZXMgPSBlLmZlYXR1cmVzLCB0aGlzLm1hcmtlZCA9IG5ldyBTZXQoZS5tYXJrZWRSZWZzKTtcbiAgfVxuICBjcmVhdGVGdW5jdGlvbihlLCByKSB7XG4gICAgcmV0dXJuIHokMSh0aGlzLmZlYXR1cmVzLCBlLCByKTtcbiAgfVxuICBjcmVhdGVFZmZlY3RmdWxGdW5jdGlvbihlLCByKSB7XG4gICAgcmV0dXJuIFModGhpcy5mZWF0dXJlcywgZSwgcik7XG4gIH1cbiAgbWFya1JlZihlKSB7XG4gICAgdGhpcy5tYXJrZWQuYWRkKGUpO1xuICB9XG4gIGlzTWFya2VkKGUpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrZWQuaGFzKGUpO1xuICB9XG4gIHB1c2hPYmplY3RGbGFnKGUsIHIpIHtcbiAgICBlICE9PSAwICYmICh0aGlzLm1hcmtSZWYociksIHRoaXMuZmxhZ3MucHVzaCh7IHR5cGU6IGUsIHZhbHVlOiB0aGlzLmdldFJlZlBhcmFtKHIpIH0pKTtcbiAgfVxuICByZXNvbHZlRmxhZ3MoKSB7XG4gICAgbGV0IGUgPSBcIlwiO1xuICAgIGZvciAobGV0IHIgPSAwLCB0ID0gdGhpcy5mbGFncywgbiA9IHQubGVuZ3RoOyByIDwgbjsgcisrKSB7XG4gICAgICBsZXQgYSA9IHRbcl07XG4gICAgICBlICs9IE1yW2EudHlwZV0gKyBcIihcIiArIGEudmFsdWUgKyBcIiksXCI7XG4gICAgfVxuICAgIHJldHVybiBlO1xuICB9XG4gIHJlc29sdmVQYXRjaGVzKCkge1xuICAgIGxldCBlID0gZnIodGhpcy5hc3NpZ25tZW50cyksIHIgPSB0aGlzLnJlc29sdmVGbGFncygpO1xuICAgIHJldHVybiBlID8gciA/IGUgKyByIDogZSA6IHI7XG4gIH1cbiAgY3JlYXRlQXNzaWdubWVudChlLCByKSB7XG4gICAgdGhpcy5hc3NpZ25tZW50cy5wdXNoKHsgdDogMCwgczogZSwgazogcywgdjogciB9KTtcbiAgfVxuICBjcmVhdGVBZGRBc3NpZ25tZW50KGUsIHIpIHtcbiAgICB0aGlzLmFzc2lnbm1lbnRzLnB1c2goeyB0OiAxLCBzOiB0aGlzLmdldFJlZlBhcmFtKGUpLCBrOiBzLCB2OiByIH0pO1xuICB9XG4gIGNyZWF0ZVNldEFzc2lnbm1lbnQoZSwgciwgdCkge1xuICAgIHRoaXMuYXNzaWdubWVudHMucHVzaCh7IHQ6IDIsIHM6IHRoaXMuZ2V0UmVmUGFyYW0oZSksIGs6IHIsIHY6IHQgfSk7XG4gIH1cbiAgY3JlYXRlRGVsZXRlQXNzaWdubWVudChlLCByKSB7XG4gICAgdGhpcy5hc3NpZ25tZW50cy5wdXNoKHsgdDogMywgczogdGhpcy5nZXRSZWZQYXJhbShlKSwgazogciwgdjogcyB9KTtcbiAgfVxuICBjcmVhdGVBcnJheUFzc2lnbihlLCByLCB0KSB7XG4gICAgdGhpcy5jcmVhdGVBc3NpZ25tZW50KHRoaXMuZ2V0UmVmUGFyYW0oZSkgKyBcIltcIiArIHIgKyBcIl1cIiwgdCk7XG4gIH1cbiAgY3JlYXRlT2JqZWN0QXNzaWduKGUsIHIsIHQpIHtcbiAgICB0aGlzLmNyZWF0ZUFzc2lnbm1lbnQodGhpcy5nZXRSZWZQYXJhbShlKSArIFwiLlwiICsgciwgdCk7XG4gIH1cbiAgaXNJbmRleGVkVmFsdWVJblN0YWNrKGUpIHtcbiAgICByZXR1cm4gZS50ID09PSA0ICYmIHRoaXMuc3RhY2suaW5jbHVkZXMoZS5pKTtcbiAgfVxuICBzZXJpYWxpemVSZWZlcmVuY2UoZSkge1xuICAgIHJldHVybiB0aGlzLmFzc2lnbkluZGV4ZWRWYWx1ZShlLmksIE8gKyAnLmdldChcIicgKyBlLnMgKyAnXCIpJyk7XG4gIH1cbiAgc2VyaWFsaXplQXJyYXlJdGVtKGUsIHIsIHQpIHtcbiAgICByZXR1cm4gciA/IHRoaXMuaXNJbmRleGVkVmFsdWVJblN0YWNrKHIpID8gKHRoaXMubWFya1JlZihlKSwgdGhpcy5jcmVhdGVBcnJheUFzc2lnbihlLCB0LCB0aGlzLmdldFJlZlBhcmFtKHIuaSkpLCBcIlwiKSA6IHRoaXMuc2VyaWFsaXplKHIpIDogXCJcIjtcbiAgfVxuICBzZXJpYWxpemVBcnJheShlKSB7XG4gICAgbGV0IHIgPSBlLmk7XG4gICAgaWYgKGUubCkge1xuICAgICAgdGhpcy5zdGFjay5wdXNoKHIpO1xuICAgICAgbGV0IHQgPSBlLmEsIG4gPSB0aGlzLnNlcmlhbGl6ZUFycmF5SXRlbShyLCB0WzBdLCAwKSwgYSA9IG4gPT09IFwiXCI7XG4gICAgICBmb3IgKGxldCBpID0gMSwgbCA9IGUubCwgYzsgaSA8IGw7IGkrKykgYyA9IHRoaXMuc2VyaWFsaXplQXJyYXlJdGVtKHIsIHRbaV0sIGkpLCBuICs9IFwiLFwiICsgYywgYSA9IGMgPT09IFwiXCI7XG4gICAgICByZXR1cm4gdGhpcy5zdGFjay5wb3AoKSwgdGhpcy5wdXNoT2JqZWN0RmxhZyhlLm8sIGUuaSksIHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKHIsIFwiW1wiICsgbiArIChhID8gXCIsXVwiIDogXCJdXCIpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKHIsIFwiW11cIik7XG4gIH1cbiAgc2VyaWFsaXplUHJvcGVydHkoZSwgciwgdCkge1xuICAgIGlmICh0eXBlb2YgciA9PSBcInN0cmluZ1wiKSB7XG4gICAgICBsZXQgbiA9IE51bWJlcihyKSwgYSA9IG4gPj0gMCAmJiBuLnRvU3RyaW5nKCkgPT09IHIgfHwgTGUocik7XG4gICAgICBpZiAodGhpcy5pc0luZGV4ZWRWYWx1ZUluU3RhY2sodCkpIHtcbiAgICAgICAgbGV0IGkgPSB0aGlzLmdldFJlZlBhcmFtKHQuaSk7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcmtSZWYoZS5pKSwgYSAmJiBuICE9PSBuID8gdGhpcy5jcmVhdGVPYmplY3RBc3NpZ24oZS5pLCByLCBpKSA6IHRoaXMuY3JlYXRlQXJyYXlBc3NpZ24oZS5pLCBhID8gciA6ICdcIicgKyByICsgJ1wiJywgaSksIFwiXCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gKGEgPyByIDogJ1wiJyArIHIgKyAnXCInKSArIFwiOlwiICsgdGhpcy5zZXJpYWxpemUodCk7XG4gICAgfVxuICAgIHJldHVybiBcIltcIiArIHRoaXMuc2VyaWFsaXplKHIpICsgXCJdOlwiICsgdGhpcy5zZXJpYWxpemUodCk7XG4gIH1cbiAgc2VyaWFsaXplUHJvcGVydGllcyhlLCByKSB7XG4gICAgbGV0IHQgPSByLnM7XG4gICAgaWYgKHQpIHtcbiAgICAgIGxldCBuID0gci5rLCBhID0gci52O1xuICAgICAgdGhpcy5zdGFjay5wdXNoKGUuaSk7XG4gICAgICBsZXQgaSA9IHRoaXMuc2VyaWFsaXplUHJvcGVydHkoZSwgblswXSwgYVswXSk7XG4gICAgICBmb3IgKGxldCBsID0gMSwgYyA9IGk7IGwgPCB0OyBsKyspIGMgPSB0aGlzLnNlcmlhbGl6ZVByb3BlcnR5KGUsIG5bbF0sIGFbbF0pLCBpICs9IChjICYmIGkgJiYgXCIsXCIpICsgYztcbiAgICAgIHJldHVybiB0aGlzLnN0YWNrLnBvcCgpLCBcIntcIiArIGkgKyBcIn1cIjtcbiAgICB9XG4gICAgcmV0dXJuIFwie31cIjtcbiAgfVxuICBzZXJpYWxpemVPYmplY3QoZSkge1xuICAgIHJldHVybiB0aGlzLnB1c2hPYmplY3RGbGFnKGUubywgZS5pKSwgdGhpcy5hc3NpZ25JbmRleGVkVmFsdWUoZS5pLCB0aGlzLnNlcmlhbGl6ZVByb3BlcnRpZXMoZSwgZS5wKSk7XG4gIH1cbiAgc2VyaWFsaXplV2l0aE9iamVjdEFzc2lnbihlLCByLCB0KSB7XG4gICAgbGV0IG4gPSB0aGlzLnNlcmlhbGl6ZVByb3BlcnRpZXMoZSwgcik7XG4gICAgcmV0dXJuIG4gIT09IFwie31cIiA/IFwiT2JqZWN0LmFzc2lnbihcIiArIHQgKyBcIixcIiArIG4gKyBcIilcIiA6IHQ7XG4gIH1cbiAgc2VyaWFsaXplU3RyaW5nS2V5QXNzaWdubWVudChlLCByLCB0LCBuKSB7XG4gICAgbGV0IGEgPSB0aGlzLnNlcmlhbGl6ZShuKSwgaSA9IE51bWJlcih0KSwgbCA9IGkgPj0gMCAmJiBpLnRvU3RyaW5nKCkgPT09IHQgfHwgTGUodCk7XG4gICAgaWYgKHRoaXMuaXNJbmRleGVkVmFsdWVJblN0YWNrKG4pKSBsICYmIGkgIT09IGkgPyB0aGlzLmNyZWF0ZU9iamVjdEFzc2lnbihlLmksIHQsIGEpIDogdGhpcy5jcmVhdGVBcnJheUFzc2lnbihlLmksIGwgPyB0IDogJ1wiJyArIHQgKyAnXCInLCBhKTtcbiAgICBlbHNlIHtcbiAgICAgIGxldCBjID0gdGhpcy5hc3NpZ25tZW50cztcbiAgICAgIHRoaXMuYXNzaWdubWVudHMgPSByLCBsICYmIGkgIT09IGkgPyB0aGlzLmNyZWF0ZU9iamVjdEFzc2lnbihlLmksIHQsIGEpIDogdGhpcy5jcmVhdGVBcnJheUFzc2lnbihlLmksIGwgPyB0IDogJ1wiJyArIHQgKyAnXCInLCBhKSwgdGhpcy5hc3NpZ25tZW50cyA9IGM7XG4gICAgfVxuICB9XG4gIHNlcmlhbGl6ZUFzc2lnbm1lbnQoZSwgciwgdCwgbikge1xuICAgIGlmICh0eXBlb2YgdCA9PSBcInN0cmluZ1wiKSB0aGlzLnNlcmlhbGl6ZVN0cmluZ0tleUFzc2lnbm1lbnQoZSwgciwgdCwgbik7XG4gICAgZWxzZSB7XG4gICAgICBsZXQgYSA9IHRoaXMuc3RhY2s7XG4gICAgICB0aGlzLnN0YWNrID0gW107XG4gICAgICBsZXQgaSA9IHRoaXMuc2VyaWFsaXplKG4pO1xuICAgICAgdGhpcy5zdGFjayA9IGE7XG4gICAgICBsZXQgbCA9IHRoaXMuYXNzaWdubWVudHM7XG4gICAgICB0aGlzLmFzc2lnbm1lbnRzID0gciwgdGhpcy5jcmVhdGVBcnJheUFzc2lnbihlLmksIHRoaXMuc2VyaWFsaXplKHQpLCBpKSwgdGhpcy5hc3NpZ25tZW50cyA9IGw7XG4gICAgfVxuICB9XG4gIHNlcmlhbGl6ZUFzc2lnbm1lbnRzKGUsIHIpIHtcbiAgICBsZXQgdCA9IHIucztcbiAgICBpZiAodCkge1xuICAgICAgbGV0IG4gPSBbXSwgYSA9IHIuaywgaSA9IHIudjtcbiAgICAgIHRoaXMuc3RhY2sucHVzaChlLmkpO1xuICAgICAgZm9yIChsZXQgbCA9IDA7IGwgPCB0OyBsKyspIHRoaXMuc2VyaWFsaXplQXNzaWdubWVudChlLCBuLCBhW2xdLCBpW2xdKTtcbiAgICAgIHJldHVybiB0aGlzLnN0YWNrLnBvcCgpLCBmcihuKTtcbiAgICB9XG4gICAgcmV0dXJuIHM7XG4gIH1cbiAgc2VyaWFsaXplRGljdGlvbmFyeShlLCByKSB7XG4gICAgaWYgKGUucCkgaWYgKHRoaXMuZmVhdHVyZXMgJiA4KSByID0gdGhpcy5zZXJpYWxpemVXaXRoT2JqZWN0QXNzaWduKGUsIGUucCwgcik7XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLm1hcmtSZWYoZS5pKTtcbiAgICAgIGxldCB0ID0gdGhpcy5zZXJpYWxpemVBc3NpZ25tZW50cyhlLCBlLnApO1xuICAgICAgaWYgKHQpIHJldHVybiBcIihcIiArIHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSwgcikgKyBcIixcIiArIHQgKyB0aGlzLmdldFJlZlBhcmFtKGUuaSkgKyBcIilcIjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSwgcik7XG4gIH1cbiAgc2VyaWFsaXplTnVsbENvbnN0cnVjdG9yKGUpIHtcbiAgICByZXR1cm4gdGhpcy5wdXNoT2JqZWN0RmxhZyhlLm8sIGUuaSksIHRoaXMuc2VyaWFsaXplRGljdGlvbmFyeShlLCBWcik7XG4gIH1cbiAgc2VyaWFsaXplRGF0ZShlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSwgJ25ldyBEYXRlKFwiJyArIGUucyArICdcIiknKTtcbiAgfVxuICBzZXJpYWxpemVSZWdFeHAoZSkge1xuICAgIHJldHVybiB0aGlzLmFzc2lnbkluZGV4ZWRWYWx1ZShlLmksIFwiL1wiICsgZS5jICsgXCIvXCIgKyBlLm0pO1xuICB9XG4gIHNlcmlhbGl6ZVNldEl0ZW0oZSwgcikge1xuICAgIHJldHVybiB0aGlzLmlzSW5kZXhlZFZhbHVlSW5TdGFjayhyKSA/ICh0aGlzLm1hcmtSZWYoZSksIHRoaXMuY3JlYXRlQWRkQXNzaWdubWVudChlLCB0aGlzLmdldFJlZlBhcmFtKHIuaSkpLCBcIlwiKSA6IHRoaXMuc2VyaWFsaXplKHIpO1xuICB9XG4gIHNlcmlhbGl6ZVNldChlKSB7XG4gICAgbGV0IHIgPSBEciwgdCA9IGUubCwgbiA9IGUuaTtcbiAgICBpZiAodCkge1xuICAgICAgbGV0IGEgPSBlLmE7XG4gICAgICB0aGlzLnN0YWNrLnB1c2gobik7XG4gICAgICBsZXQgaSA9IHRoaXMuc2VyaWFsaXplU2V0SXRlbShuLCBhWzBdKTtcbiAgICAgIGZvciAobGV0IGwgPSAxLCBjID0gaTsgbCA8IHQ7IGwrKykgYyA9IHRoaXMuc2VyaWFsaXplU2V0SXRlbShuLCBhW2xdKSwgaSArPSAoYyAmJiBpICYmIFwiLFwiKSArIGM7XG4gICAgICB0aGlzLnN0YWNrLnBvcCgpLCBpICYmIChyICs9IFwiKFtcIiArIGkgKyBcIl0pXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5hc3NpZ25JbmRleGVkVmFsdWUobiwgcik7XG4gIH1cbiAgc2VyaWFsaXplTWFwRW50cnkoZSwgciwgdCwgbikge1xuICAgIGlmICh0aGlzLmlzSW5kZXhlZFZhbHVlSW5TdGFjayhyKSkge1xuICAgICAgbGV0IGEgPSB0aGlzLmdldFJlZlBhcmFtKHIuaSk7XG4gICAgICBpZiAodGhpcy5tYXJrUmVmKGUpLCB0aGlzLmlzSW5kZXhlZFZhbHVlSW5TdGFjayh0KSkge1xuICAgICAgICBsZXQgbCA9IHRoaXMuZ2V0UmVmUGFyYW0odC5pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU2V0QXNzaWdubWVudChlLCBhLCBsKSwgXCJcIjtcbiAgICAgIH1cbiAgICAgIGlmICh0LnQgIT09IDQgJiYgdC5pICE9IG51bGwgJiYgdGhpcy5pc01hcmtlZCh0LmkpKSB7XG4gICAgICAgIGxldCBsID0gXCIoXCIgKyB0aGlzLnNlcmlhbGl6ZSh0KSArIFwiLFtcIiArIG4gKyBcIixcIiArIG4gKyBcIl0pXCI7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNldEFzc2lnbm1lbnQoZSwgYSwgdGhpcy5nZXRSZWZQYXJhbSh0LmkpKSwgdGhpcy5jcmVhdGVEZWxldGVBc3NpZ25tZW50KGUsIG4pLCBsO1xuICAgICAgfVxuICAgICAgbGV0IGkgPSB0aGlzLnN0YWNrO1xuICAgICAgcmV0dXJuIHRoaXMuc3RhY2sgPSBbXSwgdGhpcy5jcmVhdGVTZXRBc3NpZ25tZW50KGUsIGEsIHRoaXMuc2VyaWFsaXplKHQpKSwgdGhpcy5zdGFjayA9IGksIFwiXCI7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzSW5kZXhlZFZhbHVlSW5TdGFjayh0KSkge1xuICAgICAgbGV0IGEgPSB0aGlzLmdldFJlZlBhcmFtKHQuaSk7XG4gICAgICBpZiAodGhpcy5tYXJrUmVmKGUpLCByLnQgIT09IDQgJiYgci5pICE9IG51bGwgJiYgdGhpcy5pc01hcmtlZChyLmkpKSB7XG4gICAgICAgIGxldCBsID0gXCIoXCIgKyB0aGlzLnNlcmlhbGl6ZShyKSArIFwiLFtcIiArIG4gKyBcIixcIiArIG4gKyBcIl0pXCI7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNldEFzc2lnbm1lbnQoZSwgdGhpcy5nZXRSZWZQYXJhbShyLmkpLCBhKSwgdGhpcy5jcmVhdGVEZWxldGVBc3NpZ25tZW50KGUsIG4pLCBsO1xuICAgICAgfVxuICAgICAgbGV0IGkgPSB0aGlzLnN0YWNrO1xuICAgICAgcmV0dXJuIHRoaXMuc3RhY2sgPSBbXSwgdGhpcy5jcmVhdGVTZXRBc3NpZ25tZW50KGUsIHRoaXMuc2VyaWFsaXplKHIpLCBhKSwgdGhpcy5zdGFjayA9IGksIFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBcIltcIiArIHRoaXMuc2VyaWFsaXplKHIpICsgXCIsXCIgKyB0aGlzLnNlcmlhbGl6ZSh0KSArIFwiXVwiO1xuICB9XG4gIHNlcmlhbGl6ZU1hcChlKSB7XG4gICAgbGV0IHIgPSBCciwgdCA9IGUuZS5zLCBuID0gZS5pLCBhID0gZS5mLCBpID0gdGhpcy5nZXRSZWZQYXJhbShhLmkpO1xuICAgIGlmICh0KSB7XG4gICAgICBsZXQgbCA9IGUuZS5rLCBjID0gZS5lLnY7XG4gICAgICB0aGlzLnN0YWNrLnB1c2gobik7XG4gICAgICBsZXQgcDIgPSB0aGlzLnNlcmlhbGl6ZU1hcEVudHJ5KG4sIGxbMF0sIGNbMF0sIGkpO1xuICAgICAgZm9yIChsZXQgaCA9IDEsIFggPSBwMjsgaCA8IHQ7IGgrKykgWCA9IHRoaXMuc2VyaWFsaXplTWFwRW50cnkobiwgbFtoXSwgY1toXSwgaSksIHAyICs9IChYICYmIHAyICYmIFwiLFwiKSArIFg7XG4gICAgICB0aGlzLnN0YWNrLnBvcCgpLCBwMiAmJiAociArPSBcIihbXCIgKyBwMiArIFwiXSlcIik7XG4gICAgfVxuICAgIHJldHVybiBhLnQgPT09IDI2ICYmICh0aGlzLm1hcmtSZWYoYS5pKSwgciA9IFwiKFwiICsgdGhpcy5zZXJpYWxpemUoYSkgKyBcIixcIiArIHIgKyBcIilcIiksIHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKG4sIHIpO1xuICB9XG4gIHNlcmlhbGl6ZUFycmF5QnVmZmVyKGUpIHtcbiAgICBsZXQgciA9IFwibmV3IFVpbnQ4QXJyYXkoXCIsIHQgPSBlLnMsIG4gPSB0Lmxlbmd0aDtcbiAgICBpZiAobikge1xuICAgICAgciArPSBcIltcIiArIHRbMF07XG4gICAgICBmb3IgKGxldCBhID0gMTsgYSA8IG47IGErKykgciArPSBcIixcIiArIHRbYV07XG4gICAgICByICs9IFwiXVwiO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5hc3NpZ25JbmRleGVkVmFsdWUoZS5pLCByICsgXCIpLmJ1ZmZlclwiKTtcbiAgfVxuICBzZXJpYWxpemVUeXBlZEFycmF5KGUpIHtcbiAgICByZXR1cm4gdGhpcy5hc3NpZ25JbmRleGVkVmFsdWUoZS5pLCBcIm5ldyBcIiArIGUuYyArIFwiKFwiICsgdGhpcy5zZXJpYWxpemUoZS5mKSArIFwiLFwiICsgZS5iICsgXCIsXCIgKyBlLmwgKyBcIilcIik7XG4gIH1cbiAgc2VyaWFsaXplRGF0YVZpZXcoZSkge1xuICAgIHJldHVybiB0aGlzLmFzc2lnbkluZGV4ZWRWYWx1ZShlLmksIFwibmV3IERhdGFWaWV3KFwiICsgdGhpcy5zZXJpYWxpemUoZS5mKSArIFwiLFwiICsgZS5iICsgXCIsXCIgKyBlLmwgKyBcIilcIik7XG4gIH1cbiAgc2VyaWFsaXplQWdncmVnYXRlRXJyb3IoZSkge1xuICAgIGxldCByID0gZS5pO1xuICAgIHRoaXMuc3RhY2sucHVzaChyKTtcbiAgICBsZXQgdCA9IHRoaXMuc2VyaWFsaXplRGljdGlvbmFyeShlLCAnbmV3IEFnZ3JlZ2F0ZUVycm9yKFtdLFwiJyArIGUubSArICdcIiknKTtcbiAgICByZXR1cm4gdGhpcy5zdGFjay5wb3AoKSwgdDtcbiAgfVxuICBzZXJpYWxpemVFcnJvcihlKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplRGljdGlvbmFyeShlLCBcIm5ldyBcIiArIHVlW2Uuc10gKyAnKFwiJyArIGUubSArICdcIiknKTtcbiAgfVxuICBzZXJpYWxpemVQcm9taXNlKGUpIHtcbiAgICBsZXQgciwgdCA9IGUuZiwgbiA9IGUuaSwgYSA9IGUucyA/IGpyIDogX3I7XG4gICAgaWYgKHRoaXMuaXNJbmRleGVkVmFsdWVJblN0YWNrKHQpKSB7XG4gICAgICBsZXQgaSA9IHRoaXMuZ2V0UmVmUGFyYW0odC5pKTtcbiAgICAgIHIgPSBhICsgKGUucyA/IFwiKCkudGhlbihcIiArIHRoaXMuY3JlYXRlRnVuY3Rpb24oW10sIGkpICsgXCIpXCIgOiBcIigpLmNhdGNoKFwiICsgdGhpcy5jcmVhdGVFZmZlY3RmdWxGdW5jdGlvbihbXSwgXCJ0aHJvdyBcIiArIGkpICsgXCIpXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YWNrLnB1c2gobik7XG4gICAgICBsZXQgaSA9IHRoaXMuc2VyaWFsaXplKHQpO1xuICAgICAgdGhpcy5zdGFjay5wb3AoKSwgciA9IGEgKyBcIihcIiArIGkgKyBcIilcIjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKG4sIHIpO1xuICB9XG4gIHNlcmlhbGl6ZVdlbGxLbm93blN5bWJvbChlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSwgJGVbZS5zXSk7XG4gIH1cbiAgc2VyaWFsaXplQm94ZWQoZSkge1xuICAgIHJldHVybiB0aGlzLmFzc2lnbkluZGV4ZWRWYWx1ZShlLmksIFwiT2JqZWN0KFwiICsgdGhpcy5zZXJpYWxpemUoZS5mKSArIFwiKVwiKTtcbiAgfVxuICBzZXJpYWxpemVQbHVnaW4oZSkge1xuICAgIGxldCByID0gdGhpcy5wbHVnaW5zO1xuICAgIGlmIChyKSBmb3IgKGxldCB0ID0gMCwgbiA9IHIubGVuZ3RoOyB0IDwgbjsgdCsrKSB7XG4gICAgICBsZXQgYSA9IHJbdF07XG4gICAgICBpZiAoYS50YWcgPT09IGUuYykgcmV0dXJuIHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSwgYS5zZXJpYWxpemUoZS5zLCB0aGlzLCB7IGlkOiBlLmkgfSkpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgVyhlLmMpO1xuICB9XG4gIGdldENvbnN0cnVjdG9yKGUpIHtcbiAgICBsZXQgciA9IHRoaXMuc2VyaWFsaXplKGUpO1xuICAgIHJldHVybiByID09PSB0aGlzLmdldFJlZlBhcmFtKGUuaSkgPyByIDogXCIoXCIgKyByICsgXCIpXCI7XG4gIH1cbiAgc2VyaWFsaXplUHJvbWlzZUNvbnN0cnVjdG9yKGUpIHtcbiAgICBsZXQgciA9IHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUucywgXCJ7cDowLHM6MCxmOjB9XCIpO1xuICAgIHJldHVybiB0aGlzLmFzc2lnbkluZGV4ZWRWYWx1ZShlLmksIHRoaXMuZ2V0Q29uc3RydWN0b3IoZS5mKSArIFwiKFwiICsgciArIFwiKVwiKTtcbiAgfVxuICBzZXJpYWxpemVQcm9taXNlUmVzb2x2ZShlKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29uc3RydWN0b3IoZS5hWzBdKSArIFwiKFwiICsgdGhpcy5nZXRSZWZQYXJhbShlLmkpICsgXCIsXCIgKyB0aGlzLnNlcmlhbGl6ZShlLmFbMV0pICsgXCIpXCI7XG4gIH1cbiAgc2VyaWFsaXplUHJvbWlzZVJlamVjdChlKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29uc3RydWN0b3IoZS5hWzBdKSArIFwiKFwiICsgdGhpcy5nZXRSZWZQYXJhbShlLmkpICsgXCIsXCIgKyB0aGlzLnNlcmlhbGl6ZShlLmFbMV0pICsgXCIpXCI7XG4gIH1cbiAgc2VyaWFsaXplU3BlY2lhbFJlZmVyZW5jZShlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSwgY3IodGhpcy5mZWF0dXJlcywgZS5zKSk7XG4gIH1cbiAgc2VyaWFsaXplSXRlcmF0b3JGYWN0b3J5KGUpIHtcbiAgICBsZXQgciA9IFwiXCIsIHQgPSBmYWxzZTtcbiAgICByZXR1cm4gZS5mLnQgIT09IDQgJiYgKHRoaXMubWFya1JlZihlLmYuaSksIHIgPSBcIihcIiArIHRoaXMuc2VyaWFsaXplKGUuZikgKyBcIixcIiwgdCA9IHRydWUpLCByICs9IHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSwgdGhpcy5jcmVhdGVGdW5jdGlvbihbXCJzXCJdLCB0aGlzLmNyZWF0ZUZ1bmN0aW9uKFtcImlcIiwgXCJjXCIsIFwiZFwiLCBcInRcIl0sIFwiKGk9MCx0PXtbXCIgKyB0aGlzLmdldFJlZlBhcmFtKGUuZi5pKSArIFwiXTpcIiArIHRoaXMuY3JlYXRlRnVuY3Rpb24oW10sIFwidFwiKSArIFwiLG5leHQ6XCIgKyB0aGlzLmNyZWF0ZUVmZmVjdGZ1bEZ1bmN0aW9uKFtdLCBcImlmKGk+cy5kKXJldHVybntkb25lOiEwLHZhbHVlOnZvaWQgMH07aWYoZD1zLnZbYz1pKytdLGM9PT1zLnQpdGhyb3cgZDtyZXR1cm57ZG9uZTpjPT09cy5kLHZhbHVlOmR9XCIpICsgXCJ9KVwiKSkpLCB0ICYmIChyICs9IFwiKVwiKSwgcjtcbiAgfVxuICBzZXJpYWxpemVJdGVyYXRvckZhY3RvcnlJbnN0YW5jZShlKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29uc3RydWN0b3IoZS5hWzBdKSArIFwiKFwiICsgdGhpcy5zZXJpYWxpemUoZS5hWzFdKSArIFwiKVwiO1xuICB9XG4gIHNlcmlhbGl6ZUFzeW5jSXRlcmF0b3JGYWN0b3J5KGUpIHtcbiAgICBsZXQgciA9IGUuYVswXSwgdCA9IGUuYVsxXSwgbiA9IFwiXCI7XG4gICAgci50ICE9PSA0ICYmICh0aGlzLm1hcmtSZWYoci5pKSwgbiArPSBcIihcIiArIHRoaXMuc2VyaWFsaXplKHIpKSwgdC50ICE9PSA0ICYmICh0aGlzLm1hcmtSZWYodC5pKSwgbiArPSAobiA/IFwiLFwiIDogXCIoXCIpICsgdGhpcy5zZXJpYWxpemUodCkpLCBuICYmIChuICs9IFwiLFwiKTtcbiAgICBsZXQgYSA9IHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSwgdGhpcy5jcmVhdGVGdW5jdGlvbihbXCJzXCJdLCB0aGlzLmNyZWF0ZUZ1bmN0aW9uKFtcImJcIiwgXCJjXCIsIFwicFwiLCBcImRcIiwgXCJlXCIsIFwidFwiLCBcImZcIl0sIFwiKGI9W10sYz0wLHA9W10sZD0tMSxlPSExLGY9XCIgKyB0aGlzLmNyZWF0ZUVmZmVjdGZ1bEZ1bmN0aW9uKFtcImlcIiwgXCJsXCJdLCBcImZvcihpPTAsbD1wLmxlbmd0aDtpPGw7aSsrKXBbaV0ucyh7ZG9uZTohMCx2YWx1ZTp2b2lkIDB9KVwiKSArIFwiLHMub24oe25leHQ6XCIgKyB0aGlzLmNyZWF0ZUVmZmVjdGZ1bEZ1bmN0aW9uKFtcInZcIiwgXCJ0XCJdLCBcImlmKHQ9cC5zaGlmdCgpKXQucyh7ZG9uZTohMSx2YWx1ZTp2fSk7Yi5wdXNoKHYpXCIpICsgXCIsdGhyb3c6XCIgKyB0aGlzLmNyZWF0ZUVmZmVjdGZ1bEZ1bmN0aW9uKFtcInZcIiwgXCJ0XCJdLCBcImlmKHQ9cC5zaGlmdCgpKXQuZih2KTtmKCksZD1iLmxlbmd0aCxlPSEwLGIucHVzaCh2KVwiKSArIFwiLHJldHVybjpcIiArIHRoaXMuY3JlYXRlRWZmZWN0ZnVsRnVuY3Rpb24oW1widlwiLCBcInRcIl0sIFwiaWYodD1wLnNoaWZ0KCkpdC5zKHtkb25lOiEwLHZhbHVlOnZ9KTtmKCksZD1iLmxlbmd0aCxiLnB1c2godilcIikgKyBcIn0pLHQ9e1tcIiArIHRoaXMuZ2V0UmVmUGFyYW0odC5pKSArIFwiXTpcIiArIHRoaXMuY3JlYXRlRnVuY3Rpb24oW10sIFwidC5wXCIpICsgXCIsbmV4dDpcIiArIHRoaXMuY3JlYXRlRWZmZWN0ZnVsRnVuY3Rpb24oW1wiaVwiLCBcInRcIiwgXCJ2XCJdLCBcImlmKGQ9PT0tMSl7cmV0dXJuKChpPWMrKyk+PWIubGVuZ3RoKT8oXCIgKyB0aGlzLmdldFJlZlBhcmFtKHIuaSkgKyBcIih0PXtwOjAsczowLGY6MH0pLHAucHVzaCh0KSx0LnApOntkb25lOiExLHZhbHVlOmJbaV19fWlmKGM+ZClyZXR1cm57ZG9uZTohMCx2YWx1ZTp2b2lkIDB9O2lmKHY9YltpPWMrK10saSE9PWQpcmV0dXJue2RvbmU6ITEsdmFsdWU6dn07aWYoZSl0aHJvdyB2O3JldHVybntkb25lOiEwLHZhbHVlOnZ9XCIpICsgXCJ9KVwiKSkpO1xuICAgIHJldHVybiBuID8gbiArIGEgKyBcIilcIiA6IGE7XG4gIH1cbiAgc2VyaWFsaXplQXN5bmNJdGVyYXRvckZhY3RvcnlJbnN0YW5jZShlKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29uc3RydWN0b3IoZS5hWzBdKSArIFwiKFwiICsgdGhpcy5zZXJpYWxpemUoZS5hWzFdKSArIFwiKVwiO1xuICB9XG4gIHNlcmlhbGl6ZVN0cmVhbUNvbnN0cnVjdG9yKGUpIHtcbiAgICBsZXQgciA9IHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSwgdGhpcy5nZXRDb25zdHJ1Y3RvcihlLmYpICsgXCIoKVwiKSwgdCA9IGUuYS5sZW5ndGg7XG4gICAgaWYgKHQpIHtcbiAgICAgIGxldCBuID0gdGhpcy5zZXJpYWxpemUoZS5hWzBdKTtcbiAgICAgIGZvciAobGV0IGEgPSAxOyBhIDwgdDsgYSsrKSBuICs9IFwiLFwiICsgdGhpcy5zZXJpYWxpemUoZS5hW2FdKTtcbiAgICAgIHJldHVybiBcIihcIiArIHIgKyBcIixcIiArIG4gKyBcIixcIiArIHRoaXMuZ2V0UmVmUGFyYW0oZS5pKSArIFwiKVwiO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbiAgfVxuICBzZXJpYWxpemVTdHJlYW1OZXh0KGUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWZQYXJhbShlLmkpICsgXCIubmV4dChcIiArIHRoaXMuc2VyaWFsaXplKGUuZikgKyBcIilcIjtcbiAgfVxuICBzZXJpYWxpemVTdHJlYW1UaHJvdyhlKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVmUGFyYW0oZS5pKSArIFwiLnRocm93KFwiICsgdGhpcy5zZXJpYWxpemUoZS5mKSArIFwiKVwiO1xuICB9XG4gIHNlcmlhbGl6ZVN0cmVhbVJldHVybihlKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVmUGFyYW0oZS5pKSArIFwiLnJldHVybihcIiArIHRoaXMuc2VyaWFsaXplKGUuZikgKyBcIilcIjtcbiAgfVxuICBzZXJpYWxpemUoZSkge1xuICAgIHRyeSB7XG4gICAgICBzd2l0Y2ggKGUudCkge1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgcmV0dXJuIHFlW2Uuc107XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gXCJcIiArIGUucztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHJldHVybiAnXCInICsgZS5zICsgJ1wiJztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiBlLnMgKyBcIm5cIjtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHJldHVybiB0aGlzLmdldFJlZlBhcmFtKGUuaSk7XG4gICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplUmVmZXJlbmNlKGUpO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplQXJyYXkoZSk7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplT2JqZWN0KGUpO1xuICAgICAgICBjYXNlIDExOlxuICAgICAgICAgIHJldHVybiB0aGlzLnNlcmlhbGl6ZU51bGxDb25zdHJ1Y3RvcihlKTtcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHJldHVybiB0aGlzLnNlcmlhbGl6ZURhdGUoZSk7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXJpYWxpemVSZWdFeHAoZSk7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXJpYWxpemVTZXQoZSk7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXJpYWxpemVNYXAoZSk7XG4gICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplQXJyYXlCdWZmZXIoZSk7XG4gICAgICAgIGNhc2UgMTY6XG4gICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplVHlwZWRBcnJheShlKTtcbiAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXJpYWxpemVEYXRhVmlldyhlKTtcbiAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXJpYWxpemVBZ2dyZWdhdGVFcnJvcihlKTtcbiAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXJpYWxpemVFcnJvcihlKTtcbiAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXJpYWxpemVQcm9taXNlKGUpO1xuICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgIHJldHVybiB0aGlzLnNlcmlhbGl6ZVdlbGxLbm93blN5bWJvbChlKTtcbiAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXJpYWxpemVCb3hlZChlKTtcbiAgICAgICAgY2FzZSAyMjpcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXJpYWxpemVQcm9taXNlQ29uc3RydWN0b3IoZSk7XG4gICAgICAgIGNhc2UgMjM6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplUHJvbWlzZVJlc29sdmUoZSk7XG4gICAgICAgIGNhc2UgMjQ6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplUHJvbWlzZVJlamVjdChlKTtcbiAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXJpYWxpemVQbHVnaW4oZSk7XG4gICAgICAgIGNhc2UgMjY6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplU3BlY2lhbFJlZmVyZW5jZShlKTtcbiAgICAgICAgY2FzZSAyNzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXJpYWxpemVJdGVyYXRvckZhY3RvcnkoZSk7XG4gICAgICAgIGNhc2UgMjg6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplSXRlcmF0b3JGYWN0b3J5SW5zdGFuY2UoZSk7XG4gICAgICAgIGNhc2UgMjk6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplQXN5bmNJdGVyYXRvckZhY3RvcnkoZSk7XG4gICAgICAgIGNhc2UgMzA6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplQXN5bmNJdGVyYXRvckZhY3RvcnlJbnN0YW5jZShlKTtcbiAgICAgICAgY2FzZSAzMTpcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXJpYWxpemVTdHJlYW1Db25zdHJ1Y3RvcihlKTtcbiAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXJpYWxpemVTdHJlYW1OZXh0KGUpO1xuICAgICAgICBjYXNlIDMzOlxuICAgICAgICAgIHJldHVybiB0aGlzLnNlcmlhbGl6ZVN0cmVhbVRocm93KGUpO1xuICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgIHJldHVybiB0aGlzLnNlcmlhbGl6ZVN0cmVhbVJldHVybihlKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgeShlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChyKSB7XG4gICAgICB0aHJvdyBuZXcgVGUocik7XG4gICAgfVxuICB9XG59O1xudmFyIEQgPSBjbGFzcyBleHRlbmRzIFYge1xuICBjb25zdHJ1Y3RvcihyKSB7XG4gICAgc3VwZXIocik7XG4gICAgdGhpcy5tb2RlID0gXCJjcm9zc1wiO1xuICAgIHRoaXMuc2NvcGVJZCA9IHIuc2NvcGVJZDtcbiAgfVxuICBnZXRSZWZQYXJhbShyKSB7XG4gICAgcmV0dXJuIFEgKyBcIltcIiArIHIgKyBcIl1cIjtcbiAgfVxuICBhc3NpZ25JbmRleGVkVmFsdWUociwgdCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlZlBhcmFtKHIpICsgXCI9XCIgKyB0O1xuICB9XG4gIHNlcmlhbGl6ZVRvcChyKSB7XG4gICAgbGV0IHQgPSB0aGlzLnNlcmlhbGl6ZShyKSwgbiA9IHIuaTtcbiAgICBpZiAobiA9PSBudWxsKSByZXR1cm4gdDtcbiAgICBsZXQgYSA9IHRoaXMucmVzb2x2ZVBhdGNoZXMoKSwgaSA9IHRoaXMuZ2V0UmVmUGFyYW0obiksIGwgPSB0aGlzLnNjb3BlSWQgPT0gbnVsbCA/IFwiXCIgOiBRLCBjID0gYSA/IFwiKFwiICsgdCArIFwiLFwiICsgYSArIGkgKyBcIilcIiA6IHQ7XG4gICAgaWYgKGwgPT09IFwiXCIpIHJldHVybiByLnQgPT09IDEwICYmICFhID8gXCIoXCIgKyBjICsgXCIpXCIgOiBjO1xuICAgIGxldCBwMiA9IHRoaXMuc2NvcGVJZCA9PSBudWxsID8gXCIoKVwiIDogXCIoXCIgKyBRICsgJ1tcIicgKyBkKHRoaXMuc2NvcGVJZCkgKyAnXCJdKSc7XG4gICAgcmV0dXJuIFwiKFwiICsgdGhpcy5jcmVhdGVGdW5jdGlvbihbbF0sIGMpICsgXCIpXCIgKyBwMjtcbiAgfVxufTtcbnZhciB2ID0gY2xhc3MgZXh0ZW5kcyBZIHtcbiAgcGFyc2VJdGVtcyhlKSB7XG4gICAgbGV0IHIgPSBbXTtcbiAgICBmb3IgKGxldCB0ID0gMCwgbiA9IGUubGVuZ3RoOyB0IDwgbjsgdCsrKSB0IGluIGUgJiYgKHJbdF0gPSB0aGlzLnBhcnNlKGVbdF0pKTtcbiAgICByZXR1cm4gcjtcbiAgfVxuICBwYXJzZUFycmF5KGUsIHIpIHtcbiAgICByZXR1cm4gTmUoZSwgciwgdGhpcy5wYXJzZUl0ZW1zKHIpKTtcbiAgfVxuICBwYXJzZVByb3BlcnRpZXMoZSkge1xuICAgIGxldCByID0gT2JqZWN0LmVudHJpZXMoZSksIHQgPSBbXSwgbiA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gci5sZW5ndGg7IGkgPCBsOyBpKyspIHQucHVzaChkKHJbaV1bMF0pKSwgbi5wdXNoKHRoaXMucGFyc2UocltpXVsxXSkpO1xuICAgIGxldCBhID0gU3ltYm9sLml0ZXJhdG9yO1xuICAgIHJldHVybiBhIGluIGUgJiYgKHQucHVzaCh0aGlzLnBhcnNlV2VsbEtub3duU3ltYm9sKGEpKSwgbi5wdXNoKE0odGhpcy5wYXJzZUl0ZXJhdG9yRmFjdG9yeSgpLCB0aGlzLnBhcnNlKEooZSkpKSkpLCBhID0gU3ltYm9sLmFzeW5jSXRlcmF0b3IsIGEgaW4gZSAmJiAodC5wdXNoKHRoaXMucGFyc2VXZWxsS25vd25TeW1ib2woYSkpLCBuLnB1c2goVSh0aGlzLnBhcnNlQXN5bmNJdGVyYXRvckZhY3RvcnkoKSwgdGhpcy5wYXJzZShLKCkpKSkpLCBhID0gU3ltYm9sLnRvU3RyaW5nVGFnLCBhIGluIGUgJiYgKHQucHVzaCh0aGlzLnBhcnNlV2VsbEtub3duU3ltYm9sKGEpKSwgbi5wdXNoKHcoZVthXSkpKSwgYSA9IFN5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGUsIGEgaW4gZSAmJiAodC5wdXNoKHRoaXMucGFyc2VXZWxsS25vd25TeW1ib2woYSkpLCBuLnB1c2goZVthXSA/IEkgOiBBKSksIHsgazogdCwgdjogbiwgczogdC5sZW5ndGggfTtcbiAgfVxuICBwYXJzZVBsYWluT2JqZWN0KGUsIHIsIHQpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVPYmplY3ROb2RlKGUsIHIsIHQsIHRoaXMucGFyc2VQcm9wZXJ0aWVzKHIpKTtcbiAgfVxuICBwYXJzZUJveGVkKGUsIHIpIHtcbiAgICByZXR1cm4gYmUoZSwgdGhpcy5wYXJzZShyLnZhbHVlT2YoKSkpO1xuICB9XG4gIHBhcnNlVHlwZWRBcnJheShlLCByKSB7XG4gICAgcmV0dXJuIHhlKGUsIHIsIHRoaXMucGFyc2Uoci5idWZmZXIpKTtcbiAgfVxuICBwYXJzZUJpZ0ludFR5cGVkQXJyYXkoZSwgcikge1xuICAgIHJldHVybiBJZShlLCByLCB0aGlzLnBhcnNlKHIuYnVmZmVyKSk7XG4gIH1cbiAgcGFyc2VEYXRhVmlldyhlLCByKSB7XG4gICAgcmV0dXJuIEFlKGUsIHIsIHRoaXMucGFyc2Uoci5idWZmZXIpKTtcbiAgfVxuICBwYXJzZUVycm9yKGUsIHIpIHtcbiAgICBsZXQgdCA9IGoociwgdGhpcy5mZWF0dXJlcyk7XG4gICAgcmV0dXJuIHdlKGUsIHIsIHQgPyB0aGlzLnBhcnNlUHJvcGVydGllcyh0KSA6IHMpO1xuICB9XG4gIHBhcnNlQWdncmVnYXRlRXJyb3IoZSwgcikge1xuICAgIGxldCB0ID0gaihyLCB0aGlzLmZlYXR1cmVzKTtcbiAgICByZXR1cm4gRWUoZSwgciwgdCA/IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHQpIDogcyk7XG4gIH1cbiAgcGFyc2VNYXAoZSwgcikge1xuICAgIGxldCB0ID0gW10sIG4gPSBbXTtcbiAgICBmb3IgKGxldCBbYSwgaV0gb2Ygci5lbnRyaWVzKCkpIHQucHVzaCh0aGlzLnBhcnNlKGEpKSwgbi5wdXNoKHRoaXMucGFyc2UoaSkpO1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1hcE5vZGUoZSwgdCwgbiwgci5zaXplKTtcbiAgfVxuICBwYXJzZVNldChlLCByKSB7XG4gICAgbGV0IHQgPSBbXTtcbiAgICBmb3IgKGxldCBuIG9mIHIua2V5cygpKSB0LnB1c2godGhpcy5wYXJzZShuKSk7XG4gICAgcmV0dXJuIFBlKGUsIHIuc2l6ZSwgdCk7XG4gIH1cbiAgcGFyc2VQbHVnaW4oZSwgcikge1xuICAgIGxldCB0ID0gdGhpcy5wbHVnaW5zO1xuICAgIGlmICh0KSBmb3IgKGxldCBuID0gMCwgYSA9IHQubGVuZ3RoOyBuIDwgYTsgbisrKSB7XG4gICAgICBsZXQgaSA9IHRbbl07XG4gICAgICBpZiAoaS5wYXJzZS5zeW5jICYmIGkudGVzdChyKSkgcmV0dXJuIF8oZSwgaS50YWcsIGkucGFyc2Uuc3luYyhyLCB0aGlzLCB7IGlkOiBlIH0pKTtcbiAgICB9XG4gIH1cbiAgcGFyc2VTdHJlYW0oZSwgcikge1xuICAgIHJldHVybiBMKGUsIHRoaXMucGFyc2VTcGVjaWFsUmVmZXJlbmNlKDQpLCBbXSk7XG4gIH1cbiAgcGFyc2VQcm9taXNlKGUsIHIpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVQcm9taXNlQ29uc3RydWN0b3JOb2RlKGUsIHRoaXMuY3JlYXRlSW5kZXgoe30pKTtcbiAgfVxuICBwYXJzZU9iamVjdChlLCByKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocikpIHJldHVybiB0aGlzLnBhcnNlQXJyYXkoZSwgcik7XG4gICAgaWYgKEZlKHIpKSByZXR1cm4gdGhpcy5wYXJzZVN0cmVhbShlLCByKTtcbiAgICBsZXQgdCA9IHIuY29uc3RydWN0b3I7XG4gICAgaWYgKHQgPT09IFQpIHJldHVybiB0aGlzLnBhcnNlKHIucmVwbGFjZW1lbnQpO1xuICAgIGxldCBuID0gdGhpcy5wYXJzZVBsdWdpbihlLCByKTtcbiAgICBpZiAobikgcmV0dXJuIG47XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICBjYXNlIE9iamVjdDpcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VQbGFpbk9iamVjdChlLCByLCBmYWxzZSk7XG4gICAgICBjYXNlIHZvaWQgMDpcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VQbGFpbk9iamVjdChlLCByLCB0cnVlKTtcbiAgICAgIGNhc2UgRGF0ZTpcbiAgICAgICAgcmV0dXJuIGhlKGUsIHIpO1xuICAgICAgY2FzZSBSZWdFeHA6XG4gICAgICAgIHJldHVybiB5ZShlLCByKTtcbiAgICAgIGNhc2UgRXJyb3I6XG4gICAgICBjYXNlIEV2YWxFcnJvcjpcbiAgICAgIGNhc2UgUmFuZ2VFcnJvcjpcbiAgICAgIGNhc2UgUmVmZXJlbmNlRXJyb3I6XG4gICAgICBjYXNlIFN5bnRheEVycm9yOlxuICAgICAgY2FzZSBUeXBlRXJyb3I6XG4gICAgICBjYXNlIFVSSUVycm9yOlxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUVycm9yKGUsIHIpO1xuICAgICAgY2FzZSBOdW1iZXI6XG4gICAgICBjYXNlIEJvb2xlYW46XG4gICAgICBjYXNlIFN0cmluZzpcbiAgICAgIGNhc2UgQmlnSW50OlxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUJveGVkKGUsIHIpO1xuICAgICAgY2FzZSBBcnJheUJ1ZmZlcjpcbiAgICAgICAgcmV0dXJuIHZlKGUsIHIpO1xuICAgICAgY2FzZSBJbnQ4QXJyYXk6XG4gICAgICBjYXNlIEludDE2QXJyYXk6XG4gICAgICBjYXNlIEludDMyQXJyYXk6XG4gICAgICBjYXNlIFVpbnQ4QXJyYXk6XG4gICAgICBjYXNlIFVpbnQxNkFycmF5OlxuICAgICAgY2FzZSBVaW50MzJBcnJheTpcbiAgICAgIGNhc2UgVWludDhDbGFtcGVkQXJyYXk6XG4gICAgICBjYXNlIEZsb2F0MzJBcnJheTpcbiAgICAgIGNhc2UgRmxvYXQ2NEFycmF5OlxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVR5cGVkQXJyYXkoZSwgcik7XG4gICAgICBjYXNlIERhdGFWaWV3OlxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZURhdGFWaWV3KGUsIHIpO1xuICAgICAgY2FzZSBNYXA6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlTWFwKGUsIHIpO1xuICAgICAgY2FzZSBTZXQ6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlU2V0KGUsIHIpO1xuICAgIH1cbiAgICBpZiAodCA9PT0gUHJvbWlzZSB8fCByIGluc3RhbmNlb2YgUHJvbWlzZSkgcmV0dXJuIHRoaXMucGFyc2VQcm9taXNlKGUsIHIpO1xuICAgIGxldCBhID0gdGhpcy5mZWF0dXJlcztcbiAgICBpZiAoYSAmIDE2KSBzd2l0Y2ggKHQpIHtcbiAgICAgIGNhc2UgQmlnSW50NjRBcnJheTpcbiAgICAgIGNhc2UgQmlnVWludDY0QXJyYXk6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlQmlnSW50VHlwZWRBcnJheShlLCByKTtcbiAgICB9XG4gICAgaWYgKGEgJiAxICYmIHR5cGVvZiBBZ2dyZWdhdGVFcnJvciAhPSBcInVuZGVmaW5lZFwiICYmICh0ID09PSBBZ2dyZWdhdGVFcnJvciB8fCByIGluc3RhbmNlb2YgQWdncmVnYXRlRXJyb3IpKSByZXR1cm4gdGhpcy5wYXJzZUFnZ3JlZ2F0ZUVycm9yKGUsIHIpO1xuICAgIGlmIChyIGluc3RhbmNlb2YgRXJyb3IpIHJldHVybiB0aGlzLnBhcnNlRXJyb3IoZSwgcik7XG4gICAgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiByIHx8IFN5bWJvbC5hc3luY0l0ZXJhdG9yIGluIHIpIHJldHVybiB0aGlzLnBhcnNlUGxhaW5PYmplY3QoZSwgciwgISF0KTtcbiAgICB0aHJvdyBuZXcgZyhyKTtcbiAgfVxuICBwYXJzZUZ1bmN0aW9uKGUpIHtcbiAgICBsZXQgciA9IHRoaXMuZ2V0UmVmZXJlbmNlKGUpO1xuICAgIGlmIChyLnR5cGUgIT09IDApIHJldHVybiByLnZhbHVlO1xuICAgIGxldCB0ID0gdGhpcy5wYXJzZVBsdWdpbihyLnZhbHVlLCBlKTtcbiAgICBpZiAodCkgcmV0dXJuIHQ7XG4gICAgdGhyb3cgbmV3IGcoZSk7XG4gIH1cbiAgcGFyc2UoZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIGUpIHtcbiAgICAgIGNhc2UgXCJib29sZWFuXCI6XG4gICAgICAgIHJldHVybiBlID8gSSA6IEE7XG4gICAgICBjYXNlIFwidW5kZWZpbmVkXCI6XG4gICAgICAgIHJldHVybiBwZTtcbiAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgcmV0dXJuIHcoZSk7XG4gICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgIHJldHVybiBnZShlKTtcbiAgICAgIGNhc2UgXCJiaWdpbnRcIjpcbiAgICAgICAgcmV0dXJuIFNlKGUpO1xuICAgICAgY2FzZSBcIm9iamVjdFwiOiB7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgbGV0IHIgPSB0aGlzLmdldFJlZmVyZW5jZShlKTtcbiAgICAgICAgICByZXR1cm4gci50eXBlID09PSAwID8gdGhpcy5wYXJzZU9iamVjdChyLnZhbHVlLCBlKSA6IHIudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlO1xuICAgICAgfVxuICAgICAgY2FzZSBcInN5bWJvbFwiOlxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVdlbGxLbm93blN5bWJvbChlKTtcbiAgICAgIGNhc2UgXCJmdW5jdGlvblwiOlxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUZ1bmN0aW9uKGUpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IGcoZSk7XG4gICAgfVxuICB9XG4gIHBhcnNlVG9wKGUpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2UoZSk7XG4gICAgfSBjYXRjaCAocikge1xuICAgICAgdGhyb3cgciBpbnN0YW5jZW9mIEUgPyByIDogbmV3IEUocik7XG4gICAgfVxuICB9XG59O1xudmFyIG9lID0gY2xhc3MgZXh0ZW5kcyB2IHtcbiAgY29uc3RydWN0b3Iocikge1xuICAgIHN1cGVyKHIpO1xuICAgIHRoaXMuYWxpdmUgPSB0cnVlO1xuICAgIHRoaXMucGVuZGluZyA9IDA7XG4gICAgdGhpcy5pbml0aWFsID0gdHJ1ZTtcbiAgICB0aGlzLmJ1ZmZlciA9IFtdO1xuICAgIHRoaXMub25QYXJzZUNhbGxiYWNrID0gci5vblBhcnNlLCB0aGlzLm9uRXJyb3JDYWxsYmFjayA9IHIub25FcnJvciwgdGhpcy5vbkRvbmVDYWxsYmFjayA9IHIub25Eb25lO1xuICB9XG4gIG9uUGFyc2VJbnRlcm5hbChyLCB0KSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMub25QYXJzZUNhbGxiYWNrKHIsIHQpO1xuICAgIH0gY2F0Y2ggKG4pIHtcbiAgICAgIHRoaXMub25FcnJvcihuKTtcbiAgICB9XG4gIH1cbiAgZmx1c2goKSB7XG4gICAgZm9yIChsZXQgciA9IDAsIHQgPSB0aGlzLmJ1ZmZlci5sZW5ndGg7IHIgPCB0OyByKyspIHRoaXMub25QYXJzZUludGVybmFsKHRoaXMuYnVmZmVyW3JdLCBmYWxzZSk7XG4gIH1cbiAgb25QYXJzZShyKSB7XG4gICAgdGhpcy5pbml0aWFsID8gdGhpcy5idWZmZXIucHVzaChyKSA6IHRoaXMub25QYXJzZUludGVybmFsKHIsIGZhbHNlKTtcbiAgfVxuICBvbkVycm9yKHIpIHtcbiAgICBpZiAodGhpcy5vbkVycm9yQ2FsbGJhY2spIHRoaXMub25FcnJvckNhbGxiYWNrKHIpO1xuICAgIGVsc2UgdGhyb3cgcjtcbiAgfVxuICBvbkRvbmUoKSB7XG4gICAgdGhpcy5vbkRvbmVDYWxsYmFjayAmJiB0aGlzLm9uRG9uZUNhbGxiYWNrKCk7XG4gIH1cbiAgcHVzaFBlbmRpbmdTdGF0ZSgpIHtcbiAgICB0aGlzLnBlbmRpbmcrKztcbiAgfVxuICBwb3BQZW5kaW5nU3RhdGUoKSB7XG4gICAgLS10aGlzLnBlbmRpbmcgPD0gMCAmJiB0aGlzLm9uRG9uZSgpO1xuICB9XG4gIHBhcnNlUHJvcGVydGllcyhyKSB7XG4gICAgbGV0IHQgPSBPYmplY3QuZW50cmllcyhyKSwgbiA9IFtdLCBhID0gW107XG4gICAgZm9yIChsZXQgbCA9IDAsIGMgPSB0Lmxlbmd0aDsgbCA8IGM7IGwrKykgbi5wdXNoKGQodFtsXVswXSkpLCBhLnB1c2godGhpcy5wYXJzZSh0W2xdWzFdKSk7XG4gICAgbGV0IGkgPSBTeW1ib2wuaXRlcmF0b3I7XG4gICAgcmV0dXJuIGkgaW4gciAmJiAobi5wdXNoKHRoaXMucGFyc2VXZWxsS25vd25TeW1ib2woaSkpLCBhLnB1c2goTSh0aGlzLnBhcnNlSXRlcmF0b3JGYWN0b3J5KCksIHRoaXMucGFyc2UoSihyKSkpKSksIGkgPSBTeW1ib2wuYXN5bmNJdGVyYXRvciwgaSBpbiByICYmIChuLnB1c2godGhpcy5wYXJzZVdlbGxLbm93blN5bWJvbChpKSksIGEucHVzaChVKHRoaXMucGFyc2VBc3luY0l0ZXJhdG9yRmFjdG9yeSgpLCB0aGlzLnBhcnNlKFZlKHIpKSkpKSwgaSA9IFN5bWJvbC50b1N0cmluZ1RhZywgaSBpbiByICYmIChuLnB1c2godGhpcy5wYXJzZVdlbGxLbm93blN5bWJvbChpKSksIGEucHVzaCh3KHJbaV0pKSksIGkgPSBTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlLCBpIGluIHIgJiYgKG4ucHVzaCh0aGlzLnBhcnNlV2VsbEtub3duU3ltYm9sKGkpKSwgYS5wdXNoKHJbaV0gPyBJIDogQSkpLCB7IGs6IG4sIHY6IGEsIHM6IG4ubGVuZ3RoIH07XG4gIH1cbiAgaGFuZGxlUHJvbWlzZVN1Y2Nlc3MociwgdCkge1xuICAgIGxldCBuID0gdGhpcy5wYXJzZVdpdGhFcnJvcih0KTtcbiAgICBuICYmIHRoaXMub25QYXJzZSh1JDEoMjMsIHIsIHMsIHMsIHMsIHMsIHMsIHMsIFt0aGlzLnBhcnNlU3BlY2lhbFJlZmVyZW5jZSgyKSwgbl0sIHMsIHMsIHMpKSwgdGhpcy5wb3BQZW5kaW5nU3RhdGUoKTtcbiAgfVxuICBoYW5kbGVQcm9taXNlRmFpbHVyZShyLCB0KSB7XG4gICAgaWYgKHRoaXMuYWxpdmUpIHtcbiAgICAgIGxldCBuID0gdGhpcy5wYXJzZVdpdGhFcnJvcih0KTtcbiAgICAgIG4gJiYgdGhpcy5vblBhcnNlKHUkMSgyNCwgciwgcywgcywgcywgcywgcywgcywgW3RoaXMucGFyc2VTcGVjaWFsUmVmZXJlbmNlKDMpLCBuXSwgcywgcywgcykpO1xuICAgIH1cbiAgICB0aGlzLnBvcFBlbmRpbmdTdGF0ZSgpO1xuICB9XG4gIHBhcnNlUHJvbWlzZShyLCB0KSB7XG4gICAgbGV0IG4gPSB0aGlzLmNyZWF0ZUluZGV4KHt9KTtcbiAgICByZXR1cm4gdC50aGVuKHRoaXMuaGFuZGxlUHJvbWlzZVN1Y2Nlc3MuYmluZCh0aGlzLCBuKSwgdGhpcy5oYW5kbGVQcm9taXNlRmFpbHVyZS5iaW5kKHRoaXMsIG4pKSwgdGhpcy5wdXNoUGVuZGluZ1N0YXRlKCksIHRoaXMuY3JlYXRlUHJvbWlzZUNvbnN0cnVjdG9yTm9kZShyLCBuKTtcbiAgfVxuICBwYXJzZVBsdWdpbihyLCB0KSB7XG4gICAgbGV0IG4gPSB0aGlzLnBsdWdpbnM7XG4gICAgaWYgKG4pIGZvciAobGV0IGEgPSAwLCBpID0gbi5sZW5ndGg7IGEgPCBpOyBhKyspIHtcbiAgICAgIGxldCBsID0gblthXTtcbiAgICAgIGlmIChsLnBhcnNlLnN0cmVhbSAmJiBsLnRlc3QodCkpIHJldHVybiBfKHIsIGwudGFnLCBsLnBhcnNlLnN0cmVhbSh0LCB0aGlzLCB7IGlkOiByIH0pKTtcbiAgICB9XG4gICAgcmV0dXJuIHM7XG4gIH1cbiAgcGFyc2VTdHJlYW0ociwgdCkge1xuICAgIGxldCBuID0gTChyLCB0aGlzLnBhcnNlU3BlY2lhbFJlZmVyZW5jZSg0KSwgW10pO1xuICAgIHJldHVybiB0aGlzLnB1c2hQZW5kaW5nU3RhdGUoKSwgdC5vbih7IG5leHQ6IChhKSA9PiB7XG4gICAgICBpZiAodGhpcy5hbGl2ZSkge1xuICAgICAgICBsZXQgaSA9IHRoaXMucGFyc2VXaXRoRXJyb3IoYSk7XG4gICAgICAgIGkgJiYgdGhpcy5vblBhcnNlKFJlKHIsIGkpKTtcbiAgICAgIH1cbiAgICB9LCB0aHJvdzogKGEpID0+IHtcbiAgICAgIGlmICh0aGlzLmFsaXZlKSB7XG4gICAgICAgIGxldCBpID0gdGhpcy5wYXJzZVdpdGhFcnJvcihhKTtcbiAgICAgICAgaSAmJiB0aGlzLm9uUGFyc2UoT2UociwgaSkpO1xuICAgICAgfVxuICAgICAgdGhpcy5wb3BQZW5kaW5nU3RhdGUoKTtcbiAgICB9LCByZXR1cm46IChhKSA9PiB7XG4gICAgICBpZiAodGhpcy5hbGl2ZSkge1xuICAgICAgICBsZXQgaSA9IHRoaXMucGFyc2VXaXRoRXJyb3IoYSk7XG4gICAgICAgIGkgJiYgdGhpcy5vblBhcnNlKENlKHIsIGkpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucG9wUGVuZGluZ1N0YXRlKCk7XG4gICAgfSB9KSwgbjtcbiAgfVxuICBwYXJzZVdpdGhFcnJvcihyKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlKHIpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIHJldHVybiB0aGlzLm9uRXJyb3IodCksIHM7XG4gICAgfVxuICB9XG4gIHN0YXJ0KHIpIHtcbiAgICBsZXQgdCA9IHRoaXMucGFyc2VXaXRoRXJyb3Iocik7XG4gICAgdCAmJiAodGhpcy5vblBhcnNlSW50ZXJuYWwodCwgdHJ1ZSksIHRoaXMuaW5pdGlhbCA9IGZhbHNlLCB0aGlzLmZsdXNoKCksIHRoaXMucGVuZGluZyA8PSAwICYmIHRoaXMuZGVzdHJveSgpKTtcbiAgfVxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuYWxpdmUgJiYgKHRoaXMub25Eb25lKCksIHRoaXMuYWxpdmUgPSBmYWxzZSk7XG4gIH1cbiAgaXNBbGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hbGl2ZTtcbiAgfVxufTtcbnZhciBHID0gY2xhc3MgZXh0ZW5kcyBvZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy5tb2RlID0gXCJjcm9zc1wiO1xuICB9XG59O1xuYXN5bmMgZnVuY3Rpb24gZ28obywgZSA9IHt9KSB7XG4gIGxldCByID0gbShlLnBsdWdpbnMpO1xuICByZXR1cm4gYXdhaXQgbmV3ICQoeyBwbHVnaW5zOiByLCBkaXNhYmxlZEZlYXR1cmVzOiBlLmRpc2FibGVkRmVhdHVyZXMsIHJlZnM6IGUucmVmcyB9KS5wYXJzZVRvcChvKTtcbn1cbmZ1bmN0aW9uIGdyKG8sIGUpIHtcbiAgbGV0IHIgPSBtKGUucGx1Z2lucyksIHQgPSBuZXcgRyh7IHBsdWdpbnM6IHIsIHJlZnM6IGUucmVmcywgZGlzYWJsZWRGZWF0dXJlczogZS5kaXNhYmxlZEZlYXR1cmVzLCBvblBhcnNlKG4sIGEpIHtcbiAgICBsZXQgaSA9IG5ldyBEKHsgcGx1Z2luczogciwgZmVhdHVyZXM6IHQuZmVhdHVyZXMsIHNjb3BlSWQ6IGUuc2NvcGVJZCwgbWFya2VkUmVmczogdC5tYXJrZWQgfSksIGw7XG4gICAgdHJ5IHtcbiAgICAgIGwgPSBpLnNlcmlhbGl6ZVRvcChuKTtcbiAgICB9IGNhdGNoIChjKSB7XG4gICAgICBlLm9uRXJyb3IgJiYgZS5vbkVycm9yKGMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLm9uU2VyaWFsaXplKGwsIGEpO1xuICB9LCBvbkVycm9yOiBlLm9uRXJyb3IsIG9uRG9uZTogZS5vbkRvbmUgfSk7XG4gIHJldHVybiB0LnN0YXJ0KG8pLCB0LmRlc3Ryb3kuYmluZCh0KTtcbn1cbmZ1bmN0aW9uIFNvKG8sIGUpIHtcbiAgbGV0IHIgPSBtKGUucGx1Z2lucyksIHQgPSBuZXcgRyh7IHBsdWdpbnM6IHIsIHJlZnM6IGUucmVmcywgZGlzYWJsZWRGZWF0dXJlczogZS5kaXNhYmxlZEZlYXR1cmVzLCBvblBhcnNlOiBlLm9uUGFyc2UsIG9uRXJyb3I6IGUub25FcnJvciwgb25Eb25lOiBlLm9uRG9uZSB9KTtcbiAgcmV0dXJuIHQuc3RhcnQobyksIHQuZGVzdHJveS5iaW5kKHQpO1xufVxudmFyIG5lID0gY2xhc3MgZXh0ZW5kcyBGIHtcbiAgY29uc3RydWN0b3Iocikge1xuICAgIHN1cGVyKHIpO1xuICAgIHRoaXMubW9kZSA9IFwidmFuaWxsYVwiO1xuICAgIHRoaXMubWFya2VkID0gbmV3IFNldChyLm1hcmtlZFJlZnMpO1xuICB9XG4gIGFzc2lnbkluZGV4ZWRWYWx1ZShyLCB0KSB7XG4gICAgcmV0dXJuIHRoaXMubWFya2VkLmhhcyhyKSAmJiB0aGlzLnJlZnMuc2V0KHIsIHQpLCB0O1xuICB9XG59O1xuZnVuY3Rpb24gTG8obywgZSA9IHt9KSB7XG4gIGxldCByID0gbShlLnBsdWdpbnMpO1xuICByZXR1cm4gbmV3IG5lKHsgcGx1Z2luczogciwgbWFya2VkUmVmczogby5tIH0pLmRlc2VyaWFsaXplVG9wKG8udCk7XG59XG5jb25zdCBHTE9CQUxfVFNSID0gXCIkX1RTUlwiO1xuZnVuY3Rpb24gY3JlYXRlU2VyaWFsaXphdGlvbkFkYXB0ZXIob3B0cykge1xuICByZXR1cm4gb3B0cztcbn1cbmZ1bmN0aW9uIG1ha2VTc3JTZXJvdmFsUGx1Z2luKHNlcmlhbGl6YXRpb25BZGFwdGVyLCBvcHRpb25zKSB7XG4gIHJldHVybiBIcih7XG4gICAgdGFnOiBcIiRUU1IvdC9cIiArIHNlcmlhbGl6YXRpb25BZGFwdGVyLmtleSxcbiAgICB0ZXN0OiBzZXJpYWxpemF0aW9uQWRhcHRlci50ZXN0LFxuICAgIHBhcnNlOiB7XG4gICAgICBzdHJlYW0odmFsdWUsIGN0eCkge1xuICAgICAgICByZXR1cm4gY3R4LnBhcnNlKHNlcmlhbGl6YXRpb25BZGFwdGVyLnRvU2VyaWFsaXphYmxlKHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzZXJpYWxpemUobm9kZSwgY3R4KSB7XG4gICAgICBvcHRpb25zLmRpZFJ1biA9IHRydWU7XG4gICAgICByZXR1cm4gR0xPQkFMX1RTUiArICcudC5nZXQoXCInICsgc2VyaWFsaXphdGlvbkFkYXB0ZXIua2V5ICsgJ1wiKSgnICsgY3R4LnNlcmlhbGl6ZShub2RlKSArIFwiKVwiO1xuICAgIH0sXG4gICAgLy8gd2UgbmV2ZXIgZGVzZXJpYWxpemUgb24gdGhlIHNlcnZlciBkdXJpbmcgU1NSXG4gICAgZGVzZXJpYWxpemU6IHZvaWQgMFxuICB9KTtcbn1cbmZ1bmN0aW9uIG1ha2VTZXJvdmFsUGx1Z2luKHNlcmlhbGl6YXRpb25BZGFwdGVyKSB7XG4gIHJldHVybiBIcih7XG4gICAgdGFnOiBcIiRUU1IvdC9cIiArIHNlcmlhbGl6YXRpb25BZGFwdGVyLmtleSxcbiAgICB0ZXN0OiBzZXJpYWxpemF0aW9uQWRhcHRlci50ZXN0LFxuICAgIHBhcnNlOiB7XG4gICAgICBzeW5jKHZhbHVlLCBjdHgpIHtcbiAgICAgICAgcmV0dXJuIGN0eC5wYXJzZShzZXJpYWxpemF0aW9uQWRhcHRlci50b1NlcmlhbGl6YWJsZSh2YWx1ZSkpO1xuICAgICAgfSxcbiAgICAgIGFzeW5jIGFzeW5jKHZhbHVlLCBjdHgpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IGN0eC5wYXJzZShzZXJpYWxpemF0aW9uQWRhcHRlci50b1NlcmlhbGl6YWJsZSh2YWx1ZSkpO1xuICAgICAgfSxcbiAgICAgIHN0cmVhbSh2YWx1ZSwgY3R4KSB7XG4gICAgICAgIHJldHVybiBjdHgucGFyc2Uoc2VyaWFsaXphdGlvbkFkYXB0ZXIudG9TZXJpYWxpemFibGUodmFsdWUpKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIHdlIGRvbid0IGdlbmVyYXRlIEpTIGNvZGUgb3V0c2lkZSBvZiBTU1IgKGZvciBub3cpXG4gICAgc2VyaWFsaXplOiB2b2lkIDAsXG4gICAgZGVzZXJpYWxpemUobm9kZSwgY3R4KSB7XG4gICAgICByZXR1cm4gc2VyaWFsaXphdGlvbkFkYXB0ZXIuZnJvbVNlcmlhbGl6YWJsZShjdHguZGVzZXJpYWxpemUobm9kZSkpO1xuICAgIH1cbiAgfSk7XG59XG52YXIgcCA9IHt9LCBlZTIgPSBIcih7IHRhZzogXCJzZXJvdmFsLXBsdWdpbnMvd2ViL1JlYWRhYmxlU3RyZWFtRmFjdG9yeVwiLCB0ZXN0KGUpIHtcbiAgcmV0dXJuIGUgPT09IHA7XG59LCBwYXJzZTogeyBzeW5jKCkge1xufSwgYXN5bmMgYXN5bmMoKSB7XG4gIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUodm9pZCAwKTtcbn0sIHN0cmVhbSgpIHtcbn0gfSwgc2VyaWFsaXplKGUsIHIpIHtcbiAgcmV0dXJuIHIuY3JlYXRlRnVuY3Rpb24oW1wiZFwiXSwgXCJuZXcgUmVhZGFibGVTdHJlYW0oe3N0YXJ0OlwiICsgci5jcmVhdGVFZmZlY3RmdWxGdW5jdGlvbihbXCJjXCJdLCBcImQub24oe25leHQ6XCIgKyByLmNyZWF0ZUVmZmVjdGZ1bEZ1bmN0aW9uKFtcInZcIl0sIFwidHJ5e2MuZW5xdWV1ZSh2KX1jYXRjaHt9XCIpICsgXCIsdGhyb3c6XCIgKyByLmNyZWF0ZUVmZmVjdGZ1bEZ1bmN0aW9uKFtcInZcIl0sIFwiYy5lcnJvcih2KVwiKSArIFwiLHJldHVybjpcIiArIHIuY3JlYXRlRWZmZWN0ZnVsRnVuY3Rpb24oW10sIFwidHJ5e2MuY2xvc2UoKX1jYXRjaHt9XCIpICsgXCJ9KVwiKSArIFwifSlcIik7XG59LCBkZXNlcmlhbGl6ZSgpIHtcbiAgcmV0dXJuIHA7XG59IH0pO1xuZnVuY3Rpb24geihlKSB7XG4gIGxldCByID0gSygpLCBhID0gZS5nZXRSZWFkZXIoKTtcbiAgYXN5bmMgZnVuY3Rpb24gdCgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IG4gPSBhd2FpdCBhLnJlYWQoKTtcbiAgICAgIG4uZG9uZSA/IHIucmV0dXJuKG4udmFsdWUpIDogKHIubmV4dChuLnZhbHVlKSwgYXdhaXQgdCgpKTtcbiAgICB9IGNhdGNoIChuKSB7XG4gICAgICByLnRocm93KG4pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdCgpLmNhdGNoKCgpID0+IHtcbiAgfSksIHI7XG59XG52YXIgcmUgPSBIcih7IHRhZzogXCJzZXJvdmFsL3BsdWdpbnMvd2ViL1JlYWRhYmxlU3RyZWFtXCIsIGV4dGVuZHM6IFtlZTJdLCB0ZXN0KGUpIHtcbiAgcmV0dXJuIHR5cGVvZiBSZWFkYWJsZVN0cmVhbSA9PSBcInVuZGVmaW5lZFwiID8gZmFsc2UgOiBlIGluc3RhbmNlb2YgUmVhZGFibGVTdHJlYW07XG59LCBwYXJzZTogeyBzeW5jKGUsIHIpIHtcbiAgcmV0dXJuIHsgZmFjdG9yeTogci5wYXJzZShwKSwgc3RyZWFtOiByLnBhcnNlKEsoKSkgfTtcbn0sIGFzeW5jIGFzeW5jKGUsIHIpIHtcbiAgcmV0dXJuIHsgZmFjdG9yeTogYXdhaXQgci5wYXJzZShwKSwgc3RyZWFtOiBhd2FpdCByLnBhcnNlKHooZSkpIH07XG59LCBzdHJlYW0oZSwgcikge1xuICByZXR1cm4geyBmYWN0b3J5OiByLnBhcnNlKHApLCBzdHJlYW06IHIucGFyc2UoeihlKSkgfTtcbn0gfSwgc2VyaWFsaXplKGUsIHIpIHtcbiAgcmV0dXJuIFwiKFwiICsgci5zZXJpYWxpemUoZS5mYWN0b3J5KSArIFwiKShcIiArIHIuc2VyaWFsaXplKGUuc3RyZWFtKSArIFwiKVwiO1xufSwgZGVzZXJpYWxpemUoZSwgcikge1xuICBsZXQgYSA9IHIuZGVzZXJpYWxpemUoZS5zdHJlYW0pO1xuICByZXR1cm4gbmV3IFJlYWRhYmxlU3RyZWFtKHsgc3RhcnQodCkge1xuICAgIGEub24oeyBuZXh0KG4pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHQuZW5xdWV1ZShuKTtcbiAgICAgIH0gY2F0Y2ggKGIpIHtcbiAgICAgIH1cbiAgICB9LCB0aHJvdyhuKSB7XG4gICAgICB0LmVycm9yKG4pO1xuICAgIH0sIHJldHVybigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHQuY2xvc2UoKTtcbiAgICAgIH0gY2F0Y2ggKG4pIHtcbiAgICAgIH1cbiAgICB9IH0pO1xuICB9IH0pO1xufSB9KSwgdSA9IHJlO1xuY29uc3QgU2hhbGxvd0Vycm9yUGx1Z2luID0gLyogQF9fUFVSRV9fICovIEhyKHtcbiAgdGFnOiBcIiRUU1IvRXJyb3JcIixcbiAgdGVzdCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEVycm9yO1xuICB9LFxuICBwYXJzZToge1xuICAgIHN5bmModmFsdWUsIGN0eCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZTogY3R4LnBhcnNlKHZhbHVlLm1lc3NhZ2UpXG4gICAgICB9O1xuICAgIH0sXG4gICAgYXN5bmMgYXN5bmModmFsdWUsIGN0eCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZTogYXdhaXQgY3R4LnBhcnNlKHZhbHVlLm1lc3NhZ2UpXG4gICAgICB9O1xuICAgIH0sXG4gICAgc3RyZWFtKHZhbHVlLCBjdHgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1lc3NhZ2U6IGN0eC5wYXJzZSh2YWx1ZS5tZXNzYWdlKVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHNlcmlhbGl6ZShub2RlLCBjdHgpIHtcbiAgICByZXR1cm4gXCJuZXcgRXJyb3IoXCIgKyBjdHguc2VyaWFsaXplKG5vZGUubWVzc2FnZSkgKyBcIilcIjtcbiAgfSxcbiAgZGVzZXJpYWxpemUobm9kZSwgY3R4KSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihjdHguZGVzZXJpYWxpemUobm9kZS5tZXNzYWdlKSk7XG4gIH1cbn0pO1xuY29uc3QgZGVmYXVsdFNlcm92YWxQbHVnaW5zID0gW1xuICBTaGFsbG93RXJyb3JQbHVnaW4sXG4gIC8vIFJlYWRhYmxlU3RyZWFtTm9kZSBpcyBub3QgZXhwb3J0ZWQgYnkgc2Vyb3ZhbFxuICB1XG5dO1xuY29uc3QgVFNTX0ZPUk1EQVRBX0NPTlRFWFQgPSBcIl9fVFNTX0NPTlRFWFRcIjtcbmNvbnN0IFRTU19TRVJWRVJfRlVOQ1RJT04gPSBTeW1ib2wuZm9yKFwiVFNTX1NFUlZFUl9GVU5DVElPTlwiKTtcbmNvbnN0IFRTU19TRVJWRVJfRlVOQ1RJT05fRkFDVE9SWSA9IFN5bWJvbC5mb3IoXG4gIFwiVFNTX1NFUlZFUl9GVU5DVElPTl9GQUNUT1JZXCJcbik7XG5jb25zdCBYX1RTU19TRVJJQUxJWkVEID0gXCJ4LXRzcy1zZXJpYWxpemVkXCI7XG5jb25zdCBYX1RTU19SQVdfUkVTUE9OU0UgPSBcIngtdHNzLXJhd1wiO1xuY29uc3Qgc3RhcnRTdG9yYWdlID0gbmV3IEFzeW5jTG9jYWxTdG9yYWdlKCk7XG5hc3luYyBmdW5jdGlvbiBydW5XaXRoU3RhcnRDb250ZXh0KGNvbnRleHQsIGZuKSB7XG4gIHJldHVybiBzdGFydFN0b3JhZ2UucnVuKGNvbnRleHQsIGZuKTtcbn1cbmZ1bmN0aW9uIGdldFN0YXJ0Q29udGV4dChvcHRzKSB7XG4gIGNvbnN0IGNvbnRleHQgPSBzdGFydFN0b3JhZ2UuZ2V0U3RvcmUoKTtcbiAgaWYgKCFjb250ZXh0ICYmIG9wdHM/LnRocm93SWZOb3RGb3VuZCAhPT0gZmFsc2UpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgTm8gU3RhcnQgY29udGV4dCBmb3VuZCBpbiBBc3luY0xvY2FsU3RvcmFnZS4gTWFrZSBzdXJlIHlvdSBhcmUgdXNpbmcgdGhlIGZ1bmN0aW9uIHdpdGhpbiB0aGUgc2VydmVyIHJ1bnRpbWUuYFxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5jb25zdCBnZXRTZXJ2ZXJDb250ZXh0QWZ0ZXJHbG9iYWxNaWRkbGV3YXJlcyA9ICgpID0+IHtcbiAgY29uc3Qgc3RhcnQgPSBnZXRTdGFydENvbnRleHQoKTtcbiAgcmV0dXJuIHN0YXJ0LmNvbnRleHRBZnRlckdsb2JhbE1pZGRsZXdhcmVzO1xufTtcbmNvbnN0IGdldFN0YXJ0T3B0aW9ucyA9ICgpID0+IGdldFN0YXJ0Q29udGV4dCgpLnN0YXJ0T3B0aW9ucztcbmNvbnN0IGNyZWF0ZVNlcnZlckZuID0gKG9wdGlvbnMsIF9fb3B0cykgPT4ge1xuICBjb25zdCByZXNvbHZlZE9wdGlvbnMgPSBfX29wdHMgfHwgb3B0aW9ucyB8fCB7fTtcbiAgaWYgKHR5cGVvZiByZXNvbHZlZE9wdGlvbnMubWV0aG9kID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmVzb2x2ZWRPcHRpb25zLm1ldGhvZCA9IFwiR0VUXCI7XG4gIH1cbiAgY29uc3QgcmVzID0ge1xuICAgIG9wdGlvbnM6IHJlc29sdmVkT3B0aW9ucyxcbiAgICBtaWRkbGV3YXJlOiAobWlkZGxld2FyZSkgPT4ge1xuICAgICAgY29uc3QgbmV3TWlkZGxld2FyZSA9IFsuLi5yZXNvbHZlZE9wdGlvbnMubWlkZGxld2FyZSB8fCBbXV07XG4gICAgICBtaWRkbGV3YXJlLm1hcCgobTIpID0+IHtcbiAgICAgICAgaWYgKFRTU19TRVJWRVJfRlVOQ1RJT05fRkFDVE9SWSBpbiBtMikge1xuICAgICAgICAgIGlmIChtMi5vcHRpb25zLm1pZGRsZXdhcmUpIHtcbiAgICAgICAgICAgIG5ld01pZGRsZXdhcmUucHVzaCguLi5tMi5vcHRpb25zLm1pZGRsZXdhcmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdNaWRkbGV3YXJlLnB1c2gobTIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IG5ld09wdGlvbnMgPSB7XG4gICAgICAgIC4uLnJlc29sdmVkT3B0aW9ucyxcbiAgICAgICAgbWlkZGxld2FyZTogbmV3TWlkZGxld2FyZVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHJlczIgPSBjcmVhdGVTZXJ2ZXJGbih2b2lkIDAsIG5ld09wdGlvbnMpO1xuICAgICAgcmVzMltUU1NfU0VSVkVSX0ZVTkNUSU9OX0ZBQ1RPUlldID0gdHJ1ZTtcbiAgICAgIHJldHVybiByZXMyO1xuICAgIH0sXG4gICAgaW5wdXRWYWxpZGF0b3I6IChpbnB1dFZhbGlkYXRvcikgPT4ge1xuICAgICAgY29uc3QgbmV3T3B0aW9ucyA9IHsgLi4ucmVzb2x2ZWRPcHRpb25zLCBpbnB1dFZhbGlkYXRvciB9O1xuICAgICAgcmV0dXJuIGNyZWF0ZVNlcnZlckZuKHZvaWQgMCwgbmV3T3B0aW9ucyk7XG4gICAgfSxcbiAgICBoYW5kbGVyOiAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgW2V4dHJhY3RlZEZuLCBzZXJ2ZXJGbl0gPSBhcmdzO1xuICAgICAgY29uc3QgbmV3T3B0aW9ucyA9IHsgLi4ucmVzb2x2ZWRPcHRpb25zLCBleHRyYWN0ZWRGbiwgc2VydmVyRm4gfTtcbiAgICAgIGNvbnN0IHJlc29sdmVkTWlkZGxld2FyZSA9IFtcbiAgICAgICAgLi4ubmV3T3B0aW9ucy5taWRkbGV3YXJlIHx8IFtdLFxuICAgICAgICBzZXJ2ZXJGbkJhc2VUb01pZGRsZXdhcmUobmV3T3B0aW9ucylcbiAgICAgIF07XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgYXN5bmMgKG9wdHMpID0+IHtcbiAgICAgICAgICByZXR1cm4gZXhlY3V0ZU1pZGRsZXdhcmUkMShyZXNvbHZlZE1pZGRsZXdhcmUsIFwiY2xpZW50XCIsIHtcbiAgICAgICAgICAgIC4uLmV4dHJhY3RlZEZuLFxuICAgICAgICAgICAgLi4ubmV3T3B0aW9ucyxcbiAgICAgICAgICAgIGRhdGE6IG9wdHM/LmRhdGEsXG4gICAgICAgICAgICBoZWFkZXJzOiBvcHRzPy5oZWFkZXJzLFxuICAgICAgICAgICAgc2lnbmFsOiBvcHRzPy5zaWduYWwsXG4gICAgICAgICAgICBjb250ZXh0OiB7fVxuICAgICAgICAgIH0pLnRoZW4oKGQyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZDIuZXJyb3IpIHRocm93IGQyLmVycm9yO1xuICAgICAgICAgICAgcmV0dXJuIGQyLnJlc3VsdDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIC8vIFRoaXMgY29waWVzIG92ZXIgdGhlIFVSTCwgZnVuY3Rpb24gSURcbiAgICAgICAgICAuLi5leHRyYWN0ZWRGbixcbiAgICAgICAgICAvLyBUaGUgZXh0cmFjdGVkIGZ1bmN0aW9uIG9uIHRoZSBzZXJ2ZXItc2lkZSBjYWxsc1xuICAgICAgICAgIC8vIHRoaXMgZnVuY3Rpb25cbiAgICAgICAgICBfX2V4ZWN1dGVTZXJ2ZXI6IGFzeW5jIChvcHRzLCBzaWduYWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlcnZlckNvbnRleHRBZnRlckdsb2JhbE1pZGRsZXdhcmVzID0gZ2V0U2VydmVyQ29udGV4dEFmdGVyR2xvYmFsTWlkZGxld2FyZXMoKTtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICAgICAgLi4uZXh0cmFjdGVkRm4sXG4gICAgICAgICAgICAgIC4uLm9wdHMsXG4gICAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICAuLi5zZXJ2ZXJDb250ZXh0QWZ0ZXJHbG9iYWxNaWRkbGV3YXJlcyxcbiAgICAgICAgICAgICAgICAuLi5vcHRzLmNvbnRleHRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2lnbmFsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGV4ZWN1dGVNaWRkbGV3YXJlJDEocmVzb2x2ZWRNaWRkbGV3YXJlLCBcInNlcnZlclwiLCBjdHgpLnRoZW4oXG4gICAgICAgICAgICAgIChkMikgPT4gKHtcbiAgICAgICAgICAgICAgICAvLyBPbmx5IHNlbmQgdGhlIHJlc3VsdCBhbmQgc2VuZENvbnRleHQgYmFjayB0byB0aGUgY2xpZW50XG4gICAgICAgICAgICAgICAgcmVzdWx0OiBkMi5yZXN1bHQsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGQyLmVycm9yLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IGQyLnNlbmRDb250ZXh0XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGZ1biA9IChvcHRpb25zMikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5yZXMsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIC4uLnJlcy5vcHRpb25zLFxuICAgICAgICAuLi5vcHRpb25zMlxuICAgICAgfVxuICAgIH07XG4gIH07XG4gIHJldHVybiBPYmplY3QuYXNzaWduKGZ1biwgcmVzKTtcbn07XG5hc3luYyBmdW5jdGlvbiBleGVjdXRlTWlkZGxld2FyZSQxKG1pZGRsZXdhcmVzLCBlbnYsIG9wdHMpIHtcbiAgY29uc3QgZ2xvYmFsTWlkZGxld2FyZXMgPSBnZXRTdGFydE9wdGlvbnMoKT8uZnVuY3Rpb25NaWRkbGV3YXJlIHx8IFtdO1xuICBjb25zdCBmbGF0dGVuZWRNaWRkbGV3YXJlcyA9IGZsYXR0ZW5NaWRkbGV3YXJlcyhbXG4gICAgLi4uZ2xvYmFsTWlkZGxld2FyZXMsXG4gICAgLi4ubWlkZGxld2FyZXNcbiAgXSk7XG4gIGNvbnN0IG5leHQgPSBhc3luYyAoY3R4KSA9PiB7XG4gICAgY29uc3QgbmV4dE1pZGRsZXdhcmUgPSBmbGF0dGVuZWRNaWRkbGV3YXJlcy5zaGlmdCgpO1xuICAgIGlmICghbmV4dE1pZGRsZXdhcmUpIHtcbiAgICAgIHJldHVybiBjdHg7XG4gICAgfVxuICAgIGlmIChcImlucHV0VmFsaWRhdG9yXCIgaW4gbmV4dE1pZGRsZXdhcmUub3B0aW9ucyAmJiBuZXh0TWlkZGxld2FyZS5vcHRpb25zLmlucHV0VmFsaWRhdG9yICYmIGVudiA9PT0gXCJzZXJ2ZXJcIikge1xuICAgICAgY3R4LmRhdGEgPSBhd2FpdCBleGVjVmFsaWRhdG9yKFxuICAgICAgICBuZXh0TWlkZGxld2FyZS5vcHRpb25zLmlucHV0VmFsaWRhdG9yLFxuICAgICAgICBjdHguZGF0YVxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgbWlkZGxld2FyZUZuID0gZW52ID09PSBcImNsaWVudFwiICYmIFwiY2xpZW50XCIgaW4gbmV4dE1pZGRsZXdhcmUub3B0aW9ucyA/IG5leHRNaWRkbGV3YXJlLm9wdGlvbnMuY2xpZW50IDogbmV4dE1pZGRsZXdhcmUub3B0aW9ucy5zZXJ2ZXI7XG4gICAgaWYgKG1pZGRsZXdhcmVGbikge1xuICAgICAgcmV0dXJuIGFwcGx5TWlkZGxld2FyZShtaWRkbGV3YXJlRm4sIGN0eCwgYXN5bmMgKG5ld0N0eCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV4dChuZXdDdHgpLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGlmIChpc1JlZGlyZWN0KGVycm9yKSB8fCBpc05vdEZvdW5kKGVycm9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4ubmV3Q3R4LFxuICAgICAgICAgICAgICBlcnJvclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBuZXh0KGN0eCk7XG4gIH07XG4gIHJldHVybiBuZXh0KHtcbiAgICAuLi5vcHRzLFxuICAgIGhlYWRlcnM6IG9wdHMuaGVhZGVycyB8fCB7fSxcbiAgICBzZW5kQ29udGV4dDogb3B0cy5zZW5kQ29udGV4dCB8fCB7fSxcbiAgICBjb250ZXh0OiBvcHRzLmNvbnRleHQgfHwge31cbiAgfSk7XG59XG5mdW5jdGlvbiBmbGF0dGVuTWlkZGxld2FyZXMobWlkZGxld2FyZXMpIHtcbiAgY29uc3Qgc2VlbiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gIGNvbnN0IGZsYXR0ZW5lZCA9IFtdO1xuICBjb25zdCByZWN1cnNlID0gKG1pZGRsZXdhcmUpID0+IHtcbiAgICBtaWRkbGV3YXJlLmZvckVhY2goKG0yKSA9PiB7XG4gICAgICBpZiAobTIub3B0aW9ucy5taWRkbGV3YXJlKSB7XG4gICAgICAgIHJlY3Vyc2UobTIub3B0aW9ucy5taWRkbGV3YXJlKTtcbiAgICAgIH1cbiAgICAgIGlmICghc2Vlbi5oYXMobTIpKSB7XG4gICAgICAgIHNlZW4uYWRkKG0yKTtcbiAgICAgICAgZmxhdHRlbmVkLnB1c2gobTIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICByZWN1cnNlKG1pZGRsZXdhcmVzKTtcbiAgcmV0dXJuIGZsYXR0ZW5lZDtcbn1cbmNvbnN0IGFwcGx5TWlkZGxld2FyZSA9IGFzeW5jIChtaWRkbGV3YXJlRm4sIGN0eCwgbmV4dEZuKSA9PiB7XG4gIHJldHVybiBtaWRkbGV3YXJlRm4oe1xuICAgIC4uLmN0eCxcbiAgICBuZXh0OiAoYXN5bmMgKHVzZXJDdHggPSB7fSkgPT4ge1xuICAgICAgcmV0dXJuIG5leHRGbih7XG4gICAgICAgIC4uLmN0eCxcbiAgICAgICAgLi4udXNlckN0eCxcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgIC4uLmN0eC5jb250ZXh0LFxuICAgICAgICAgIC4uLnVzZXJDdHguY29udGV4dFxuICAgICAgICB9LFxuICAgICAgICBzZW5kQ29udGV4dDoge1xuICAgICAgICAgIC4uLmN0eC5zZW5kQ29udGV4dCxcbiAgICAgICAgICAuLi51c2VyQ3R4LnNlbmRDb250ZXh0ID8/IHt9XG4gICAgICAgIH0sXG4gICAgICAgIGhlYWRlcnM6IG1lcmdlSGVhZGVycyhjdHguaGVhZGVycywgdXNlckN0eC5oZWFkZXJzKSxcbiAgICAgICAgcmVzdWx0OiB1c2VyQ3R4LnJlc3VsdCAhPT0gdm9pZCAwID8gdXNlckN0eC5yZXN1bHQgOiB1c2VyQ3R4IGluc3RhbmNlb2YgUmVzcG9uc2UgPyB1c2VyQ3R4IDogY3R4LnJlc3VsdCxcbiAgICAgICAgZXJyb3I6IHVzZXJDdHguZXJyb3IgPz8gY3R4LmVycm9yXG4gICAgICB9KTtcbiAgICB9KVxuICB9KTtcbn07XG5mdW5jdGlvbiBleGVjVmFsaWRhdG9yKHZhbGlkYXRvciwgaW5wdXQpIHtcbiAgaWYgKHZhbGlkYXRvciA9PSBudWxsKSByZXR1cm4ge307XG4gIGlmIChcIn5zdGFuZGFyZFwiIGluIHZhbGlkYXRvcikge1xuICAgIGNvbnN0IHJlc3VsdCA9IHZhbGlkYXRvcltcIn5zdGFuZGFyZFwiXS52YWxpZGF0ZShpbnB1dCk7XG4gICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBc3luYyB2YWxpZGF0aW9uIG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgaWYgKHJlc3VsdC5pc3N1ZXMpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoSlNPTi5zdHJpbmdpZnkocmVzdWx0Lmlzc3Vlcywgdm9pZCAwLCAyKSk7XG4gICAgcmV0dXJuIHJlc3VsdC52YWx1ZTtcbiAgfVxuICBpZiAoXCJwYXJzZVwiIGluIHZhbGlkYXRvcikge1xuICAgIHJldHVybiB2YWxpZGF0b3IucGFyc2UoaW5wdXQpO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsaWRhdG9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gdmFsaWRhdG9yKGlucHV0KTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbGlkYXRvciB0eXBlIVwiKTtcbn1cbmZ1bmN0aW9uIHNlcnZlckZuQmFzZVRvTWlkZGxld2FyZShvcHRpb25zKSB7XG4gIHJldHVybiB7XG4gICAgX3R5cGVzOiB2b2lkIDAsXG4gICAgb3B0aW9uczoge1xuICAgICAgaW5wdXRWYWxpZGF0b3I6IG9wdGlvbnMuaW5wdXRWYWxpZGF0b3IsXG4gICAgICBjbGllbnQ6IGFzeW5jICh7IG5leHQsIHNlbmRDb250ZXh0LCAuLi5jdHggfSkgPT4ge1xuICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICAgIC4uLmN0eCxcbiAgICAgICAgICAvLyBzd2l0Y2ggdGhlIHNlbmRDb250ZXh0IG92ZXIgdG8gY29udGV4dFxuICAgICAgICAgIGNvbnRleHQ6IHNlbmRDb250ZXh0XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IG9wdGlvbnMuZXh0cmFjdGVkRm4/LihwYXlsb2FkKTtcbiAgICAgICAgcmV0dXJuIG5leHQocmVzKTtcbiAgICAgIH0sXG4gICAgICBzZXJ2ZXI6IGFzeW5jICh7IG5leHQsIC4uLmN0eCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG9wdGlvbnMuc2VydmVyRm4/LihjdHgpO1xuICAgICAgICByZXR1cm4gbmV4dCh7XG4gICAgICAgICAgLi4uY3R4LFxuICAgICAgICAgIHJlc3VsdFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBnZXREZWZhdWx0U2Vyb3ZhbFBsdWdpbnMoKSB7XG4gIGNvbnN0IHN0YXJ0ID0gZ2V0U3RhcnRPcHRpb25zKCk7XG4gIGNvbnN0IGFkYXB0ZXJzID0gc3RhcnQ/LnNlcmlhbGl6YXRpb25BZGFwdGVycztcbiAgcmV0dXJuIFtcbiAgICAuLi5hZGFwdGVycz8ubWFwKG1ha2VTZXJvdmFsUGx1Z2luKSA/PyBbXSxcbiAgICAuLi5kZWZhdWx0U2Vyb3ZhbFBsdWdpbnNcbiAgXTtcbn1cbmNvbnN0IG1pbmlmaWVkVHNyQm9vdFN0cmFwU2NyaXB0ID0gJ3NlbGYuJF9UU1I9e2MoKXtkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlxcXFxcXFxcJHRzclwiKS5mb3JFYWNoKGU9PntlLnJlbW92ZSgpfSl9LHAoZSl7dGhpcy5pbml0aWFsaXplZD9lKCk6dGhpcy5idWZmZXIucHVzaChlKX0sYnVmZmVyOltdfTtcXG4nO1xuY29uc3QgU0NPUEVfSUQgPSBcInRzclwiO1xuZnVuY3Rpb24gZGVoeWRyYXRlTWF0Y2gobWF0Y2gpIHtcbiAgY29uc3QgZGVoeWRyYXRlZE1hdGNoID0ge1xuICAgIGk6IG1hdGNoLmlkLFxuICAgIHU6IG1hdGNoLnVwZGF0ZWRBdCxcbiAgICBzOiBtYXRjaC5zdGF0dXNcbiAgfTtcbiAgY29uc3QgcHJvcGVydGllcyA9IFtcbiAgICBbXCJfX2JlZm9yZUxvYWRDb250ZXh0XCIsIFwiYlwiXSxcbiAgICBbXCJsb2FkZXJEYXRhXCIsIFwibFwiXSxcbiAgICBbXCJlcnJvclwiLCBcImVcIl0sXG4gICAgW1wic3NyXCIsIFwic3NyXCJdXG4gIF07XG4gIGZvciAoY29uc3QgW2tleSwgc2hvcnRoYW5kXSBvZiBwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKG1hdGNoW2tleV0gIT09IHZvaWQgMCkge1xuICAgICAgZGVoeWRyYXRlZE1hdGNoW3Nob3J0aGFuZF0gPSBtYXRjaFtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVoeWRyYXRlZE1hdGNoO1xufVxuZnVuY3Rpb24gYXR0YWNoUm91dGVyU2VydmVyU3NyVXRpbHMoe1xuICByb3V0ZXIsXG4gIG1hbmlmZXN0XG59KSB7XG4gIHJvdXRlci5zc3IgPSB7XG4gICAgbWFuaWZlc3RcbiAgfTtcbiAgbGV0IGluaXRpYWxTY3JpcHRTZW50ID0gZmFsc2U7XG4gIGNvbnN0IGdldEluaXRpYWxTY3JpcHQgPSAoKSA9PiB7XG4gICAgaWYgKGluaXRpYWxTY3JpcHRTZW50KSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgaW5pdGlhbFNjcmlwdFNlbnQgPSB0cnVlO1xuICAgIHJldHVybiBgJHt4cihTQ09QRV9JRCl9OyR7bWluaWZpZWRUc3JCb290U3RyYXBTY3JpcHR9O2A7XG4gIH07XG4gIGxldCBfZGVoeWRyYXRlZCA9IGZhbHNlO1xuICBjb25zdCBsaXN0ZW5lcnMgPSBbXTtcbiAgcm91dGVyLnNlcnZlclNzciA9IHtcbiAgICBpbmplY3RlZEh0bWw6IFtdLFxuICAgIGluamVjdEh0bWw6IChnZXRIdG1sKSA9PiB7XG4gICAgICBjb25zdCBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihnZXRIdG1sKTtcbiAgICAgIHJvdXRlci5zZXJ2ZXJTc3IuaW5qZWN0ZWRIdG1sLnB1c2gocHJvbWlzZSk7XG4gICAgICByb3V0ZXIuZW1pdCh7XG4gICAgICAgIHR5cGU6IFwib25JbmplY3RlZEh0bWxcIixcbiAgICAgICAgcHJvbWlzZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgaW5qZWN0U2NyaXB0OiAoZ2V0U2NyaXB0KSA9PiB7XG4gICAgICByZXR1cm4gcm91dGVyLnNlcnZlclNzci5pbmplY3RIdG1sKGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gYXdhaXQgZ2V0U2NyaXB0KCk7XG4gICAgICAgIHJldHVybiBgPHNjcmlwdCAke3JvdXRlci5vcHRpb25zLnNzcj8ubm9uY2UgPyBgbm9uY2U9JyR7cm91dGVyLm9wdGlvbnMuc3NyLm5vbmNlfSdgIDogXCJcIn0gY2xhc3M9JyR0c3InPiR7Z2V0SW5pdGlhbFNjcmlwdCgpfSR7c2NyaXB0fTskX1RTUi5jKCk8XFwvc2NyaXB0PmA7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGRlaHlkcmF0ZTogYXN5bmMgKCkgPT4ge1xuICAgICAgaW52YXJpYW50KCFfZGVoeWRyYXRlZCwgXCJyb3V0ZXIgaXMgYWxyZWFkeSBkZWh5ZHJhdGVkIVwiKTtcbiAgICAgIGxldCBtYXRjaGVzVG9EZWh5ZHJhdGUgPSByb3V0ZXIuc3RhdGUubWF0Y2hlcztcbiAgICAgIGlmIChyb3V0ZXIuaXNTaGVsbCgpKSB7XG4gICAgICAgIG1hdGNoZXNUb0RlaHlkcmF0ZSA9IG1hdGNoZXNUb0RlaHlkcmF0ZS5zbGljZSgwLCAxKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBtYXRjaGVzVG9EZWh5ZHJhdGUubWFwKGRlaHlkcmF0ZU1hdGNoKTtcbiAgICAgIGNvbnN0IGRlaHlkcmF0ZWRSb3V0ZXIgPSB7XG4gICAgICAgIG1hbmlmZXN0OiByb3V0ZXIuc3NyLm1hbmlmZXN0LFxuICAgICAgICBtYXRjaGVzXG4gICAgICB9O1xuICAgICAgY29uc3QgbGFzdE1hdGNoSWQgPSBtYXRjaGVzVG9EZWh5ZHJhdGVbbWF0Y2hlc1RvRGVoeWRyYXRlLmxlbmd0aCAtIDFdPy5pZDtcbiAgICAgIGlmIChsYXN0TWF0Y2hJZCkge1xuICAgICAgICBkZWh5ZHJhdGVkUm91dGVyLmxhc3RNYXRjaElkID0gbGFzdE1hdGNoSWQ7XG4gICAgICB9XG4gICAgICBkZWh5ZHJhdGVkUm91dGVyLmRlaHlkcmF0ZWREYXRhID0gYXdhaXQgcm91dGVyLm9wdGlvbnMuZGVoeWRyYXRlPy4oKTtcbiAgICAgIF9kZWh5ZHJhdGVkID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHAyID0gY3JlYXRlQ29udHJvbGxlZFByb21pc2UoKTtcbiAgICAgIGNvbnN0IHRyYWNrUGx1Z2lucyA9IHsgZGlkUnVuOiBmYWxzZSB9O1xuICAgICAgY29uc3QgcGx1Z2lucyA9IHJvdXRlci5vcHRpb25zLnNlcmlhbGl6YXRpb25BZGFwdGVycz8ubWFwKCh0KSA9PiBtYWtlU3NyU2Vyb3ZhbFBsdWdpbih0LCB0cmFja1BsdWdpbnMpKSA/PyBbXTtcbiAgICAgIGdyKGRlaHlkcmF0ZWRSb3V0ZXIsIHtcbiAgICAgICAgcmVmczogLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSxcbiAgICAgICAgcGx1Z2luczogWy4uLnBsdWdpbnMsIC4uLmRlZmF1bHRTZXJvdmFsUGx1Z2luc10sXG4gICAgICAgIG9uU2VyaWFsaXplOiAoZGF0YSwgaW5pdGlhbCkgPT4ge1xuICAgICAgICAgIGxldCBzZXJpYWxpemVkID0gaW5pdGlhbCA/IEdMT0JBTF9UU1IgKyBcIi5yb3V0ZXI9XCIgKyBkYXRhIDogZGF0YTtcbiAgICAgICAgICBpZiAodHJhY2tQbHVnaW5zLmRpZFJ1bikge1xuICAgICAgICAgICAgc2VyaWFsaXplZCA9IEdMT0JBTF9UU1IgKyBcIi5wKCgpPT5cIiArIHNlcmlhbGl6ZWQgKyBcIilcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcm91dGVyLnNlcnZlclNzci5pbmplY3RTY3JpcHQoKCkgPT4gc2VyaWFsaXplZCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNjb3BlSWQ6IFNDT1BFX0lELFxuICAgICAgICBvbkRvbmU6ICgpID0+IHAyLnJlc29sdmUoXCJcIiksXG4gICAgICAgIG9uRXJyb3I6IChlcnIpID0+IHAyLnJlamVjdChlcnIpXG4gICAgICB9KTtcbiAgICAgIHJvdXRlci5zZXJ2ZXJTc3IuaW5qZWN0SHRtbCgoKSA9PiBwMik7XG4gICAgfSxcbiAgICBpc0RlaHlkcmF0ZWQoKSB7XG4gICAgICByZXR1cm4gX2RlaHlkcmF0ZWQ7XG4gICAgfSxcbiAgICBvblJlbmRlckZpbmlzaGVkOiAobGlzdGVuZXIpID0+IGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKSxcbiAgICBzZXRSZW5kZXJGaW5pc2hlZDogKCkgPT4ge1xuICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGwpID0+IGwoKSk7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gZ2V0T3JpZ2luKHJlcXVlc3QpIHtcbiAgY29uc3Qgb3JpZ2luSGVhZGVyID0gcmVxdWVzdC5oZWFkZXJzLmdldChcIk9yaWdpblwiKTtcbiAgaWYgKG9yaWdpbkhlYWRlcikge1xuICAgIHRyeSB7XG4gICAgICBuZXcgVVJMKG9yaWdpbkhlYWRlcik7XG4gICAgICByZXR1cm4gb3JpZ2luSGVhZGVyO1xuICAgIH0gY2F0Y2gge1xuICAgIH1cbiAgfVxuICB0cnkge1xuICAgIHJldHVybiBuZXcgVVJMKHJlcXVlc3QudXJsKS5vcmlnaW47XG4gIH0gY2F0Y2gge1xuICB9XG4gIHJldHVybiBcImh0dHA6Ly9sb2NhbGhvc3RcIjtcbn1cbmNvbnN0IE51bGxQcm90b09iaiA9IC8qIEBfX1BVUkVfXyAqLyAoKCkgPT4ge1xuICBjb25zdCBlID0gZnVuY3Rpb24oKSB7XG4gIH07XG4gIHJldHVybiBlLnByb3RvdHlwZSA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpLCBPYmplY3QuZnJlZXplKGUucHJvdG90eXBlKSwgZTtcbn0pKCk7XG5jb25zdCBGYXN0VVJMID0gLyogQF9fUFVSRV9fICovICgoKSA9PiB7XG4gIGNvbnN0IEZhc3RVUkwkMSA9IGNsYXNzIFVSTCB7XG4gICAgI29yaWdpbmFsVVJMO1xuICAgICNwYXJzZWRVUkw7XG4gICAgX3BhdGhuYW1lO1xuICAgIF91cmxxaW5kZXg7XG4gICAgX3F1ZXJ5O1xuICAgIF9zZWFyY2g7XG4gICAgY29uc3RydWN0b3IodXJsKSB7XG4gICAgICB0aGlzLiNvcmlnaW5hbFVSTCA9IHVybDtcbiAgICB9XG4gICAgZ2V0IF91cmwoKSB7XG4gICAgICBpZiAoIXRoaXMuI3BhcnNlZFVSTCkgdGhpcy4jcGFyc2VkVVJMID0gbmV3IGdsb2JhbFRoaXMuVVJMKHRoaXMuI29yaWdpbmFsVVJMKTtcbiAgICAgIHJldHVybiB0aGlzLiNwYXJzZWRVUkw7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3VybC50b1N0cmluZygpO1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgIH1cbiAgICBnZXQgcGF0aG5hbWUoKSB7XG4gICAgICBpZiAodGhpcy4jcGFyc2VkVVJMKSByZXR1cm4gdGhpcy4jcGFyc2VkVVJMLnBhdGhuYW1lO1xuICAgICAgaWYgKHRoaXMuX3BhdGhuYW1lID09PSB2b2lkIDApIHtcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy4jb3JpZ2luYWxVUkw7XG4gICAgICAgIGNvbnN0IHByb3RvSW5kZXggPSB1cmwuaW5kZXhPZihcIjovL1wiKTtcbiAgICAgICAgaWYgKHByb3RvSW5kZXggPT09IC0xKSByZXR1cm4gdGhpcy5fdXJsLnBhdGhuYW1lO1xuICAgICAgICBjb25zdCBwSW5kZXggPSB1cmwuaW5kZXhPZihcIi9cIiwgcHJvdG9JbmRleCArIDQpO1xuICAgICAgICBpZiAocEluZGV4ID09PSAtMSkgcmV0dXJuIHRoaXMuX3VybC5wYXRobmFtZTtcbiAgICAgICAgY29uc3QgcUluZGV4ID0gdGhpcy5fdXJscWluZGV4ID0gdXJsLmluZGV4T2YoXCI/XCIsIHBJbmRleCk7XG4gICAgICAgIHRoaXMuX3BhdGhuYW1lID0gdXJsLnNsaWNlKHBJbmRleCwgcUluZGV4ID09PSAtMSA/IHZvaWQgMCA6IHFJbmRleCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fcGF0aG5hbWU7XG4gICAgfVxuICAgIHNldCBwYXRobmFtZSh2YWx1ZSkge1xuICAgICAgdGhpcy5fcGF0aG5hbWUgPSB2b2lkIDA7XG4gICAgICB0aGlzLl91cmwucGF0aG5hbWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHNlYXJjaFBhcmFtcygpIHtcbiAgICAgIGlmICh0aGlzLiNwYXJzZWRVUkwpIHJldHVybiB0aGlzLiNwYXJzZWRVUkwuc2VhcmNoUGFyYW1zO1xuICAgICAgaWYgKCF0aGlzLl9xdWVyeSkgdGhpcy5fcXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHRoaXMuc2VhcmNoKTtcbiAgICAgIHJldHVybiB0aGlzLl9xdWVyeTtcbiAgICB9XG4gICAgZ2V0IHNlYXJjaCgpIHtcbiAgICAgIGlmICh0aGlzLiNwYXJzZWRVUkwpIHJldHVybiB0aGlzLiNwYXJzZWRVUkwuc2VhcmNoO1xuICAgICAgaWYgKHRoaXMuX3NlYXJjaCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbnN0IHFJbmRleCA9IHRoaXMuX3VybHFpbmRleDtcbiAgICAgICAgaWYgKHFJbmRleCA9PT0gLTEgfHwgcUluZGV4ID09PSB0aGlzLiNvcmlnaW5hbFVSTC5sZW5ndGggLSAxKSB0aGlzLl9zZWFyY2ggPSBcIlwiO1xuICAgICAgICBlbHNlIHRoaXMuX3NlYXJjaCA9IHFJbmRleCA9PT0gdm9pZCAwID8gdGhpcy5fdXJsLnNlYXJjaCA6IHRoaXMuI29yaWdpbmFsVVJMLnNsaWNlKHFJbmRleCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fc2VhcmNoO1xuICAgIH1cbiAgICBzZXQgc2VhcmNoKHZhbHVlKSB7XG4gICAgICB0aGlzLl9zZWFyY2ggPSB2b2lkIDA7XG4gICAgICB0aGlzLl9xdWVyeSA9IHZvaWQgMDtcbiAgICAgIHRoaXMuX3VybC5zZWFyY2ggPSB2YWx1ZTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHNsb3dQcm9wcyA9IFtcbiAgICBcImhhc2hcIixcbiAgICBcImhvc3RcIixcbiAgICBcImhvc3RuYW1lXCIsXG4gICAgXCJocmVmXCIsXG4gICAgXCJvcmlnaW5cIixcbiAgICBcInBhc3N3b3JkXCIsXG4gICAgXCJwb3J0XCIsXG4gICAgXCJwcm90b2NvbFwiLFxuICAgIFwidXNlcm5hbWVcIlxuICBdO1xuICBmb3IgKGNvbnN0IHByb3Agb2Ygc2xvd1Byb3BzKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFzdFVSTCQxLnByb3RvdHlwZSwgcHJvcCwge1xuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl91cmxbcHJvcF07XG4gICAgfSxcbiAgICBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMuX3VybFtwcm9wXSA9IHZhbHVlO1xuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihGYXN0VVJMJDEsIGdsb2JhbFRoaXMuVVJMKTtcbiAgcmV0dXJuIEZhc3RVUkwkMTtcbn0pKCk7XG5mdW5jdGlvbiBpbmhlcml0UHJvcHModGFyZ2V0LCBzb3VyY2UsIHNvdXJjZUtleSkge1xuICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2UpKSB7XG4gICAgaWYgKGtleSBpbiB0YXJnZXQpIGNvbnRpbnVlO1xuICAgIGNvbnN0IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KTtcbiAgICBpZiAoZGVzYy5nZXQpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuICAgICAgLi4uZGVzYyxcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbc291cmNlS2V5XVtrZXldO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGVsc2UgaWYgKHR5cGVvZiBkZXNjLnZhbHVlID09PSBcImZ1bmN0aW9uXCIpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuICAgICAgLi4uZGVzYyxcbiAgICAgIHZhbHVlKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbc291cmNlS2V5XVtrZXldKC4uLmFyZ3MpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGVsc2UgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBkZXNjKTtcbiAgfVxufVxuY29uc3QgTm9kZVJlc3BvbnNlID0gLyogQF9fUFVSRV9fICovICgoKSA9PiB7XG4gIGNvbnN0IE5hdGl2ZVJlc3BvbnNlID0gZ2xvYmFsVGhpcy5SZXNwb25zZTtcbiAgY29uc3QgU1RBVFVTX0NPREVTID0gZ2xvYmFsVGhpcy5wcm9jZXNzPy5nZXRCdWlsdGluTW9kdWxlKFwibm9kZTpodHRwXCIpPy5TVEFUVVNfQ09ERVMgfHwge307XG4gIGNsYXNzIE5vZGVSZXNwb25zZSQxIHtcbiAgICAjYm9keTtcbiAgICAjaW5pdDtcbiAgICAjaGVhZGVycztcbiAgICAjcmVzcG9uc2U7XG4gICAgY29uc3RydWN0b3IoYm9keSwgaW5pdCkge1xuICAgICAgdGhpcy4jYm9keSA9IGJvZHk7XG4gICAgICB0aGlzLiNpbml0ID0gaW5pdDtcbiAgICB9XG4gICAgZ2V0IHN0YXR1cygpIHtcbiAgICAgIHJldHVybiB0aGlzLiNyZXNwb25zZT8uc3RhdHVzIHx8IHRoaXMuI2luaXQ/LnN0YXR1cyB8fCAyMDA7XG4gICAgfVxuICAgIGdldCBzdGF0dXNUZXh0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuI3Jlc3BvbnNlPy5zdGF0dXNUZXh0IHx8IHRoaXMuI2luaXQ/LnN0YXR1c1RleHQgfHwgU1RBVFVTX0NPREVTW3RoaXMuc3RhdHVzXSB8fCBcIlwiO1xuICAgIH1cbiAgICBnZXQgaGVhZGVycygpIHtcbiAgICAgIGlmICh0aGlzLiNyZXNwb25zZSkgcmV0dXJuIHRoaXMuI3Jlc3BvbnNlLmhlYWRlcnM7XG4gICAgICBpZiAodGhpcy4jaGVhZGVycykgcmV0dXJuIHRoaXMuI2hlYWRlcnM7XG4gICAgICBjb25zdCBpbml0SGVhZGVycyA9IHRoaXMuI2luaXQ/LmhlYWRlcnM7XG4gICAgICByZXR1cm4gdGhpcy4jaGVhZGVycyA9IGluaXRIZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycyA/IGluaXRIZWFkZXJzIDogbmV3IEhlYWRlcnMoaW5pdEhlYWRlcnMpO1xuICAgIH1cbiAgICBnZXQgb2soKSB7XG4gICAgICBpZiAodGhpcy4jcmVzcG9uc2UpIHJldHVybiB0aGlzLiNyZXNwb25zZS5vaztcbiAgICAgIGNvbnN0IHN0YXR1cyA9IHRoaXMuc3RhdHVzO1xuICAgICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICAgIH1cbiAgICBnZXQgX3Jlc3BvbnNlKCkge1xuICAgICAgaWYgKHRoaXMuI3Jlc3BvbnNlKSByZXR1cm4gdGhpcy4jcmVzcG9uc2U7XG4gICAgICB0aGlzLiNyZXNwb25zZSA9IG5ldyBOYXRpdmVSZXNwb25zZSh0aGlzLiNib2R5LCB0aGlzLiNoZWFkZXJzID8ge1xuICAgICAgICAuLi50aGlzLiNpbml0LFxuICAgICAgICBoZWFkZXJzOiB0aGlzLiNoZWFkZXJzXG4gICAgICB9IDogdGhpcy4jaW5pdCk7XG4gICAgICB0aGlzLiNpbml0ID0gdm9pZCAwO1xuICAgICAgdGhpcy4jaGVhZGVycyA9IHZvaWQgMDtcbiAgICAgIHRoaXMuI2JvZHkgPSB2b2lkIDA7XG4gICAgICByZXR1cm4gdGhpcy4jcmVzcG9uc2U7XG4gICAgfVxuICAgIG5vZGVSZXNwb25zZSgpIHtcbiAgICAgIGNvbnN0IHN0YXR1cyA9IHRoaXMuc3RhdHVzO1xuICAgICAgY29uc3Qgc3RhdHVzVGV4dCA9IHRoaXMuc3RhdHVzVGV4dDtcbiAgICAgIGxldCBib2R5O1xuICAgICAgbGV0IGNvbnRlbnRUeXBlO1xuICAgICAgbGV0IGNvbnRlbnRMZW5ndGg7XG4gICAgICBpZiAodGhpcy4jcmVzcG9uc2UpIGJvZHkgPSB0aGlzLiNyZXNwb25zZS5ib2R5O1xuICAgICAgZWxzZSBpZiAodGhpcy4jYm9keSkgaWYgKHRoaXMuI2JvZHkgaW5zdGFuY2VvZiBSZWFkYWJsZVN0cmVhbSkgYm9keSA9IHRoaXMuI2JvZHk7XG4gICAgICBlbHNlIGlmICh0eXBlb2YgdGhpcy4jYm9keSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBib2R5ID0gdGhpcy4jYm9keTtcbiAgICAgICAgY29udGVudFR5cGUgPSBcInRleHQvcGxhaW47IGNoYXJzZXQ9VVRGLThcIjtcbiAgICAgICAgY29udGVudExlbmd0aCA9IEJ1ZmZlci5ieXRlTGVuZ3RoKHRoaXMuI2JvZHkpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLiNib2R5IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgYm9keSA9IEJ1ZmZlci5mcm9tKHRoaXMuI2JvZHkpO1xuICAgICAgICBjb250ZW50TGVuZ3RoID0gdGhpcy4jYm9keS5ieXRlTGVuZ3RoO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLiNib2R5IGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgICAgICBib2R5ID0gdGhpcy4jYm9keTtcbiAgICAgICAgY29udGVudExlbmd0aCA9IHRoaXMuI2JvZHkuYnl0ZUxlbmd0aDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy4jYm9keSBpbnN0YW5jZW9mIERhdGFWaWV3KSB7XG4gICAgICAgIGJvZHkgPSBCdWZmZXIuZnJvbSh0aGlzLiNib2R5LmJ1ZmZlcik7XG4gICAgICAgIGNvbnRlbnRMZW5ndGggPSB0aGlzLiNib2R5LmJ5dGVMZW5ndGg7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuI2JvZHkgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgICAgIGJvZHkgPSB0aGlzLiNib2R5LnN0cmVhbSgpO1xuICAgICAgICBjb250ZW50VHlwZSA9IHRoaXMuI2JvZHkudHlwZTtcbiAgICAgICAgY29udGVudExlbmd0aCA9IHRoaXMuI2JvZHkuc2l6ZTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuI2JvZHkucGlwZSA9PT0gXCJmdW5jdGlvblwiKSBib2R5ID0gdGhpcy4jYm9keTtcbiAgICAgIGVsc2UgYm9keSA9IHRoaXMuX3Jlc3BvbnNlLmJvZHk7XG4gICAgICBjb25zdCByYXdOb2RlSGVhZGVycyA9IFtdO1xuICAgICAgY29uc3QgaW5pdEhlYWRlcnMgPSB0aGlzLiNpbml0Py5oZWFkZXJzO1xuICAgICAgY29uc3QgaGVhZGVyRW50cmllcyA9IHRoaXMuI3Jlc3BvbnNlPy5oZWFkZXJzIHx8IHRoaXMuI2hlYWRlcnMgfHwgKGluaXRIZWFkZXJzID8gQXJyYXkuaXNBcnJheShpbml0SGVhZGVycykgPyBpbml0SGVhZGVycyA6IGluaXRIZWFkZXJzPy5lbnRyaWVzID8gaW5pdEhlYWRlcnMuZW50cmllcygpIDogT2JqZWN0LmVudHJpZXMoaW5pdEhlYWRlcnMpLm1hcCgoW2syLCB2Ml0pID0+IFtrMi50b0xvd2VyQ2FzZSgpLCB2Ml0pIDogdm9pZCAwKTtcbiAgICAgIGxldCBoYXNDb250ZW50VHlwZUhlYWRlcjtcbiAgICAgIGxldCBoYXNDb250ZW50TGVuZ3RoO1xuICAgICAgaWYgKGhlYWRlckVudHJpZXMpIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIGhlYWRlckVudHJpZXMpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gXCJzZXQtY29va2llXCIpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHNldENvb2tpZSBvZiBzcGxpdFNldENvb2tpZVN0cmluZyh2YWx1ZSkpIHJhd05vZGVIZWFkZXJzLnB1c2goW1wic2V0LWNvb2tpZVwiLCBzZXRDb29raWVdKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICByYXdOb2RlSGVhZGVycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICAgIGlmIChrZXkgPT09IFwiY29udGVudC10eXBlXCIpIGhhc0NvbnRlbnRUeXBlSGVhZGVyID0gdHJ1ZTtcbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSBcImNvbnRlbnQtbGVuZ3RoXCIpIGhhc0NvbnRlbnRMZW5ndGggPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGNvbnRlbnRUeXBlICYmICFoYXNDb250ZW50VHlwZUhlYWRlcikgcmF3Tm9kZUhlYWRlcnMucHVzaChbXCJjb250ZW50LXR5cGVcIiwgY29udGVudFR5cGVdKTtcbiAgICAgIGlmIChjb250ZW50TGVuZ3RoICYmICFoYXNDb250ZW50TGVuZ3RoKSByYXdOb2RlSGVhZGVycy5wdXNoKFtcImNvbnRlbnQtbGVuZ3RoXCIsIFN0cmluZyhjb250ZW50TGVuZ3RoKV0pO1xuICAgICAgdGhpcy4jaW5pdCA9IHZvaWQgMDtcbiAgICAgIHRoaXMuI2hlYWRlcnMgPSB2b2lkIDA7XG4gICAgICB0aGlzLiNyZXNwb25zZSA9IHZvaWQgMDtcbiAgICAgIHRoaXMuI2JvZHkgPSB2b2lkIDA7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJhd05vZGVIZWFkZXJzLFxuICAgICAgICBib2R5XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBpbmhlcml0UHJvcHMoTm9kZVJlc3BvbnNlJDEucHJvdG90eXBlLCBOYXRpdmVSZXNwb25zZS5wcm90b3R5cGUsIFwiX3Jlc3BvbnNlXCIpO1xuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoTm9kZVJlc3BvbnNlJDEsIE5hdGl2ZVJlc3BvbnNlKTtcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKE5vZGVSZXNwb25zZSQxLnByb3RvdHlwZSwgTmF0aXZlUmVzcG9uc2UucHJvdG90eXBlKTtcbiAgcmV0dXJuIE5vZGVSZXNwb25zZSQxO1xufSkoKTtcbnZhciBIM0V2ZW50ID0gY2xhc3Mge1xuICAvKipcbiAgKiBBY2Nlc3MgdG8gdGhlIEgzIGFwcGxpY2F0aW9uIGluc3RhbmNlLlxuICAqL1xuICBhcHA7XG4gIC8qKlxuICAqIEluY29taW5nIEhUVFAgcmVxdWVzdCBpbmZvLlxuICAqXG4gICogW01ETiBSZWZlcmVuY2VdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9SZXF1ZXN0KVxuICAqL1xuICByZXE7XG4gIC8qKlxuICAqIEFjY2VzcyB0byB0aGUgcGFyc2VkIHJlcXVlc3QgVVJMLlxuICAqXG4gICogW01ETiBSZWZlcmVuY2VdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9VUkwpXG4gICovXG4gIHVybDtcbiAgLyoqXG4gICogRXZlbnQgY29udGV4dC5cbiAgKi9cbiAgY29udGV4dDtcbiAgLyoqXG4gICogQGludGVybmFsXG4gICovXG4gIHN0YXRpYyBfX2lzX2V2ZW50X18gPSB0cnVlO1xuICAvKipcbiAgKiBAaW50ZXJuYWxcbiAgKi9cbiAgX3JlcztcbiAgY29uc3RydWN0b3IocmVxLCBjb250ZXh0LCBhcHApIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0IHx8IHJlcS5jb250ZXh0IHx8IG5ldyBOdWxsUHJvdG9PYmooKTtcbiAgICB0aGlzLnJlcSA9IHJlcTtcbiAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICBjb25zdCBfdXJsID0gcmVxLl91cmw7XG4gICAgdGhpcy51cmwgPSBfdXJsICYmIF91cmwgaW5zdGFuY2VvZiBVUkwgPyBfdXJsIDogbmV3IEZhc3RVUkwocmVxLnVybCk7XG4gIH1cbiAgLyoqXG4gICogUHJlcGFyZWQgSFRUUCByZXNwb25zZS5cbiAgKi9cbiAgZ2V0IHJlcygpIHtcbiAgICBpZiAoIXRoaXMuX3JlcykgdGhpcy5fcmVzID0gbmV3IEgzRXZlbnRSZXNwb25zZSgpO1xuICAgIHJldHVybiB0aGlzLl9yZXM7XG4gIH1cbiAgLyoqXG4gICogQWNjZXNzIHRvIHJ1bnRpbWUgc3BlY2lmaWMgYWRkaXRpb25hbCBjb250ZXh0LlxuICAqXG4gICovXG4gIGdldCBydW50aW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJlcS5ydW50aW1lO1xuICB9XG4gIC8qKlxuICAqIFRlbGwgdGhlIHJ1bnRpbWUgYWJvdXQgYW4gb25nb2luZyBvcGVyYXRpb24gdGhhdCBzaG91bGRuJ3QgY2xvc2UgdW50aWwgdGhlIHByb21pc2UgcmVzb2x2ZXMuXG4gICovXG4gIHdhaXRVbnRpbChwcm9taXNlKSB7XG4gICAgdGhpcy5yZXEud2FpdFVudGlsPy4ocHJvbWlzZSk7XG4gIH1cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGBbJHt0aGlzLnJlcS5tZXRob2R9XSAke3RoaXMucmVxLnVybH1gO1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICB9XG4gIC8qKlxuICAqIEFjY2VzcyB0byB0aGUgcmF3IE5vZGUuanMgcmVxL3JlcyBvYmplY3RzLlxuICAqXG4gICogQGRlcHJlY2F0ZWQgVXNlIGBldmVudC5ydW50aW1lLntub2RlfGRlbm98YnVufC4uLn0uYCBpbnN0ZWFkLlxuICAqL1xuICBnZXQgbm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXEucnVudGltZT8ubm9kZTtcbiAgfVxuICAvKipcbiAgKiBBY2Nlc3MgdG8gdGhlIGluY29taW5nIHJlcXVlc3QgaGVhZGVycy5cbiAgKlxuICAqIEBkZXByZWNhdGVkIFVzZSBgZXZlbnQucmVxLmhlYWRlcnNgIGluc3RlYWQuXG4gICpcbiAgKi9cbiAgZ2V0IGhlYWRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxLmhlYWRlcnM7XG4gIH1cbiAgLyoqXG4gICogQWNjZXNzIHRvIHRoZSBpbmNvbWluZyByZXF1ZXN0IHVybCAocGF0aG5hbWUrc2VhcmNoKS5cbiAgKlxuICAqIEBkZXByZWNhdGVkIFVzZSBgZXZlbnQudXJsLnBhdGhuYW1lICsgZXZlbnQudXJsLnNlYXJjaGAgaW5zdGVhZC5cbiAgKlxuICAqIEV4YW1wbGU6IGAvYXBpL2hlbGxvP25hbWU9d29ybGRgXG4gICogKi9cbiAgZ2V0IHBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMudXJsLnBhdGhuYW1lICsgdGhpcy51cmwuc2VhcmNoO1xuICB9XG4gIC8qKlxuICAqIEFjY2VzcyB0byB0aGUgaW5jb21pbmcgcmVxdWVzdCBtZXRob2QuXG4gICpcbiAgKiBAZGVwcmVjYXRlZCBVc2UgYGV2ZW50LnJlcS5tZXRob2RgIGluc3RlYWQuXG4gICovXG4gIGdldCBtZXRob2QoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxLm1ldGhvZDtcbiAgfVxufTtcbnZhciBIM0V2ZW50UmVzcG9uc2UgPSBjbGFzcyB7XG4gIHN0YXR1cztcbiAgc3RhdHVzVGV4dDtcbiAgX2hlYWRlcnM7XG4gIGdldCBoZWFkZXJzKCkge1xuICAgIGlmICghdGhpcy5faGVhZGVycykgdGhpcy5faGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlcnM7XG4gIH1cbn07XG5jb25zdCBESVNBTExPV0VEX1NUQVRVU19DSEFSUyA9IC9bXlxcdTAwMDlcXHUwMDIwLVxcdTAwN0VdL2c7XG5mdW5jdGlvbiBzYW5pdGl6ZVN0YXR1c01lc3NhZ2Uoc3RhdHVzTWVzc2FnZSA9IFwiXCIpIHtcbiAgcmV0dXJuIHN0YXR1c01lc3NhZ2UucmVwbGFjZShESVNBTExPV0VEX1NUQVRVU19DSEFSUywgXCJcIik7XG59XG5mdW5jdGlvbiBzYW5pdGl6ZVN0YXR1c0NvZGUoc3RhdHVzQ29kZSwgZGVmYXVsdFN0YXR1c0NvZGUgPSAyMDApIHtcbiAgaWYgKCFzdGF0dXNDb2RlKSByZXR1cm4gZGVmYXVsdFN0YXR1c0NvZGU7XG4gIGlmICh0eXBlb2Ygc3RhdHVzQ29kZSA9PT0gXCJzdHJpbmdcIikgc3RhdHVzQ29kZSA9ICtzdGF0dXNDb2RlO1xuICBpZiAoc3RhdHVzQ29kZSA8IDEwMCB8fCBzdGF0dXNDb2RlID4gNTk5KSByZXR1cm4gZGVmYXVsdFN0YXR1c0NvZGU7XG4gIHJldHVybiBzdGF0dXNDb2RlO1xufVxudmFyIEhUVFBFcnJvciA9IGNsYXNzIEhUVFBFcnJvcjIgZXh0ZW5kcyBFcnJvciB7XG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiBcIkhUVFBFcnJvclwiO1xuICB9XG4gIC8qKlxuICAqIEhUVFAgc3RhdHVzIGNvZGUgaW4gcmFuZ2UgWzIwMC4uLjU5OV1cbiAgKi9cbiAgc3RhdHVzO1xuICAvKipcbiAgKiBIVFRQIHN0YXR1cyB0ZXh0XG4gICpcbiAgKiAqKk5PVEU6KiogVGhpcyBzaG91bGQgYmUgc2hvcnQgKG1heCA1MTIgdG8gMTAyNCBjaGFyYWN0ZXJzKS5cbiAgKiBBbGxvd2VkIGNoYXJhY3RlcnMgYXJlIHRhYnMsIHNwYWNlcywgdmlzaWJsZSBBU0NJSSBjaGFyYWN0ZXJzLCBhbmQgZXh0ZW5kZWQgY2hhcmFjdGVycyAoYnl0ZSB2YWx1ZSAxMjhcdTIwMTMyNTUpLlxuICAqXG4gICogKipUSVA6KiogVXNlIGBtZXNzYWdlYCBmb3IgbG9uZ2VyIGVycm9yIGRlc2NyaXB0aW9ucyBpbiBKU09OIGJvZHkuXG4gICovXG4gIHN0YXR1c1RleHQ7XG4gIC8qKlxuICAqIEFkZGl0aW9uYWwgSFRUUCBoZWFkZXJzIHRvIGJlIHNlbnQgaW4gZXJyb3IgcmVzcG9uc2UuXG4gICovXG4gIGhlYWRlcnM7XG4gIC8qKlxuICAqIE9yaWdpbmFsIGVycm9yIG9iamVjdCB0aGF0IGNhdXNlZCB0aGlzIGVycm9yLlxuICAqL1xuICBjYXVzZTtcbiAgLyoqXG4gICogQWRkaXRpb25hbCBkYXRhIGF0dGFjaGVkIGluIHRoZSBlcnJvciBKU09OIGJvZHkgdW5kZXIgYGRhdGFgIGtleS5cbiAgKi9cbiAgZGF0YTtcbiAgLyoqXG4gICogQWRkaXRpb25hbCB0b3AgbGV2ZWwgSlNPTiBib2R5IHByb3BlcnRpZXMgdG8gYXR0YWNoIGluIHRoZSBlcnJvciBKU09OIGJvZHkuXG4gICovXG4gIGJvZHk7XG4gIC8qKlxuICAqIEZsYWcgdG8gaW5kaWNhdGUgdGhhdCB0aGUgZXJyb3Igd2FzIG5vdCBoYW5kbGVkIGJ5IHRoZSBhcHBsaWNhdGlvbi5cbiAgKlxuICAqIFVuaGFuZGxlZCBlcnJvciBzdGFjayB0cmFjZSwgZGF0YSBhbmQgbWVzc2FnZSBhcmUgaGlkZGVuIGluIG5vbiBkZWJ1ZyBtb2RlIGZvciBzZWN1cml0eSByZWFzb25zLlxuICAqL1xuICB1bmhhbmRsZWQ7XG4gIC8qKlxuICAqIENoZWNrIGlmIHRoZSBpbnB1dCBpcyBhbiBpbnN0YW5jZSBvZiBIVFRQRXJyb3IgdXNpbmcgaXRzIGNvbnN0cnVjdG9yIG5hbWUuXG4gICpcbiAgKiBJdCBpcyBzYWZlciB0aGFuIHVzaW5nIGBpbnN0YW5jZW9mYCBiZWNhdXNlIGl0IHdvcmtzIGFjcm9zcyBkaWZmZXJlbnQgY29udGV4dHMgKGUuZy4sIGlmIHRoZSBlcnJvciB3YXMgdGhyb3duIGluIGEgZGlmZmVyZW50IG1vZHVsZSkuXG4gICovXG4gIHN0YXRpYyBpc0Vycm9yKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0IGluc3RhbmNlb2YgRXJyb3IgJiYgaW5wdXQ/Lm5hbWUgPT09IFwiSFRUUEVycm9yXCI7XG4gIH1cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IEhUVFBFcnJvciB3aXRoIHRoZSBnaXZlbiBzdGF0dXMgY29kZSBhbmQgb3B0aW9uYWwgc3RhdHVzIHRleHQgYW5kIGRldGFpbHMuXG4gICpcbiAgKiBAZXhhbXBsZVxuICAqXG4gICogSFRUUEVycm9yLnN0YXR1cyg0MDQpXG4gICogSFRUUEVycm9yLnN0YXR1cyg0MTgsIFwiSSdtIGEgdGVhcG90XCIpXG4gICogSFRUUEVycm9yLnN0YXR1cyg0MDMsIFwiRm9yYmlkZGVuXCIsIHsgbWVzc2FnZTogXCJOb3QgYXV0aGVudGljYXRlZFwiIH0pXG4gICovXG4gIHN0YXRpYyBzdGF0dXMoc3RhdHVzLCBzdGF0dXNUZXh0LCBkZXRhaWxzKSB7XG4gICAgcmV0dXJuIG5ldyBIVFRQRXJyb3IyKHtcbiAgICAgIC4uLmRldGFpbHMsXG4gICAgICBzdGF0dXNUZXh0LFxuICAgICAgc3RhdHVzXG4gICAgfSk7XG4gIH1cbiAgY29uc3RydWN0b3IoYXJnMSwgYXJnMikge1xuICAgIGxldCBtZXNzYWdlSW5wdXQ7XG4gICAgbGV0IGRldGFpbHM7XG4gICAgaWYgKHR5cGVvZiBhcmcxID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtZXNzYWdlSW5wdXQgPSBhcmcxO1xuICAgICAgZGV0YWlscyA9IGFyZzI7XG4gICAgfSBlbHNlIGRldGFpbHMgPSBhcmcxO1xuICAgIGNvbnN0IHN0YXR1cyA9IHNhbml0aXplU3RhdHVzQ29kZShkZXRhaWxzPy5zdGF0dXMgfHwgZGV0YWlscz8uY2F1c2U/LnN0YXR1cyB8fCBkZXRhaWxzPy5zdGF0dXMgfHwgZGV0YWlscz8uc3RhdHVzQ29kZSwgNTAwKTtcbiAgICBjb25zdCBzdGF0dXNUZXh0ID0gc2FuaXRpemVTdGF0dXNNZXNzYWdlKGRldGFpbHM/LnN0YXR1c1RleHQgfHwgZGV0YWlscz8uY2F1c2U/LnN0YXR1c1RleHQgfHwgZGV0YWlscz8uc3RhdHVzVGV4dCB8fCBkZXRhaWxzPy5zdGF0dXNNZXNzYWdlKTtcbiAgICBjb25zdCBtZXNzYWdlID0gbWVzc2FnZUlucHV0IHx8IGRldGFpbHM/Lm1lc3NhZ2UgfHwgZGV0YWlscz8uY2F1c2U/Lm1lc3NhZ2UgfHwgZGV0YWlscz8uc3RhdHVzVGV4dCB8fCBkZXRhaWxzPy5zdGF0dXNNZXNzYWdlIHx8IFtcbiAgICAgIFwiSFRUUEVycm9yXCIsXG4gICAgICBzdGF0dXMsXG4gICAgICBzdGF0dXNUZXh0XG4gICAgXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIik7XG4gICAgc3VwZXIobWVzc2FnZSwgeyBjYXVzZTogZGV0YWlscyB9KTtcbiAgICB0aGlzLmNhdXNlID0gZGV0YWlscztcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZT8uKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQgfHwgdm9pZCAwO1xuICAgIGNvbnN0IHJhd0hlYWRlcnMgPSBkZXRhaWxzPy5oZWFkZXJzIHx8IGRldGFpbHM/LmNhdXNlPy5oZWFkZXJzO1xuICAgIHRoaXMuaGVhZGVycyA9IHJhd0hlYWRlcnMgPyBuZXcgSGVhZGVycyhyYXdIZWFkZXJzKSA6IHZvaWQgMDtcbiAgICB0aGlzLnVuaGFuZGxlZCA9IGRldGFpbHM/LnVuaGFuZGxlZCA/PyBkZXRhaWxzPy5jYXVzZT8udW5oYW5kbGVkID8/IHZvaWQgMDtcbiAgICB0aGlzLmRhdGEgPSBkZXRhaWxzPy5kYXRhO1xuICAgIHRoaXMuYm9keSA9IGRldGFpbHM/LmJvZHk7XG4gIH1cbiAgLyoqXG4gICogQGRlcHJlY2F0ZWQgVXNlIGBzdGF0dXNgXG4gICovXG4gIGdldCBzdGF0dXNDb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cztcbiAgfVxuICAvKipcbiAgKiBAZGVwcmVjYXRlZCBVc2UgYHN0YXR1c1RleHRgXG4gICovXG4gIGdldCBzdGF0dXNNZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1c1RleHQ7XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHVuaGFuZGxlZCA9IHRoaXMudW5oYW5kbGVkO1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgc3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgdW5oYW5kbGVkLFxuICAgICAgbWVzc2FnZTogdW5oYW5kbGVkID8gXCJIVFRQRXJyb3JcIiA6IHRoaXMubWVzc2FnZSxcbiAgICAgIGRhdGE6IHVuaGFuZGxlZCA/IHZvaWQgMCA6IHRoaXMuZGF0YSxcbiAgICAgIC4uLnVuaGFuZGxlZCA/IHZvaWQgMCA6IHRoaXMuYm9keVxuICAgIH07XG4gIH1cbn07XG5mdW5jdGlvbiBpc0pTT05TZXJpYWxpemFibGUodmFsdWUsIF90eXBlKSB7XG4gIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdm9pZCAwKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKF90eXBlICE9PSBcIm9iamVjdFwiKSByZXR1cm4gX3R5cGUgPT09IFwiYm9vbGVhblwiIHx8IF90eXBlID09PSBcIm51bWJlclwiIHx8IF90eXBlID09PSBcInN0cmluZ1wiO1xuICBpZiAodHlwZW9mIHZhbHVlLnRvSlNPTiA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKHR5cGVvZiB2YWx1ZS5waXBlID09PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHZhbHVlLnBpcGVUbyA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZmFsc2U7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE51bGxQcm90b09iaikgcmV0dXJuIHRydWU7XG4gIGNvbnN0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKTtcbiAgcmV0dXJuIHByb3RvID09PSBPYmplY3QucHJvdG90eXBlIHx8IHByb3RvID09PSBudWxsO1xufVxuY29uc3Qga05vdEZvdW5kID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJoMy5ub3RGb3VuZFwiKTtcbmNvbnN0IGtIYW5kbGVkID0gLyogQF9fUFVSRV9fICovIFN5bWJvbC5mb3IoXCJoMy5oYW5kbGVkXCIpO1xuZnVuY3Rpb24gdG9SZXNwb25zZSh2YWwsIGV2ZW50LCBjb25maWcgPSB7fSkge1xuICBpZiAodHlwZW9mIHZhbD8udGhlbiA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gKHZhbC5jYXRjaD8uKChlcnJvcikgPT4gZXJyb3IpIHx8IFByb21pc2UucmVzb2x2ZSh2YWwpKS50aGVuKChyZXNvbHZlZFZhbCkgPT4gdG9SZXNwb25zZShyZXNvbHZlZFZhbCwgZXZlbnQsIGNvbmZpZykpO1xuICBjb25zdCByZXNwb25zZSA9IHByZXBhcmVSZXNwb25zZSh2YWwsIGV2ZW50LCBjb25maWcpO1xuICBpZiAodHlwZW9mIHJlc3BvbnNlPy50aGVuID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0b1Jlc3BvbnNlKHJlc3BvbnNlLCBldmVudCwgY29uZmlnKTtcbiAgY29uc3QgeyBvblJlc3BvbnNlOiBvblJlc3BvbnNlJDEgfSA9IGNvbmZpZztcbiAgcmV0dXJuIG9uUmVzcG9uc2UkMSA/IFByb21pc2UucmVzb2x2ZShvblJlc3BvbnNlJDEocmVzcG9uc2UsIGV2ZW50KSkudGhlbigoKSA9PiByZXNwb25zZSkgOiByZXNwb25zZTtcbn1cbmZ1bmN0aW9uIHByZXBhcmVSZXNwb25zZSh2YWwsIGV2ZW50LCBjb25maWcsIG5lc3RlZCkge1xuICBpZiAodmFsID09PSBrSGFuZGxlZCkgcmV0dXJuIG5ldyBOb2RlUmVzcG9uc2UobnVsbCk7XG4gIGlmICh2YWwgPT09IGtOb3RGb3VuZCkgdmFsID0gbmV3IEhUVFBFcnJvcih7XG4gICAgc3RhdHVzOiA0MDQsXG4gICAgbWVzc2FnZTogYENhbm5vdCBmaW5kIGFueSByb3V0ZSBtYXRjaGluZyBbJHtldmVudC5yZXEubWV0aG9kfV0gJHtldmVudC51cmx9YFxuICB9KTtcbiAgaWYgKHZhbCAmJiB2YWwgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgIGNvbnN0IGlzSFRUUEVycm9yID0gSFRUUEVycm9yLmlzRXJyb3IodmFsKTtcbiAgICBjb25zdCBlcnJvciA9IGlzSFRUUEVycm9yID8gdmFsIDogbmV3IEhUVFBFcnJvcih2YWwpO1xuICAgIGlmICghaXNIVFRQRXJyb3IpIHtcbiAgICAgIGVycm9yLnVuaGFuZGxlZCA9IHRydWU7XG4gICAgICBpZiAodmFsPy5zdGFjaykgZXJyb3Iuc3RhY2sgPSB2YWwuc3RhY2s7XG4gICAgfVxuICAgIGlmIChlcnJvci51bmhhbmRsZWQgJiYgIWNvbmZpZy5zaWxlbnQpIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIGNvbnN0IHsgb25FcnJvcjogb25FcnJvciQxIH0gPSBjb25maWc7XG4gICAgcmV0dXJuIG9uRXJyb3IkMSAmJiAhbmVzdGVkID8gUHJvbWlzZS5yZXNvbHZlKG9uRXJyb3IkMShlcnJvciwgZXZlbnQpKS5jYXRjaCgoZXJyb3IkMSkgPT4gZXJyb3IkMSkudGhlbigobmV3VmFsKSA9PiBwcmVwYXJlUmVzcG9uc2UobmV3VmFsID8/IHZhbCwgZXZlbnQsIGNvbmZpZywgdHJ1ZSkpIDogZXJyb3JSZXNwb25zZShlcnJvciwgY29uZmlnLmRlYnVnKTtcbiAgfVxuICBjb25zdCBldmVudEhlYWRlcnMgPSBldmVudC5yZXMuX2hlYWRlcnM7XG4gIGlmICghKHZhbCBpbnN0YW5jZW9mIFJlc3BvbnNlKSkge1xuICAgIGNvbnN0IHJlcyA9IHByZXBhcmVSZXNwb25zZUJvZHkodmFsLCBldmVudCwgY29uZmlnKTtcbiAgICBjb25zdCBzdGF0dXMgPSBldmVudC5yZXMuc3RhdHVzO1xuICAgIHJldHVybiBuZXcgTm9kZVJlc3BvbnNlKG51bGxCb2R5KGV2ZW50LnJlcS5tZXRob2QsIHN0YXR1cykgPyBudWxsIDogcmVzLmJvZHksIHtcbiAgICAgIHN0YXR1cyxcbiAgICAgIHN0YXR1c1RleHQ6IGV2ZW50LnJlcy5zdGF0dXNUZXh0LFxuICAgICAgaGVhZGVyczogcmVzLmhlYWRlcnMgJiYgZXZlbnRIZWFkZXJzID8gbWVyZ2VIZWFkZXJzJDEocmVzLmhlYWRlcnMsIGV2ZW50SGVhZGVycykgOiByZXMuaGVhZGVycyB8fCBldmVudEhlYWRlcnNcbiAgICB9KTtcbiAgfVxuICBpZiAoIWV2ZW50SGVhZGVycykgcmV0dXJuIHZhbDtcbiAgcmV0dXJuIG5ldyBOb2RlUmVzcG9uc2UobnVsbEJvZHkoZXZlbnQucmVxLm1ldGhvZCwgdmFsLnN0YXR1cykgPyBudWxsIDogdmFsLmJvZHksIHtcbiAgICBzdGF0dXM6IHZhbC5zdGF0dXMsXG4gICAgc3RhdHVzVGV4dDogdmFsLnN0YXR1c1RleHQsXG4gICAgaGVhZGVyczogbWVyZ2VIZWFkZXJzJDEoZXZlbnRIZWFkZXJzLCB2YWwuaGVhZGVycylcbiAgfSk7XG59XG5mdW5jdGlvbiBtZXJnZUhlYWRlcnMkMShiYXNlLCBtZXJnZSkge1xuICBjb25zdCBtZXJnZWRIZWFkZXJzID0gbmV3IEhlYWRlcnMoYmFzZSk7XG4gIGZvciAoY29uc3QgW25hbWUsIHZhbHVlXSBvZiBtZXJnZSkgaWYgKG5hbWUgPT09IFwic2V0LWNvb2tpZVwiKSBtZXJnZWRIZWFkZXJzLmFwcGVuZChuYW1lLCB2YWx1ZSk7XG4gIGVsc2UgbWVyZ2VkSGVhZGVycy5zZXQobmFtZSwgdmFsdWUpO1xuICByZXR1cm4gbWVyZ2VkSGVhZGVycztcbn1cbmNvbnN0IGVtcHR5SGVhZGVycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgSGVhZGVycyh7IFwiY29udGVudC1sZW5ndGhcIjogXCIwXCIgfSk7XG5jb25zdCBqc29uSGVhZGVycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgSGVhZGVycyh7IFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04XCIgfSk7XG5mdW5jdGlvbiBwcmVwYXJlUmVzcG9uc2VCb2R5KHZhbCwgZXZlbnQsIGNvbmZpZykge1xuICBpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdm9pZCAwKSByZXR1cm4ge1xuICAgIGJvZHk6IFwiXCIsXG4gICAgaGVhZGVyczogZW1wdHlIZWFkZXJzXG4gIH07XG4gIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodmFsVHlwZSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHsgYm9keTogdmFsIH07XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgZXZlbnQucmVzLmhlYWRlcnMuc2V0KFwiY29udGVudC1sZW5ndGhcIiwgdmFsLmJ5dGVMZW5ndGgudG9TdHJpbmcoKSk7XG4gICAgcmV0dXJuIHsgYm9keTogdmFsIH07XG4gIH1cbiAgaWYgKGlzSlNPTlNlcmlhbGl6YWJsZSh2YWwsIHZhbFR5cGUpKSByZXR1cm4ge1xuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHZhbCwgdm9pZCAwLCBjb25maWcuZGVidWcgPyAyIDogdm9pZCAwKSxcbiAgICBoZWFkZXJzOiBqc29uSGVhZGVyc1xuICB9O1xuICBpZiAodmFsVHlwZSA9PT0gXCJiaWdpbnRcIikgcmV0dXJuIHtcbiAgICBib2R5OiB2YWwudG9TdHJpbmcoKSxcbiAgICBoZWFkZXJzOiBqc29uSGVhZGVyc1xuICB9O1xuICBpZiAodmFsIGluc3RhbmNlb2YgQmxvYikge1xuICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICBcImNvbnRlbnQtdHlwZVwiOiB2YWwudHlwZSxcbiAgICAgIFwiY29udGVudC1sZW5ndGhcIjogdmFsLnNpemUudG9TdHJpbmcoKVxuICAgIH07XG4gICAgbGV0IGZpbGVuYW1lID0gdmFsLm5hbWU7XG4gICAgaWYgKGZpbGVuYW1lKSB7XG4gICAgICBmaWxlbmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChmaWxlbmFtZSk7XG4gICAgICBoZWFkZXJzW1wiY29udGVudC1kaXNwb3NpdGlvblwiXSA9IGBmaWxlbmFtZT1cIiR7ZmlsZW5hbWV9XCI7IGZpbGVuYW1lKj1VVEYtOCcnJHtmaWxlbmFtZX1gO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgYm9keTogdmFsLnN0cmVhbSgpLFxuICAgICAgaGVhZGVyc1xuICAgIH07XG4gIH1cbiAgaWYgKHZhbFR5cGUgPT09IFwic3ltYm9sXCIpIHJldHVybiB7IGJvZHk6IHZhbC50b1N0cmluZygpIH07XG4gIGlmICh2YWxUeXBlID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB7IGJvZHk6IGAke3ZhbC5uYW1lfSgpYCB9O1xuICByZXR1cm4geyBib2R5OiB2YWwgfTtcbn1cbmZ1bmN0aW9uIG51bGxCb2R5KG1ldGhvZCwgc3RhdHVzKSB7XG4gIHJldHVybiBtZXRob2QgPT09IFwiSEVBRFwiIHx8IHN0YXR1cyA9PT0gMTAwIHx8IHN0YXR1cyA9PT0gMTAxIHx8IHN0YXR1cyA9PT0gMTAyIHx8IHN0YXR1cyA9PT0gMjA0IHx8IHN0YXR1cyA9PT0gMjA1IHx8IHN0YXR1cyA9PT0gMzA0O1xufVxuZnVuY3Rpb24gZXJyb3JSZXNwb25zZShlcnJvciwgZGVidWcpIHtcbiAgcmV0dXJuIG5ldyBOb2RlUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoe1xuICAgIC4uLmVycm9yLnRvSlNPTigpLFxuICAgIHN0YWNrOiBkZWJ1ZyAmJiBlcnJvci5zdGFjayA/IGVycm9yLnN0YWNrLnNwbGl0KFwiXFxuXCIpLm1hcCgobCkgPT4gbC50cmltKCkpIDogdm9pZCAwXG4gIH0sIHZvaWQgMCwgZGVidWcgPyAyIDogdm9pZCAwKSwge1xuICAgIHN0YXR1czogZXJyb3Iuc3RhdHVzLFxuICAgIHN0YXR1c1RleHQ6IGVycm9yLnN0YXR1c1RleHQsXG4gICAgaGVhZGVyczogZXJyb3IuaGVhZGVycyA/IG1lcmdlSGVhZGVycyQxKGpzb25IZWFkZXJzLCBlcnJvci5oZWFkZXJzKSA6IGpzb25IZWFkZXJzXG4gIH0pO1xufVxuZnVuY3Rpb24gcGFyc2VDb29raWVzKGV2ZW50KSB7XG4gIHJldHVybiBwYXJzZShldmVudC5yZXEuaGVhZGVycy5nZXQoXCJjb29raWVcIikgfHwgXCJcIik7XG59XG5jb25zdCBldmVudFN0b3JhZ2UgPSBuZXcgQXN5bmNMb2NhbFN0b3JhZ2UoKTtcbmZ1bmN0aW9uIHJlcXVlc3RIYW5kbGVyKGhhbmRsZXIpIHtcbiAgcmV0dXJuIChyZXF1ZXN0LCByZXF1ZXN0T3B0cykgPT4ge1xuICAgIGNvbnN0IGgzRXZlbnQgPSBuZXcgSDNFdmVudChyZXF1ZXN0KTtcbiAgICBjb25zdCByZXNwb25zZSA9IGV2ZW50U3RvcmFnZS5ydW4oXG4gICAgICB7IGgzRXZlbnQgfSxcbiAgICAgICgpID0+IGhhbmRsZXIocmVxdWVzdCwgcmVxdWVzdE9wdHMpXG4gICAgKTtcbiAgICByZXR1cm4gdG9SZXNwb25zZShyZXNwb25zZSwgaDNFdmVudCk7XG4gIH07XG59XG5mdW5jdGlvbiBnZXRIM0V2ZW50KCkge1xuICBjb25zdCBldmVudCA9IGV2ZW50U3RvcmFnZS5nZXRTdG9yZSgpO1xuICBpZiAoIWV2ZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYE5vIFN0YXJ0RXZlbnQgZm91bmQgaW4gQXN5bmNMb2NhbFN0b3JhZ2UuIE1ha2Ugc3VyZSB5b3UgYXJlIHVzaW5nIHRoZSBmdW5jdGlvbiB3aXRoaW4gdGhlIHNlcnZlciBydW50aW1lLmBcbiAgICApO1xuICB9XG4gIHJldHVybiBldmVudC5oM0V2ZW50O1xufVxuZnVuY3Rpb24gZ2V0Q29va2llcygpIHtcbiAgY29uc3QgZXZlbnQgPSBnZXRIM0V2ZW50KCk7XG4gIHJldHVybiBwYXJzZUNvb2tpZXMoZXZlbnQpO1xufVxuZnVuY3Rpb24gZ2V0Q29va2llKG5hbWUpIHtcbiAgcmV0dXJuIGdldENvb2tpZXMoKVtuYW1lXSB8fCB2b2lkIDA7XG59XG5mdW5jdGlvbiBnZXRSZXNwb25zZSgpIHtcbiAgY29uc3QgZXZlbnQgPSBnZXRIM0V2ZW50KCk7XG4gIHJldHVybiBldmVudC5fcmVzO1xufVxuY29uc3QgVklSVFVBTF9NT0RVTEVTID0ge1xuICBzdGFydE1hbmlmZXN0OiBcInRhbnN0YWNrLXN0YXJ0LW1hbmlmZXN0OnZcIixcbiAgc2VydmVyRm5NYW5pZmVzdDogXCJ0YW5zdGFjay1zdGFydC1zZXJ2ZXItZm4tbWFuaWZlc3Q6dlwiLFxuICBpbmplY3RlZEhlYWRTY3JpcHRzOiBcInRhbnN0YWNrLXN0YXJ0LWluamVjdGVkLWhlYWQtc2NyaXB0czp2XCJcbn07XG5hc3luYyBmdW5jdGlvbiBsb2FkVmlydHVhbE1vZHVsZShpZCkge1xuICBzd2l0Y2ggKGlkKSB7XG4gICAgY2FzZSBWSVJUVUFMX01PRFVMRVMuc3RhcnRNYW5pZmVzdDpcbiAgICAgIHJldHVybiBhd2FpdCBpbXBvcnQoXCIuL2Fzc2V0cy9fdGFuc3RhY2stc3RhcnQtbWFuaWZlc3Rfdi1DQ0d3aC16Ti5qc1wiKTtcbiAgICBjYXNlIFZJUlRVQUxfTU9EVUxFUy5zZXJ2ZXJGbk1hbmlmZXN0OlxuICAgICAgcmV0dXJuIGF3YWl0IGltcG9ydChcIi4vYXNzZXRzL190YW5zdGFjay1zdGFydC1zZXJ2ZXItZm4tbWFuaWZlc3Rfdi1DSHJKeVZTbi5qc1wiKTtcbiAgICBjYXNlIFZJUlRVQUxfTU9EVUxFUy5pbmplY3RlZEhlYWRTY3JpcHRzOlxuICAgICAgcmV0dXJuIGF3YWl0IGltcG9ydChcIi4vYXNzZXRzL190YW5zdGFjay1zdGFydC1pbmplY3RlZC1oZWFkLXNjcmlwdHNfdi1jZGEwS3kwRC5qc1wiKTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHZpcnR1YWwgbW9kdWxlOiAke2lkfWApO1xuICB9XG59XG5hc3luYyBmdW5jdGlvbiBnZXRTdGFydE1hbmlmZXN0KCkge1xuICBjb25zdCB7IHRzclN0YXJ0TWFuaWZlc3QgfSA9IGF3YWl0IGxvYWRWaXJ0dWFsTW9kdWxlKFxuICAgIFZJUlRVQUxfTU9EVUxFUy5zdGFydE1hbmlmZXN0XG4gICk7XG4gIGNvbnN0IHN0YXJ0TWFuaWZlc3QgPSB0c3JTdGFydE1hbmlmZXN0KCk7XG4gIGNvbnN0IHJvb3RSb3V0ZSA9IHN0YXJ0TWFuaWZlc3Qucm91dGVzW3Jvb3RSb3V0ZUlkXSA9IHN0YXJ0TWFuaWZlc3Qucm91dGVzW3Jvb3RSb3V0ZUlkXSB8fCB7fTtcbiAgcm9vdFJvdXRlLmFzc2V0cyA9IHJvb3RSb3V0ZS5hc3NldHMgfHwgW107XG4gIGxldCBzY3JpcHQgPSBgaW1wb3J0KCcke3N0YXJ0TWFuaWZlc3QuY2xpZW50RW50cnl9JylgO1xuICByb290Um91dGUuYXNzZXRzLnB1c2goe1xuICAgIHRhZzogXCJzY3JpcHRcIixcbiAgICBhdHRyczoge1xuICAgICAgdHlwZTogXCJtb2R1bGVcIixcbiAgICAgIHN1cHByZXNzSHlkcmF0aW9uV2FybmluZzogdHJ1ZSxcbiAgICAgIGFzeW5jOiB0cnVlXG4gICAgfSxcbiAgICBjaGlsZHJlbjogc2NyaXB0XG4gIH0pO1xuICBjb25zdCBtYW5pZmVzdCA9IHtcbiAgICAuLi5zdGFydE1hbmlmZXN0LFxuICAgIHJvdXRlczogT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgICAgT2JqZWN0LmVudHJpZXMoc3RhcnRNYW5pZmVzdC5yb3V0ZXMpLm1hcCgoW2syLCB2Ml0pID0+IHtcbiAgICAgICAgY29uc3QgeyBwcmVsb2FkcywgYXNzZXRzIH0gPSB2MjtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBrMixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwcmVsb2FkcyxcbiAgICAgICAgICAgIGFzc2V0c1xuICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICAgIH0pXG4gICAgKVxuICB9O1xuICByZXR1cm4gbWFuaWZlc3Q7XG59XG5hc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJGbkJ5SWQoc2VydmVyRm5JZCkge1xuICBjb25zdCB7IGRlZmF1bHQ6IHNlcnZlckZuTWFuaWZlc3QgfSA9IGF3YWl0IGxvYWRWaXJ0dWFsTW9kdWxlKFxuICAgIFZJUlRVQUxfTU9EVUxFUy5zZXJ2ZXJGbk1hbmlmZXN0XG4gICk7XG4gIGNvbnN0IHNlcnZlckZuSW5mbyA9IHNlcnZlckZuTWFuaWZlc3Rbc2VydmVyRm5JZF07XG4gIGlmICghc2VydmVyRm5JbmZvKSB7XG4gICAgY29uc29sZS5pbmZvKFwic2VydmVyRm5NYW5pZmVzdFwiLCBzZXJ2ZXJGbk1hbmlmZXN0KTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXJ2ZXIgZnVuY3Rpb24gaW5mbyBub3QgZm91bmQgZm9yIFwiICsgc2VydmVyRm5JZCk7XG4gIH1cbiAgY29uc3QgZm5Nb2R1bGUgPSBhd2FpdCBzZXJ2ZXJGbkluZm8uaW1wb3J0ZXIoKTtcbiAgaWYgKCFmbk1vZHVsZSkge1xuICAgIGNvbnNvbGUuaW5mbyhcInNlcnZlckZuSW5mb1wiLCBzZXJ2ZXJGbkluZm8pO1xuICAgIHRocm93IG5ldyBFcnJvcihcIlNlcnZlciBmdW5jdGlvbiBtb2R1bGUgbm90IHJlc29sdmVkIGZvciBcIiArIHNlcnZlckZuSWQpO1xuICB9XG4gIGNvbnN0IGFjdGlvbiA9IGZuTW9kdWxlW3NlcnZlckZuSW5mby5mdW5jdGlvbk5hbWVdO1xuICBpZiAoIWFjdGlvbikge1xuICAgIGNvbnNvbGUuaW5mbyhcInNlcnZlckZuSW5mb1wiLCBzZXJ2ZXJGbkluZm8pO1xuICAgIGNvbnNvbGUuaW5mbyhcImZuTW9kdWxlXCIsIGZuTW9kdWxlKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgU2VydmVyIGZ1bmN0aW9uIG1vZHVsZSBleHBvcnQgbm90IHJlc29sdmVkIGZvciBzZXJ2ZXJGbiBJRDogJHtzZXJ2ZXJGbklkfWBcbiAgICApO1xuICB9XG4gIHJldHVybiBhY3Rpb247XG59XG5sZXQgcmVnZXggPSB2b2lkIDA7XG5jb25zdCBoYW5kbGVTZXJ2ZXJBY3Rpb24gPSBhc3luYyAoe1xuICByZXF1ZXN0LFxuICBjb250ZXh0XG59KSA9PiB7XG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gIGNvbnN0IHNpZ25hbCA9IGNvbnRyb2xsZXIuc2lnbmFsO1xuICBjb25zdCBhYm9ydCA9ICgpID0+IGNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgcmVxdWVzdC5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIGFib3J0KTtcbiAgaWYgKHJlZ2V4ID09PSB2b2lkIDApIHtcbiAgICByZWdleCA9IG5ldyBSZWdFeHAoYCR7XCIvX3NlcnZlckZuL1wifShbXi8/I10rKWApO1xuICB9XG4gIGNvbnN0IG1ldGhvZCA9IHJlcXVlc3QubWV0aG9kO1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsLCBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiKTtcbiAgY29uc3QgbWF0Y2ggPSB1cmwucGF0aG5hbWUubWF0Y2gocmVnZXgpO1xuICBjb25zdCBzZXJ2ZXJGbklkID0gbWF0Y2ggPyBtYXRjaFsxXSA6IG51bGw7XG4gIGNvbnN0IHNlYXJjaCA9IE9iamVjdC5mcm9tRW50cmllcyh1cmwuc2VhcmNoUGFyYW1zLmVudHJpZXMoKSk7XG4gIGNvbnN0IGlzQ3JlYXRlU2VydmVyRm4gPSBcImNyZWF0ZVNlcnZlckZuXCIgaW4gc2VhcmNoO1xuICBpZiAodHlwZW9mIHNlcnZlckZuSWQgIT09IFwic3RyaW5nXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHNlcnZlciBhY3Rpb24gcGFyYW0gZm9yIHNlcnZlckZuSWQ6IFwiICsgc2VydmVyRm5JZCk7XG4gIH1cbiAgY29uc3QgYWN0aW9uID0gYXdhaXQgZ2V0U2VydmVyRm5CeUlkKHNlcnZlckZuSWQpO1xuICBjb25zdCBmb3JtRGF0YUNvbnRlbnRUeXBlcyA9IFtcbiAgICBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcbiAgICBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiXG4gIF07XG4gIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVxdWVzdC5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKTtcbiAgY29uc3Qgc2Vyb3ZhbFBsdWdpbnMgPSBnZXREZWZhdWx0U2Vyb3ZhbFBsdWdpbnMoKTtcbiAgZnVuY3Rpb24gcGFyc2VQYXlsb2FkKHBheWxvYWQpIHtcbiAgICBjb25zdCBwYXJzZWRQYXlsb2FkID0gTG8ocGF5bG9hZCwgeyBwbHVnaW5zOiBzZXJvdmFsUGx1Z2lucyB9KTtcbiAgICByZXR1cm4gcGFyc2VkUGF5bG9hZDtcbiAgfVxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IChhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCAoYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAoZm9ybURhdGFDb250ZW50VHlwZXMuc29tZShcbiAgICAgICAgICAodHlwZSkgPT4gY29udGVudFR5cGUgJiYgY29udGVudFR5cGUuaW5jbHVkZXModHlwZSlcbiAgICAgICAgKSkge1xuICAgICAgICAgIGludmFyaWFudChcbiAgICAgICAgICAgIG1ldGhvZC50b0xvd2VyQ2FzZSgpICE9PSBcImdldFwiLFxuICAgICAgICAgICAgXCJHRVQgcmVxdWVzdHMgd2l0aCBGb3JtRGF0YSBwYXlsb2FkcyBhcmUgbm90IHN1cHBvcnRlZFwiXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgICAgICAgICBjb25zdCBzZXJpYWxpemVkQ29udGV4dCA9IGZvcm1EYXRhLmdldChUU1NfRk9STURBVEFfQ09OVEVYVCk7XG4gICAgICAgICAgZm9ybURhdGEuZGVsZXRlKFRTU19GT1JNREFUQV9DT05URVhUKTtcbiAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgZGF0YTogZm9ybURhdGFcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmICh0eXBlb2Ygc2VyaWFsaXplZENvbnRleHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcnNlZENvbnRleHQgPSBKU09OLnBhcnNlKHNlcmlhbGl6ZWRDb250ZXh0KTtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJzZWRDb250ZXh0ID09PSBcIm9iamVjdFwiICYmIHBhcnNlZENvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuY29udGV4dCA9IHsgLi4uY29udGV4dCwgLi4ucGFyc2VkQ29udGV4dCB9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGF3YWl0IGFjdGlvbihwYXJhbXMsIHNpZ25hbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZC50b0xvd2VyQ2FzZSgpID09PSBcImdldFwiKSB7XG4gICAgICAgICAgaW52YXJpYW50KFxuICAgICAgICAgICAgaXNDcmVhdGVTZXJ2ZXJGbixcbiAgICAgICAgICAgIFwiZXhwZWN0ZWQgR0VUIHJlcXVlc3QgdG8gb3JpZ2luYXRlIGZyb20gY3JlYXRlU2VydmVyRm5cIlxuICAgICAgICAgICk7XG4gICAgICAgICAgbGV0IHBheWxvYWQgPSBzZWFyY2gucGF5bG9hZDtcbiAgICAgICAgICBwYXlsb2FkID0gcGF5bG9hZCA/IHBhcnNlUGF5bG9hZChKU09OLnBhcnNlKHBheWxvYWQpKSA6IHBheWxvYWQ7XG4gICAgICAgICAgcGF5bG9hZC5jb250ZXh0ID0geyAuLi5jb250ZXh0LCAuLi5wYXlsb2FkLmNvbnRleHQgfTtcbiAgICAgICAgICByZXR1cm4gYXdhaXQgYWN0aW9uKHBheWxvYWQsIHNpZ25hbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZC50b0xvd2VyQ2FzZSgpICE9PSBcInBvc3RcIikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImV4cGVjdGVkIFBPU1QgbWV0aG9kXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY29udGVudFR5cGUgfHwgIWNvbnRlbnRUeXBlLmluY2x1ZGVzKFwiYXBwbGljYXRpb24vanNvblwiKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImV4cGVjdGVkIGFwcGxpY2F0aW9uL2pzb24gY29udGVudCB0eXBlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGpzb25QYXlsb2FkID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgICAgIGlmIChpc0NyZWF0ZVNlcnZlckZuKSB7XG4gICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHBhcnNlUGF5bG9hZChqc29uUGF5bG9hZCk7XG4gICAgICAgICAgcGF5bG9hZC5jb250ZXh0ID0geyAuLi5wYXlsb2FkLmNvbnRleHQsIC4uLmNvbnRleHQgfTtcbiAgICAgICAgICByZXR1cm4gYXdhaXQgYWN0aW9uKHBheWxvYWQsIHNpZ25hbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF3YWl0IGFjdGlvbiguLi5qc29uUGF5bG9hZCk7XG4gICAgICB9KSgpO1xuICAgICAgaWYgKHJlc3VsdC5yZXN1bHQgaW5zdGFuY2VvZiBSZXNwb25zZSkge1xuICAgICAgICByZXN1bHQucmVzdWx0LmhlYWRlcnMuc2V0KFhfVFNTX1JBV19SRVNQT05TRSwgXCJ0cnVlXCIpO1xuICAgICAgICByZXR1cm4gcmVzdWx0LnJlc3VsdDtcbiAgICAgIH1cbiAgICAgIGlmICghaXNDcmVhdGVTZXJ2ZXJGbikge1xuICAgICAgICByZXN1bHQgPSByZXN1bHQucmVzdWx0O1xuICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUmVzcG9uc2UpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXNOb3RGb3VuZChyZXN1bHQpKSB7XG4gICAgICAgIHJldHVybiBpc05vdEZvdW5kUmVzcG9uc2UocmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3BvbnNlMiA9IGdldFJlc3BvbnNlKCk7XG4gICAgICBsZXQgbm9uU3RyZWFtaW5nQm9keSA9IHZvaWQgMDtcbiAgICAgIGlmIChyZXN1bHQgIT09IHZvaWQgMCkge1xuICAgICAgICBsZXQgZG9uZSA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSB7XG4gICAgICAgICAgb25QYXJzZTogKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBub25TdHJlYW1pbmdCb2R5ID0gdmFsdWU7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbkRvbmU6ICgpID0+IHtcbiAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb25FcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFNvKHJlc3VsdCwge1xuICAgICAgICAgIHJlZnM6IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCksXG4gICAgICAgICAgcGx1Z2luczogc2Vyb3ZhbFBsdWdpbnMsXG4gICAgICAgICAgb25QYXJzZSh2YWx1ZSkge1xuICAgICAgICAgICAgY2FsbGJhY2tzLm9uUGFyc2UodmFsdWUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb25Eb25lKCkge1xuICAgICAgICAgICAgY2FsbGJhY2tzLm9uRG9uZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb25FcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFja3Mub25FcnJvcihlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxuICAgICAgICAgICAgbm9uU3RyZWFtaW5nQm9keSA/IEpTT04uc3RyaW5naWZ5KG5vblN0cmVhbWluZ0JvZHkpIDogdm9pZCAwLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0dXM6IHJlc3BvbnNlMj8uc3RhdHVzLFxuICAgICAgICAgICAgICBzdGF0dXNUZXh0OiByZXNwb25zZTI/LnN0YXR1c1RleHQsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBbWF9UU1NfU0VSSUFMSVpFRF06IFwidHJ1ZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IG5ldyBSZWFkYWJsZVN0cmVhbSh7XG4gICAgICAgICAgc3RhcnQoY29udHJvbGxlcjIpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5vblBhcnNlID0gKHZhbHVlKSA9PiBjb250cm9sbGVyMi5lbnF1ZXVlKEpTT04uc3RyaW5naWZ5KHZhbHVlKSArIFwiXFxuXCIpO1xuICAgICAgICAgICAgY2FsbGJhY2tzLm9uRG9uZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyMi5jbG9zZSgpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIyLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5vbkVycm9yID0gKGVycm9yKSA9PiBjb250cm9sbGVyMi5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICBpZiAobm9uU3RyZWFtaW5nQm9keSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIGNhbGxiYWNrcy5vblBhcnNlKG5vblN0cmVhbWluZ0JvZHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2Uoc3RyZWFtLCB7XG4gICAgICAgICAgc3RhdHVzOiByZXNwb25zZTI/LnN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiByZXNwb25zZTI/LnN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LW5kanNvblwiLFxuICAgICAgICAgICAgW1hfVFNTX1NFUklBTElaRURdOiBcInRydWVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKHZvaWQgMCwge1xuICAgICAgICBzdGF0dXM6IHJlc3BvbnNlMj8uc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXNwb25zZTI/LnN0YXR1c1RleHRcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBSZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICB9XG4gICAgICBpZiAoaXNOb3RGb3VuZChlcnJvcikpIHtcbiAgICAgICAgcmV0dXJuIGlzTm90Rm91bmRSZXNwb25zZShlcnJvcik7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmluZm8oKTtcbiAgICAgIGNvbnNvbGUuaW5mbyhcIlNlcnZlciBGbiBFcnJvciFcIik7XG4gICAgICBjb25zb2xlLmluZm8oKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgY29uc29sZS5pbmZvKCk7XG4gICAgICBjb25zdCBzZXJpYWxpemVkRXJyb3IgPSBKU09OLnN0cmluZ2lmeShcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5yZXNvbHZlKFxuICAgICAgICAgIGdvKGVycm9yLCB7XG4gICAgICAgICAgICByZWZzOiAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLFxuICAgICAgICAgICAgcGx1Z2luczogc2Vyb3ZhbFBsdWdpbnNcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApO1xuICAgICAgY29uc3QgcmVzcG9uc2UyID0gZ2V0UmVzcG9uc2UoKTtcbiAgICAgIHJldHVybiBuZXcgUmVzcG9uc2Uoc2VyaWFsaXplZEVycm9yLCB7XG4gICAgICAgIHN0YXR1czogcmVzcG9uc2UyPy5zdGF0dXMgPz8gNTAwLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXNwb25zZTI/LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBbWF9UU1NfU0VSSUFMSVpFRF06IFwidHJ1ZVwiXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSkoKTtcbiAgcmVxdWVzdC5zaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIGFib3J0KTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcbmZ1bmN0aW9uIGlzTm90Rm91bmRSZXNwb25zZShlcnJvcikge1xuICBjb25zdCB7IGhlYWRlcnMsIC4uLnJlc3QgfSA9IGVycm9yO1xuICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHJlc3QpLCB7XG4gICAgc3RhdHVzOiA0MDQsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAuLi5oZWFkZXJzIHx8IHt9XG4gICAgfVxuICB9KTtcbn1cbmNvbnN0IEhFQURFUlMgPSB7XG4gIFRTU19TSEVMTDogXCJYLVRTU19TSEVMTFwiXG59O1xuY29uc3QgY3JlYXRlU2VydmVyUnBjID0gKGZ1bmN0aW9uSWQsIHNwbGl0SW1wb3J0Rm4pID0+IHtcbiAgY29uc3QgdXJsID0gXCIvX3NlcnZlckZuL1wiICsgZnVuY3Rpb25JZDtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oc3BsaXRJbXBvcnRGbiwge1xuICAgIHVybCxcbiAgICBmdW5jdGlvbklkLFxuICAgIFtUU1NfU0VSVkVSX0ZVTkNUSU9OXTogdHJ1ZVxuICB9KTtcbn07XG5jb25zdCBTZXJ2ZXJGdW5jdGlvblNlcmlhbGl6YXRpb25BZGFwdGVyID0gY3JlYXRlU2VyaWFsaXphdGlvbkFkYXB0ZXIoe1xuICBrZXk6IFwiJFRTUy9zZXJ2ZXJmblwiLFxuICB0ZXN0OiAodjIpID0+IHtcbiAgICBpZiAodHlwZW9mIHYyICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoIShUU1NfU0VSVkVSX0ZVTkNUSU9OIGluIHYyKSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiAhIXYyW1RTU19TRVJWRVJfRlVOQ1RJT05dO1xuICB9LFxuICB0b1NlcmlhbGl6YWJsZTogKHsgZnVuY3Rpb25JZCB9KSA9PiAoeyBmdW5jdGlvbklkIH0pLFxuICBmcm9tU2VyaWFsaXphYmxlOiAoeyBmdW5jdGlvbklkIH0pID0+IHtcbiAgICBjb25zdCBmbiA9IGFzeW5jIChvcHRzLCBzaWduYWwpID0+IHtcbiAgICAgIGNvbnN0IHNlcnZlckZuID0gYXdhaXQgZ2V0U2VydmVyRm5CeUlkKGZ1bmN0aW9uSWQpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VydmVyRm4ob3B0cyA/PyB7fSwgc2lnbmFsKTtcbiAgICAgIHJldHVybiByZXN1bHQucmVzdWx0O1xuICAgIH07XG4gICAgcmV0dXJuIGNyZWF0ZVNlcnZlclJwYyhmdW5jdGlvbklkLCBmbik7XG4gIH1cbn0pO1xuZnVuY3Rpb24gZ2V0U3RhcnRSZXNwb25zZUhlYWRlcnMob3B0cykge1xuICBjb25zdCBoZWFkZXJzID0gbWVyZ2VIZWFkZXJzKFxuICAgIHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwidGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XCJcbiAgICB9LFxuICAgIC4uLm9wdHMucm91dGVyLnN0YXRlLm1hdGNoZXMubWFwKChtYXRjaCkgPT4ge1xuICAgICAgcmV0dXJuIG1hdGNoLmhlYWRlcnM7XG4gICAgfSlcbiAgKTtcbiAgcmV0dXJuIGhlYWRlcnM7XG59XG5mdW5jdGlvbiBjcmVhdGVTdGFydEhhbmRsZXIoY2IpIHtcbiAgY29uc3QgUk9VVEVSX0JBU0VQQVRIID0gXCIvXCI7XG4gIGxldCBzdGFydFJvdXRlc01hbmlmZXN0ID0gbnVsbDtcbiAgbGV0IHN0YXJ0RW50cnkgPSBudWxsO1xuICBsZXQgcm91dGVyRW50cnkgPSBudWxsO1xuICBjb25zdCBnZXRFbnRyaWVzID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChyb3V0ZXJFbnRyeSA9PT0gbnVsbCkge1xuICAgICAgcm91dGVyRW50cnkgPSBhd2FpdCBpbXBvcnQoXCIuL2Fzc2V0cy9yb3V0ZXItQkxrYkp3NksuanNcIikudGhlbigobikgPT4gbi5yKTtcbiAgICB9XG4gICAgaWYgKHN0YXJ0RW50cnkgPT09IG51bGwpIHtcbiAgICAgIHN0YXJ0RW50cnkgPSBhd2FpdCBpbXBvcnQoXCIuL2Fzc2V0cy9zdGFydC1IWWt2cTROaS5qc1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0RW50cnksXG4gICAgICByb3V0ZXJFbnRyeVxuICAgIH07XG4gIH07XG4gIGNvbnN0IG9yaWdpbmFsRmV0Y2ggPSBnbG9iYWxUaGlzLmZldGNoO1xuICBjb25zdCBzdGFydFJlcXVlc3RSZXNvbHZlciA9IGFzeW5jIChyZXF1ZXN0LCByZXF1ZXN0T3B0cykgPT4ge1xuICAgIGNvbnN0IG9yaWdpbiA9IGdldE9yaWdpbihyZXF1ZXN0KTtcbiAgICBnbG9iYWxUaGlzLmZldGNoID0gYXN5bmMgZnVuY3Rpb24oaW5wdXQsIGluaXQpIHtcbiAgICAgIGZ1bmN0aW9uIHJlc29sdmUodXJsMiwgcmVxdWVzdE9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsMiwgcmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gc3RhcnRSZXF1ZXN0UmVzb2x2ZXIoZmV0Y2hSZXF1ZXN0LCByZXF1ZXN0T3B0cyk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGlucHV0ID09PSBcInN0cmluZ1wiICYmIGlucHV0LnN0YXJ0c1dpdGgoXCIvXCIpKSB7XG4gICAgICAgIGNvbnN0IHVybDIgPSBuZXcgVVJMKGlucHV0LCBvcmlnaW4pO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZSh1cmwyLCBpbml0KTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSBcIm9iamVjdFwiICYmIFwidXJsXCIgaW4gaW5wdXQgJiYgdHlwZW9mIGlucHV0LnVybCA9PT0gXCJzdHJpbmdcIiAmJiBpbnB1dC51cmwuc3RhcnRzV2l0aChcIi9cIikpIHtcbiAgICAgICAgY29uc3QgdXJsMiA9IG5ldyBVUkwoaW5wdXQudXJsLCBvcmlnaW4pO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZSh1cmwyLCBpbml0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcmlnaW5hbEZldGNoKGlucHV0LCBpbml0KTtcbiAgICB9O1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICAgIGNvbnN0IGhyZWYgPSB1cmwuaHJlZi5yZXBsYWNlKHVybC5vcmlnaW4sIFwiXCIpO1xuICAgIGxldCByb3V0ZXIgPSBudWxsO1xuICAgIGNvbnN0IGdldFJvdXRlciA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmIChyb3V0ZXIpIHJldHVybiByb3V0ZXI7XG4gICAgICByb3V0ZXIgPSBhd2FpdCAoYXdhaXQgZ2V0RW50cmllcygpKS5yb3V0ZXJFbnRyeS5nZXRSb3V0ZXIoKTtcbiAgICAgIGNvbnN0IGlzUHJlcmVuZGVyaW5nID0gcHJvY2Vzcy5lbnYuVFNTX1BSRVJFTkRFUklORyA9PT0gXCJ0cnVlXCI7XG4gICAgICBsZXQgaXNTaGVsbCA9IHByb2Nlc3MuZW52LlRTU19TSEVMTCA9PT0gXCJ0cnVlXCI7XG4gICAgICBpZiAoaXNQcmVyZW5kZXJpbmcgJiYgIWlzU2hlbGwpIHtcbiAgICAgICAgaXNTaGVsbCA9IHJlcXVlc3QuaGVhZGVycy5nZXQoSEVBREVSUy5UU1NfU0hFTEwpID09PSBcInRydWVcIjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGhpc3RvcnkgPSBjcmVhdGVNZW1vcnlIaXN0b3J5KHtcbiAgICAgICAgaW5pdGlhbEVudHJpZXM6IFtocmVmXVxuICAgICAgfSk7XG4gICAgICByb3V0ZXIudXBkYXRlKHtcbiAgICAgICAgaGlzdG9yeSxcbiAgICAgICAgaXNTaGVsbCxcbiAgICAgICAgaXNQcmVyZW5kZXJpbmcsXG4gICAgICAgIG9yaWdpbjogcm91dGVyLm9wdGlvbnMub3JpZ2luID8/IG9yaWdpbixcbiAgICAgICAgLi4ue1xuICAgICAgICAgIGRlZmF1bHRTc3I6IHN0YXJ0T3B0aW9ucy5kZWZhdWx0U3NyLFxuICAgICAgICAgIHNlcmlhbGl6YXRpb25BZGFwdGVyczogc3RhcnRPcHRpb25zLnNlcmlhbGl6YXRpb25BZGFwdGVyc1xuICAgICAgICB9LFxuICAgICAgICBiYXNlcGF0aDogUk9VVEVSX0JBU0VQQVRIXG4gICAgICB9KTtcbiAgICAgIHJldHVybiByb3V0ZXI7XG4gICAgfTtcbiAgICBjb25zdCBzdGFydE9wdGlvbnMgPSBhd2FpdCAoYXdhaXQgZ2V0RW50cmllcygpKS5zdGFydEVudHJ5LnN0YXJ0SW5zdGFuY2U/LmdldE9wdGlvbnMoKSB8fCB7fTtcbiAgICBzdGFydE9wdGlvbnMuc2VyaWFsaXphdGlvbkFkYXB0ZXJzID0gc3RhcnRPcHRpb25zLnNlcmlhbGl6YXRpb25BZGFwdGVycyB8fCBbXTtcbiAgICBzdGFydE9wdGlvbnMuc2VyaWFsaXphdGlvbkFkYXB0ZXJzLnB1c2goU2VydmVyRnVuY3Rpb25TZXJpYWxpemF0aW9uQWRhcHRlcik7XG4gICAgY29uc3QgcmVxdWVzdEhhbmRsZXJNaWRkbGV3YXJlID0gaGFuZGxlclRvTWlkZGxld2FyZShcbiAgICAgIGFzeW5jICh7IGNvbnRleHQgfSkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZTIgPSBhd2FpdCBydW5XaXRoU3RhcnRDb250ZXh0KFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGdldFJvdXRlcixcbiAgICAgICAgICAgIHN0YXJ0T3B0aW9ucyxcbiAgICAgICAgICAgIGNvbnRleHRBZnRlckdsb2JhbE1pZGRsZXdhcmVzOiBjb250ZXh0XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBpZiAoaHJlZi5zdGFydHNXaXRoKFwiL19zZXJ2ZXJGbi9cIikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgaGFuZGxlU2VydmVyQWN0aW9uKHtcbiAgICAgICAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICAgICAgICBjb250ZXh0OiByZXF1ZXN0T3B0cz8uY29udGV4dFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnN0IGV4ZWN1dGVSb3V0ZXIgPSBhc3luYyAoe1xuICAgICAgICAgICAgICAgIHNlcnZlckNvbnRleHRcbiAgICAgICAgICAgICAgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RBY2NlcHRIZWFkZXIgPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQWNjZXB0XCIpIHx8IFwiKi8qXCI7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRSZXF1ZXN0QWNjZXB0SGVhZGVyID0gcmVxdWVzdEFjY2VwdEhlYWRlci5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3VwcG9ydGVkTWltZVR5cGVzID0gW1wiKi8qXCIsIFwidGV4dC9odG1sXCJdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzUm91dGVyQWNjZXB0U3VwcG9ydGVkID0gc3VwcG9ydGVkTWltZVR5cGVzLnNvbWUoXG4gICAgICAgICAgICAgICAgICAobWltZVR5cGUpID0+IHNwbGl0UmVxdWVzdEFjY2VwdEhlYWRlci5zb21lKFxuICAgICAgICAgICAgICAgICAgICAoYWNjZXB0ZWRNaW1lVHlwZSkgPT4gYWNjZXB0ZWRNaW1lVHlwZS50cmltKCkuc3RhcnRzV2l0aChtaW1lVHlwZSlcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmICghaXNSb3V0ZXJBY2NlcHRTdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBqc29uKFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IFwiT25seSBIVE1MIHJlcXVlc3RzIGFyZSBzdXBwb3J0ZWQgaGVyZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDUwMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRSb3V0ZXNNYW5pZmVzdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgc3RhcnRSb3V0ZXNNYW5pZmVzdCA9IGF3YWl0IGdldFN0YXJ0TWFuaWZlc3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVyMiA9IGF3YWl0IGdldFJvdXRlcigpO1xuICAgICAgICAgICAgICAgIGF0dGFjaFJvdXRlclNlcnZlclNzclV0aWxzKHtcbiAgICAgICAgICAgICAgICAgIHJvdXRlcjogcm91dGVyMixcbiAgICAgICAgICAgICAgICAgIG1hbmlmZXN0OiBzdGFydFJvdXRlc01hbmlmZXN0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcm91dGVyMi51cGRhdGUoeyBhZGRpdGlvbmFsQ29udGV4dDogeyBzZXJ2ZXJDb250ZXh0IH0gfSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgcm91dGVyMi5sb2FkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHJvdXRlcjIuc3RhdGUucmVkaXJlY3QpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZXIyLnN0YXRlLnJlZGlyZWN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhd2FpdCByb3V0ZXIyLnNlcnZlclNzci5kZWh5ZHJhdGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZUhlYWRlcnMgPSBnZXRTdGFydFJlc3BvbnNlSGVhZGVycyh7IHJvdXRlcjogcm91dGVyMiB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZTQgPSBhd2FpdCBjYih7XG4gICAgICAgICAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgICAgICAgICAgcm91dGVyOiByb3V0ZXIyLFxuICAgICAgICAgICAgICAgICAgcmVzcG9uc2VIZWFkZXJzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlNDtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UzID0gYXdhaXQgaGFuZGxlU2VydmVyUm91dGVzKHtcbiAgICAgICAgICAgICAgICBnZXRSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgICAgICAgICBleGVjdXRlUm91dGVyXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UzO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlMjtcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IGZsYXR0ZW5lZE1pZGRsZXdhcmVzID0gc3RhcnRPcHRpb25zLnJlcXVlc3RNaWRkbGV3YXJlID8gZmxhdHRlbk1pZGRsZXdhcmVzKHN0YXJ0T3B0aW9ucy5yZXF1ZXN0TWlkZGxld2FyZSkgOiBbXTtcbiAgICBjb25zdCBtaWRkbGV3YXJlcyA9IGZsYXR0ZW5lZE1pZGRsZXdhcmVzLm1hcCgoZDIpID0+IGQyLm9wdGlvbnMuc2VydmVyKTtcbiAgICBjb25zdCBjdHggPSBhd2FpdCBleGVjdXRlTWlkZGxld2FyZShcbiAgICAgIFsuLi5taWRkbGV3YXJlcywgcmVxdWVzdEhhbmRsZXJNaWRkbGV3YXJlXSxcbiAgICAgIHtcbiAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgY29udGV4dDogcmVxdWVzdE9wdHM/LmNvbnRleHQgfHwge31cbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gY3R4LnJlc3BvbnNlO1xuICAgIGlmIChpc1JlZGlyZWN0KHJlc3BvbnNlKSkge1xuICAgICAgaWYgKGlzUmVzb2x2ZWRSZWRpcmVjdChyZXNwb25zZSkpIHtcbiAgICAgICAgaWYgKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJ4LXRzci1yZWRpcmVjdFwiKSA9PT0gXCJtYW51YWxcIikge1xuICAgICAgICAgIHJldHVybiBqc29uKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAuLi5yZXNwb25zZS5vcHRpb25zLFxuICAgICAgICAgICAgICBpc1NlcmlhbGl6ZWRSZWRpcmVjdDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaGVhZGVyczogcmVzcG9uc2UuaGVhZGVyc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3BvbnNlLm9wdGlvbnMudG8gJiYgdHlwZW9mIHJlc3BvbnNlLm9wdGlvbnMudG8gPT09IFwic3RyaW5nXCIgJiYgIXJlc3BvbnNlLm9wdGlvbnMudG8uc3RhcnRzV2l0aChcIi9cIikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBTZXJ2ZXIgc2lkZSByZWRpcmVjdHMgbXVzdCB1c2UgYWJzb2x1dGUgcGF0aHMgdmlhIHRoZSAnaHJlZicgb3IgJ3RvJyBvcHRpb25zLiBUaGUgcmVkaXJlY3QoKSBtZXRob2QncyBcInRvXCIgcHJvcGVydHkgYWNjZXB0cyBhbiBpbnRlcm5hbCBwYXRoIG9ubHkuIFVzZSB0aGUgXCJocmVmXCIgcHJvcGVydHkgdG8gcHJvdmlkZSBhbiBleHRlcm5hbCBVUkwuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlLm9wdGlvbnMpfWBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChbXCJwYXJhbXNcIiwgXCJzZWFyY2hcIiwgXCJoYXNoXCJdLnNvbWUoXG4gICAgICAgIChkMikgPT4gdHlwZW9mIHJlc3BvbnNlLm9wdGlvbnNbZDJdID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBTZXJ2ZXIgc2lkZSByZWRpcmVjdHMgbXVzdCB1c2Ugc3RhdGljIHNlYXJjaCwgcGFyYW1zLCBhbmQgaGFzaCB2YWx1ZXMgYW5kIGRvIG5vdCBzdXBwb3J0IGZ1bmN0aW9uYWwgdmFsdWVzLiBSZWNlaXZlZCBmdW5jdGlvbmFsIHZhbHVlcyBmb3I6ICR7T2JqZWN0LmtleXMoXG4gICAgICAgICAgICByZXNwb25zZS5vcHRpb25zXG4gICAgICAgICAgKS5maWx0ZXIoKGQyKSA9PiB0eXBlb2YgcmVzcG9uc2Uub3B0aW9uc1tkMl0gPT09IFwiZnVuY3Rpb25cIikubWFwKChkMikgPT4gYFwiJHtkMn1cImApLmpvaW4oXCIsIFwiKX1gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjb25zdCByb3V0ZXIyID0gYXdhaXQgZ2V0Um91dGVyKCk7XG4gICAgICBjb25zdCByZWRpcmVjdCA9IHJvdXRlcjIucmVzb2x2ZVJlZGlyZWN0KHJlc3BvbnNlKTtcbiAgICAgIGlmIChyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwieC10c3ItcmVkaXJlY3RcIikgPT09IFwibWFudWFsXCIpIHtcbiAgICAgICAgcmV0dXJuIGpzb24oXG4gICAgICAgICAge1xuICAgICAgICAgICAgLi4ucmVzcG9uc2Uub3B0aW9ucyxcbiAgICAgICAgICAgIGlzU2VyaWFsaXplZFJlZGlyZWN0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBoZWFkZXJzOiByZXNwb25zZS5oZWFkZXJzXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlZGlyZWN0O1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH07XG4gIHJldHVybiByZXF1ZXN0SGFuZGxlcihzdGFydFJlcXVlc3RSZXNvbHZlcik7XG59XG5hc3luYyBmdW5jdGlvbiBoYW5kbGVTZXJ2ZXJSb3V0ZXMoe1xuICBnZXRSb3V0ZXIsXG4gIHJlcXVlc3QsXG4gIGV4ZWN1dGVSb3V0ZXJcbn0pIHtcbiAgY29uc3Qgcm91dGVyID0gYXdhaXQgZ2V0Um91dGVyKCk7XG4gIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgdXJsID0gZXhlY3V0ZVJld3JpdGVJbnB1dChyb3V0ZXIucmV3cml0ZSwgdXJsKTtcbiAgY29uc3QgcGF0aG5hbWUgPSB1cmwucGF0aG5hbWU7XG4gIGNvbnN0IHsgbWF0Y2hlZFJvdXRlcywgZm91bmRSb3V0ZSwgcm91dGVQYXJhbXMgfSA9IHJvdXRlci5nZXRNYXRjaGVkUm91dGVzKFxuICAgIHBhdGhuYW1lLFxuICAgIHZvaWQgMFxuICApO1xuICBjb25zdCBtaWRkbGV3YXJlcyA9IGZsYXR0ZW5NaWRkbGV3YXJlcyhcbiAgICBtYXRjaGVkUm91dGVzLmZsYXRNYXAoKHIpID0+IHIub3B0aW9ucy5zZXJ2ZXI/Lm1pZGRsZXdhcmUpLmZpbHRlcihCb29sZWFuKVxuICApLm1hcCgoZDIpID0+IGQyLm9wdGlvbnMuc2VydmVyKTtcbiAgY29uc3Qgc2VydmVyMiA9IGZvdW5kUm91dGU/Lm9wdGlvbnMuc2VydmVyO1xuICBpZiAoc2VydmVyMikge1xuICAgIGlmIChzZXJ2ZXIyLmhhbmRsZXJzKSB7XG4gICAgICBjb25zdCBoYW5kbGVycyA9IHR5cGVvZiBzZXJ2ZXIyLmhhbmRsZXJzID09PSBcImZ1bmN0aW9uXCIgPyBzZXJ2ZXIyLmhhbmRsZXJzKHtcbiAgICAgICAgY3JlYXRlSGFuZGxlcnM6IChkMikgPT4gZDJcbiAgICAgIH0pIDogc2VydmVyMi5oYW5kbGVycztcbiAgICAgIGNvbnN0IHJlcXVlc3RNZXRob2QgPSByZXF1ZXN0Lm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICAgICAgbGV0IG1ldGhvZCA9IE9iamVjdC5rZXlzKGhhbmRsZXJzKS5maW5kKFxuICAgICAgICAobWV0aG9kMikgPT4gbWV0aG9kMi50b0xvd2VyQ2FzZSgpID09PSByZXF1ZXN0TWV0aG9kXG4gICAgICApO1xuICAgICAgaWYgKCFtZXRob2QpIHtcbiAgICAgICAgbWV0aG9kID0gT2JqZWN0LmtleXMoaGFuZGxlcnMpLmZpbmQoXG4gICAgICAgICAgKG1ldGhvZDIpID0+IG1ldGhvZDIudG9Mb3dlckNhc2UoKSA9PT0gXCJhbGxcIlxuICAgICAgICApID8gXCJhbGxcIiA6IHZvaWQgMDtcbiAgICAgIH1cbiAgICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IGhhbmRsZXJzW21ldGhvZF07XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgY29uc3QgbWF5RGVmZXIgPSAhIWZvdW5kUm91dGUub3B0aW9ucy5jb21wb25lbnQ7XG4gICAgICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIG1pZGRsZXdhcmVzLnB1c2goaGFuZGxlclRvTWlkZGxld2FyZShoYW5kbGVyLCBtYXlEZWZlcikpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB7IG1pZGRsZXdhcmUgfSA9IGhhbmRsZXI7XG4gICAgICAgICAgICBpZiAobWlkZGxld2FyZSAmJiBtaWRkbGV3YXJlLmxlbmd0aCkge1xuICAgICAgICAgICAgICBtaWRkbGV3YXJlcy5wdXNoKFxuICAgICAgICAgICAgICAgIC4uLmZsYXR0ZW5NaWRkbGV3YXJlcyhtaWRkbGV3YXJlKS5tYXAoKGQyKSA9PiBkMi5vcHRpb25zLnNlcnZlcilcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoYW5kbGVyLmhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgbWlkZGxld2FyZXMucHVzaChoYW5kbGVyVG9NaWRkbGV3YXJlKGhhbmRsZXIuaGFuZGxlciwgbWF5RGVmZXIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbWlkZGxld2FyZXMucHVzaChcbiAgICBoYW5kbGVyVG9NaWRkbGV3YXJlKChjdHgyKSA9PiBleGVjdXRlUm91dGVyKHsgc2VydmVyQ29udGV4dDogY3R4Mi5jb250ZXh0IH0pKVxuICApO1xuICBjb25zdCBjdHggPSBhd2FpdCBleGVjdXRlTWlkZGxld2FyZShtaWRkbGV3YXJlcywge1xuICAgIHJlcXVlc3QsXG4gICAgY29udGV4dDoge30sXG4gICAgcGFyYW1zOiByb3V0ZVBhcmFtcyxcbiAgICBwYXRobmFtZVxuICB9KTtcbiAgY29uc3QgcmVzcG9uc2UgPSBjdHgucmVzcG9uc2U7XG4gIHJldHVybiByZXNwb25zZTtcbn1cbmZ1bmN0aW9uIHRocm93Um91dGVIYW5kbGVyRXJyb3IoKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYEl0IGxvb2tzIGxpa2UgeW91IGZvcmdvdCB0byByZXR1cm4gYSByZXNwb25zZSBmcm9tIHlvdXIgc2VydmVyIHJvdXRlIGhhbmRsZXIuIElmIHlvdSB3YW50IHRvIGRlZmVyIHRvIHRoZSBhcHAgcm91dGVyLCBtYWtlIHN1cmUgdG8gaGF2ZSBhIGNvbXBvbmVudCBzZXQgaW4gdGhpcyByb3V0ZS5gXG4gICAgKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIik7XG59XG5mdW5jdGlvbiB0aHJvd0lmTWF5Tm90RGVmZXIoKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYFlvdSBjYW5ub3QgZGVmZXIgdG8gdGhlIGFwcCByb3V0ZXIgaWYgdGhlcmUgaXMgbm8gY29tcG9uZW50IGRlZmluZWQgb24gdGhpcyByb3V0ZS5gXG4gICAgKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIik7XG59XG5mdW5jdGlvbiBoYW5kbGVyVG9NaWRkbGV3YXJlKGhhbmRsZXIsIG1heURlZmVyID0gZmFsc2UpIHtcbiAgaWYgKG1heURlZmVyKSB7XG4gICAgcmV0dXJuIGhhbmRsZXI7XG4gIH1cbiAgcmV0dXJuIGFzeW5jICh7IG5leHQ6IF9uZXh0LCAuLi5yZXN0IH0pID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGhhbmRsZXIoeyAuLi5yZXN0LCBuZXh0OiB0aHJvd0lmTWF5Tm90RGVmZXIgfSk7XG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgdGhyb3dSb3V0ZUhhbmRsZXJFcnJvcigpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH07XG59XG5mdW5jdGlvbiBleGVjdXRlTWlkZGxld2FyZShtaWRkbGV3YXJlcywgY3R4KSB7XG4gIGxldCBpbmRleCA9IC0xO1xuICBjb25zdCBuZXh0ID0gYXN5bmMgKGN0eDIpID0+IHtcbiAgICBpbmRleCsrO1xuICAgIGNvbnN0IG1pZGRsZXdhcmUgPSBtaWRkbGV3YXJlc1tpbmRleF07XG4gICAgaWYgKCFtaWRkbGV3YXJlKSByZXR1cm4gY3R4MjtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSBhd2FpdCBtaWRkbGV3YXJlKHtcbiAgICAgICAgLi4uY3R4MixcbiAgICAgICAgLy8gQWxsb3cgdGhlIG1pZGRsZXdhcmUgdG8gY2FsbCB0aGUgbmV4dCBtaWRkbGV3YXJlIGluIHRoZSBjaGFpblxuICAgICAgICBuZXh0OiBhc3luYyAobmV4dEN0eCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5leHRSZXN1bHQgPSBhd2FpdCBuZXh0KHtcbiAgICAgICAgICAgIC4uLmN0eDIsXG4gICAgICAgICAgICAuLi5uZXh0Q3R4LFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAuLi5jdHgyLmNvbnRleHQsXG4gICAgICAgICAgICAgIC4uLm5leHRDdHg/LmNvbnRleHQgfHwge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihjdHgyLCBoYW5kbGVDdHhSZXN1bHQobmV4dFJlc3VsdCkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFsbG93IHRoZSBtaWRkbGV3YXJlIHJlc3VsdCB0byBleHRlbmQgdGhlIHJldHVybiBjb250ZXh0XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChpc1NwZWNpYWxSZXNwb25zZShlcnIpKSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICByZXNwb25zZTogZXJyXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGN0eDIsIGhhbmRsZUN0eFJlc3VsdChyZXN1bHQpKTtcbiAgfTtcbiAgcmV0dXJuIGhhbmRsZUN0eFJlc3VsdChuZXh0KGN0eCkpO1xufVxuZnVuY3Rpb24gaGFuZGxlQ3R4UmVzdWx0KHJlc3VsdCkge1xuICBpZiAoaXNTcGVjaWFsUmVzcG9uc2UocmVzdWx0KSkge1xuICAgIHJldHVybiB7XG4gICAgICByZXNwb25zZTogcmVzdWx0XG4gICAgfTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gaXNTcGVjaWFsUmVzcG9uc2UoZXJyKSB7XG4gIHJldHVybiBpc1Jlc3BvbnNlKGVycikgfHwgaXNSZWRpcmVjdChlcnIpO1xufVxuZnVuY3Rpb24gaXNSZXNwb25zZShyZXNwb25zZSkge1xuICByZXR1cm4gcmVzcG9uc2UgaW5zdGFuY2VvZiBSZXNwb25zZTtcbn1cbmNvbnN0IGZldGNoID0gY3JlYXRlU3RhcnRIYW5kbGVyKGRlZmF1bHRTdHJlYW1IYW5kbGVyKTtcbmNvbnN0IHNlcnZlciA9IHtcbiAgLy8gUHJvdmlkaW5nIGBSZXF1ZXN0SGFuZGxlcmAgZnJvbSBgQHRhbnN0YWNrL3JlYWN0LXN0YXJ0L3NlcnZlcmAgaXMgcmVxdWlyZWQgc28gdGhhdCB0aGUgb3V0cHV0IHR5cGVzIGRvbid0IGltcG9ydCBpdCBmcm9tIGBAdGFuc3RhY2svc3RhcnQtc2VydmVyLWNvcmVgXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5uZWNlc3NhcnktdHlwZS1hc3NlcnRpb25cbiAgZmV0Y2hcbn07XG5leHBvcnQge1xuICBjcmVhdGVTZXJ2ZXJScGMgYXMgYSxcbiAgY3JlYXRlU2VydmVyRm4gYXMgYyxcbiAgc2VydmVyIGFzIGRlZmF1bHQsXG4gIGdldENvb2tpZSBhcyBnXG59O1xuIiwgImltcG9ydCBzZXJ2ZXJFbnRyeXBvaW50IGZyb20gXCIuLi8uLi8uLi9kaXN0L3NlcnZlci9zZXJ2ZXIuanNcIjtcblxuaWYgKHR5cGVvZiBzZXJ2ZXJFbnRyeXBvaW50Py5mZXRjaCAhPT0gXCJmdW5jdGlvblwiKSB7XG5jb25zb2xlLmVycm9yKFwiVGhlIHNlcnZlciBlbnRyeSBwb2ludCBtdXN0IGhhdmUgYSBkZWZhdWx0IGV4cG9ydCB3aXRoIGEgcHJvcGVydHkgYGZldGNoOiAocmVxOiBSZXF1ZXN0KSA9PiBQcm9taXNlPFJlc3BvbnNlPmBcIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNlcnZlckVudHJ5cG9pbnQuZmV0Y2g7XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG5uYW1lOiBcIkBuZXRsaWZ5L3ZpdGUtcGx1Z2luIHNlcnZlciBoYW5kbGVyXCIsXG5nZW5lcmF0b3I6IFwiQG5ldGxpZnkvdml0ZS1wbHVnaW5AMi42LjFcIixcbnBhdGg6IFwiLypcIixcbnByZWZlclN0YXRpYzogdHJ1ZSxcbn07Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBTTtBQUFOO0FBQUE7QUFBQTtBQUFBLElBQU0sbUJBQW1CLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFlBQVksb0ZBQW9GLFlBQVksQ0FBQyxLQUFLLFFBQVEsR0FBRyxZQUFZLENBQUMsMEJBQTBCLEdBQUcsVUFBVSxDQUFDLEVBQUUsR0FBRyxLQUFLLEVBQUUsWUFBWSxtRkFBbUYsVUFBVSxDQUFDLEdBQUcsWUFBWSxDQUFDLDZCQUE2QiwyQkFBMkIsRUFBRSxHQUFHLFVBQVUsRUFBRSxZQUFZLG1GQUFtRixVQUFVLENBQUMsR0FBRyxZQUFZLENBQUMsNkJBQTZCLDJCQUEyQixFQUFFLEVBQUUsR0FBRyxlQUFlLDJCQUEyQjtBQUFBO0FBQUE7OztBQ0FocUI7QUFBQTtBQUFBO0FBQUE7QUFFQSxPQUFPO0FBQ1AsT0FBTztBQUNQLE9BQU87QUFKUCxJQUtNLG1CQUNBLHVDQUdBO0FBVE47QUFBQTtBQUFBO0FBQUE7QUFLQSxJQUFNLG9CQUFvQjtBQUMxQixJQUFNLHdDQUF3QyxnQkFBZ0IsOERBQThELENBQUMsTUFBTSxXQUFXO0FBQzVJLGFBQU8sZUFBZSxnQkFBZ0IsTUFBTSxNQUFNO0FBQUEsSUFDcEQsQ0FBQztBQUNELElBQU0saUJBQWlCLGVBQWUsRUFBRSxRQUFRLHVDQUF1QyxNQUFNO0FBQzNGLFlBQU0sUUFBUSxVQUFVLGlCQUFpQjtBQUN6QyxVQUFJLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVO0FBQy9ELGVBQU87QUFBQSxNQUNUO0FBQ0EsYUFBTztB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SztBQUFBLE1BQ0wsTUFBTSxDQUFDLE9BQU87QUFDWixZQUFJLE9BQU8sT0FBTyxXQUFZLFFBQU87QUFDckMsWUFBSSxFQUFFLHVCQUF1QixJQUFLLFFBQU87QUFDekMsZUFBTyxDQUFDLENBQUMsR0FBRyxtQkFBbUI7QUFBQSxNQUNqQztBQUFBLE1BQ0EsZ0JBQWdCLENBQUMsRUFBRSxXQUFXLE9BQU8sRUFBRSxXQUFXO0FBQUEsTUFDbEQsa0JBQWtCLENBQUMsRUFBRSxXQUFXLE1BQU07QUFDcEMsY0FBTSxLQUFLLE9BQU8sTUFBTSxXQUFXO0FBQ2pDLGdCQUFNLFdBQVcsTUFBTSxnQkFBZ0IsVUFBVTtBQUNqRCxnQkFBTSxTQUFTLE1BQU0sU0FBUyxRQUFRLENBQUMsR0FBRyxNQUFNO0FBQ2hELGlCQUFPLE9BQU87QUFBQSxRQUNoQjtBQUNBLGVBQU8sZ0JBQWdCLFlBQVksRUFBRTtBQUFBLE1BQ3ZDO0FBQUEsSUFDRixDQUFDO0FBaVdELElBQU0sUUFBUSxtQkFBbUIsb0JBQW9CO0FBQ3JELElBQU0sU0FBUztBQUFBO0FBQUE7QUFBQSxNQUdiO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQ3p0SEE7QUFFQSxJQUFJLE9BQU8sUUFBa0IsVUFBVSxZQUFZO0FBQ25ELFVBQVEsTUFBTSxnSEFBZ0g7QUFDOUg7QUFFQSxJQUFPLGlCQUFRLE9BQWlCO0FBRXpCLElBQU0sU0FBUztBQUFBLEVBQ3RCLE1BQU07QUFBQSxFQUNOLFdBQVc7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLGNBQWM7QUFDZDsiLAogICJuYW1lcyI6IFsianN4IiwgImN2YSIsICJjcmVhdGVUb2RvIiwgInVwZGF0ZVRvZG8iLCAiZGVsZXRlVG9kbyIsICJjcmVhdGVUb2RvMiIsICJ1cGRhdGVUb2RvMiIsICJkZWxldGVUb2RvMiIsICJfIiwgImpzeCIsICJqc3hzIiwgImNoZWNrTW9uZ29EQkNvbm5lY3Rpb24iLCAiY2hlY2tNb25nb0RCQ29ubmVjdGlvbl9jcmVhdGVTZXJ2ZXJGbl9oYW5kbGVyIiwgImNyZWF0ZVRvZG8iLCAiZGVsZXRlVG9kbyIsICJ1cGRhdGVUb2RvIiwgImpzeCIsICJqc3hzIiwgIkxpbmsiLCAiU2xvdCIsICJjdmEiLCAidXNlU3RhdGUiLCAiT2JqZWN0SWQiLCAiZ2V0Q29va2llIiwgIlRIRU1FX0NPT0tJRV9OQU1FIiwgImdldFNlcnZlclRoZW1lX2NyZWF0ZVNlcnZlckZuX2hhbmRsZXIiLCAiZ2V0U2VydmVyVGhlbWUiLCAiZ2V0VG9kb3NfY3JlYXRlU2VydmVyRm5faGFuZGxlciIsICJnZXRUb2RvcyIsICJjcmVhdGVUb2RvX2NyZWF0ZVNlcnZlckZuX2hhbmRsZXIiLCAidXBkYXRlVG9kb19jcmVhdGVTZXJ2ZXJGbl9oYW5kbGVyIiwgImRlbGV0ZVRvZG9fY3JlYXRlU2VydmVyRm5faGFuZGxlciIsICJqc3giLCAib3B0aW9ucyIsICJ6IiwgInJvdXRlciIsICJjb25maWciLCAidHNyU3RhcnRNYW5pZmVzdCIsICJnZXRSb3V0ZXIiLCAicm91dGVyMiIsICJvcHRpb25zMiIsICJzZXRDb29raWUiXQp9Cg==
