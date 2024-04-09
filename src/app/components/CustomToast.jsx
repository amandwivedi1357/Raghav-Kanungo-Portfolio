export const CustomToast = ({ type, message }) => {
    const toastStyle = {
      success: "bg-green-500",
      error: "bg-red-500",
    };
  
    return (
      <div className={`bg-opacity-90 ${toastStyle[type]} text-white font-medium rounded-lg py-2 px-4`}>
        {message}
      </div>
    );
  };
  