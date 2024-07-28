export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      // if the user is on this url then it is the admin
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      // if the user is on this url then it allowed to view blogs
      const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

      // ONLY ADMIN CAN REACH THE ADMIN DASHBORAD
      if (isOnAdminPanel && !user) {
        return false;
      }

      // ONLY AYTHENTICATED USERS CAN REACH THE BLOG PAGE
      if (isOnBlogPage && !user) {
        return false;
      }

      // ONLY UNAUTHENTICTED USERS CAN REACH THE LOGIN PAGE
      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
