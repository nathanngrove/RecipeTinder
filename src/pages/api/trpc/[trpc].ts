import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { IRecipe } from '../../../utils/types';
import getRandomRecipe from '../../../utils/getRandomRecipe';

export const appRouter = trpc
  .router()
  .query('randomRecipe', {
  async resolve() {
      const recipe: IRecipe = await getRandomRecipe();
      return recipe;
  }
});

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});