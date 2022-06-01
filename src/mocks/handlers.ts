import { rest } from "msw";

const mockUser = {
  username: "jota",
  name: "jota",
};

export const handlers = [
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
