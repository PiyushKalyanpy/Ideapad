const Status = (props) => {
  const { status_id, status_title } = props.status;
  return (
    <div>
      {(() => {
        if (status_id === 1) {
          return <div className="bg-red-100 py-1 px-4 rounded-full font-semibold text-red-900"> {status_title}</div>;
        } else if (status_id === 2) {
          return <div className="bg-orange-100 py-1 px-4 rounded-full font-semibold text-yellow-900"> {status_title}</div>;
        } else if (status_id === 3) {
          return <div className="bg-green-100 py-1 px-4 rounded-full font-semibold text-green-900"> {status_title}</div>;
        }
      })()}
    </div>
  );
};

export default Status;
