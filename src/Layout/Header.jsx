import useCountry from "../hooks/useCountry.jsx";

const Header = () => {
  const { country } = useCountry();
  console.log(country);

  return <div>{country}</div>;
};

export default Header;
