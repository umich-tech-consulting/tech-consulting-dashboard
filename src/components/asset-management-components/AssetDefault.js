import laptop_return from "../../icons/asset-management/laptop_return.svg"
import laptop_check_in from "../../icons/asset-management/laptop_check_in.svg"
import laptop_swap from "../../icons/asset-management/laptop_swap.svg"

const AssetDefault = ({setIsCheckOutClicked, setIsReturnClicked, setIsSwapClicked}) => {

  const handleCheckOutClick = () => {
    setIsCheckOutClicked(true);
  };
  const handleReturnClick = () => {
    setIsReturnClicked(true);
  };
  const handleSwapClick = () => {
    setIsSwapClicked(true);
  };

  return (
    <>
        <div className="am-default-container mt-6">
            <button onClick={handleReturnClick}>
              <img src={laptop_return} alt='Laptop Return Icon' />
              <div><span className="font-semibold">Return</span> Laptop</div>
            </button>
            <button onClick={handleCheckOutClick}>
              <img src={laptop_check_in} alt='Laptop Check In Icon' />
              <div><span className="font-semibold">Check Out</span> Laptop</div>
            </button>
            <button onClick={handleSwapClick}>
              <img src={laptop_swap} alt='Laptop Swap Icon' />
              <div><span className="font-semibold">Swap</span> Laptop</div>
            </button>
        </div>
    </>
  );
};

export default AssetDefault;
