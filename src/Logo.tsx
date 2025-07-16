type LogoProps = {
  logoColor: string;
};

const Logo: React.FC<LogoProps> = ({ logoColor }) => {
  return (
    <section className="flex flex-row font-logotype text-logotype">
      <h1 className={`${logoColor}`}>DRAWN</h1>
      <h1>OUT!</h1>
    </section>
  );
};

export default Logo;
