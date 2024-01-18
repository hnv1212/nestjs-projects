import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const Protocol = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    console.log("🚀 ~ data:", data)
    const request = ctx.switchToHttp().getRequest();
    return request.protocol;
  },
);
