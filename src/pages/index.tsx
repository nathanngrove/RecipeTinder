import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {

  //const router = useRouter();

  // const { isLoading, isError, data, error } = trpc.useQuery(["randomRecipe"]);

  // if (isLoading) {
  //   return (
  //     <>
  //       <div className={styles.card}>
  //         <img className={styles.img} src="/icons/image-loading-icon.svg" alt="Loading..."/>
  //         <h1 className={styles.h1}>Loading...</h1>
  //         <ul className={styles.ul}>
  //           <li className={styles.li}>
  //             <img className={styles.dietaryIcon} src="/icons/loading-icon.svg" alt=""/>
  //             Vegetarian
  //           </li>
  //           <li className={styles.li}>
  //             <img className={styles.dietaryIcon} src="/icons/loading-icon.svg" alt=""/>
  //             Vegan
  //           </li>
  //           <li className={styles.li}>
  //             <img className={styles.dietaryIcon} src="/icons/loading-icon.svg" alt=""/>
  //             Gluten Free
  //           </li>
  //           <li className={styles.li}>
  //             <img className={styles.dietaryIcon} src="/icons/loading-icon.svg" alt=""/>
  //             Dairy Free
  //           </li>
  //           <li className={styles.li}>
  //             <img className={styles.dietaryIcon} src="/icons/loading-icon.svg" alt=""/>
  //             servings
  //           </li>
  //           <li className={styles.li}>
  //             <img className={styles.dietaryIcon} src="/icons/loading-icon.svg" alt=""/>
  //             minutes
  //           </li>  
  //         </ul>
  //         <h2 className={styles.h2}>Ingredients</h2>
  //         <div className={styles.ingredientListing}>
  //           <p className={styles.ingredientMeasures}>Loading...</p>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }
  
  // if(isError) {
  //   router.push({pathname: "/error", query: { errorMessage: error.message }});
  // }

  // if(data) {
  //   return (
  //     <>
  //       <div className={styles.card}>
  //         <img className={styles.img} src={data.image} alt={data.name}/>
  //         <h1 className={styles.h1}>{data.name}</h1>
  //         <ul className={styles.ul}>
  //           {data.diet.vegetarian === true &&
  //             <li className={styles.li}>
  //               <img className={styles.dietaryIcon} src="\icons\vegetarian-icon.svg" alt=""/>
  //               Vegetarian
  //             </li>}
  //           {data.diet.vegan === true &&
  //           <li className={styles.li}>
  //             <img className={styles.dietaryIcon} src="\icons\vegan-icon.svg" alt=""/>
  //             Vegan
  //           </li>}
  //           {data.diet.glutenFree === true &&
  //           <li className={styles.li}>
  //             <img className={styles.dietaryIcon} src="\icons\glutenfree-icon.svg" alt=""/>
  //             Gluten Free
  //           </li>}
  //           {data.diet.dairyFree === true &&
  //           <li className={styles.li}>
  //             <img className={styles.dietaryIcon} src="\icons\dairyfree-icon.svg" alt=""/>
  //             Dairy Free
  //           </li>}
  //           <li className={styles.li}>
  //             <img className={styles.dietaryIcon} src="\icons\servings-icon.svg" alt=""/>
  //             {data.servings} servings
  //           </li>
  //           <li className={styles.li}>
  //             <img className={styles.dietaryIcon} src="\icons\time-icon.svg" alt=""/>
  //             {data.readyInMinutes} minutes
  //           </li>
  //         </ul>
  //         <h2 className={styles.h2}>Ingredients</h2>
  //         <section className={styles.section}>
  //           {data.ingredients.map(ingredient => {
  //             return (<div className={styles.ingredientListing}>
  //               <p className={styles.ingredientMeasures}>{ingredient.measures.us.amount} {ingredient.measures.us.unit} {ingredient.name}</p>
  //             </div>)
  //           })}
  //         </section>
  //       </div>
  //     </>
  //   );}

    return (<div className={styles.card}></div>);
  }

export default Home;
