# 基于官方 Node.js 18 镜像
FROM node:18-alpine AS builder

# 设置工作目录
WORKDIR /app

# 复制依赖文件
COPY package.json yarn.lock ./

# 安装依赖
RUN yarn install --frozen-lockfile

# 复制全部源代码
COPY . .

# 构建 Next.js 应用
RUN yarn build

# 生产环境镜像
FROM node:18-alpine AS runner
WORKDIR /app

# 仅复制生产依赖
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/tailwind.config.js ./
COPY --from=builder /app/postcss.config.js ./
COPY --from=builder /app/tsconfig.json ./

# 设置环境变量
ENV NODE_ENV=production

# 暴露3300和80端口
EXPOSE 3300
EXPOSE 80

# 启动Next.js应用，监听80端口（主入口），兼容3300
CMD ["yarn", "start", "-p", "80"]
# 如需监听3300端口，可将CMD改为["yarn", "start", "-p", "3300"] 