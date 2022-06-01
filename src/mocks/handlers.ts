import { rest } from "msw";

const mockUser = {
  username: "jota",
  name: "jota",
};

const mockToken = "token";

export const handlers = [
  rest.post(`${process.env.REACT_APP_API_URL}users/login`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: mockToken }));
  }),

  rest.post(
    `${process.env.REACT_APP_API_URL}users/register`,
    (req, res, ctx) => {
      return res(
        ctx.status(201),
        ctx.json({
          mockUser,
        })
      );
    }
  ),
];
