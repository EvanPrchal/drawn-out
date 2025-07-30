type LogoProps = {
  logoColor: string;
  size: string;
};

const Logo: React.FC<LogoProps> = ({ logoColor, size }) => {
  return (
    <section className={`flex flex-row font-logotype ${size}`}>
      <h1 className={`${logoColor}`}>DRAWN</h1>
      <h1>OUT!</h1>
    </section>
  );
};

export default Logo;
