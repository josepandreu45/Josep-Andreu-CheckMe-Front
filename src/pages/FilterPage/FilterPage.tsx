import CheckFilter from "../../components/CheckFilter/CheckFilter";
import Footer from "../../components/Footer/Footer";
import FilterPageComponent from "./FilterPageStyle";

const FilterPage = (): JSX.Element => {
  return (
    <>
      <FilterPageComponent>
        <main>
          <CheckFilter />
        </main>
        <Footer />
      </FilterPageComponent>
    </>
  );
};

export default FilterPage;
