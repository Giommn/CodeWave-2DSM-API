const users = await prisma.user.findMany({
  where: {
    email: { endsWith: "@prisma.io" }, // your filter condition
  },
  omit: {
    password: true, // excludes password from all results
  },
  orderBy: { createdAt: "desc" },
});
