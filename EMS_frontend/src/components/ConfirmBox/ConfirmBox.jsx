/* eslint-disable react/prop-types */
const ConfirmBox = (props) => {
  return (
    <div className="fixed w-full top-0 h-full flex flex-col justify-center items-center backdrop-blur-sm bg-slate-500/10">
      <div className="absolute flex flex-col justify-center items-center rounded-lg bg-slate-200 shadow-darkShadow z-50">
        <h1 className="p-4 md:p-8 text-[20px] md:text-[24px]">Do you want to delete this account?</h1>
        <div className=" w-full flex justify-between items-center p-4 md:p-8">
          <div className="btnNone bg-red-700"
            onClick={props.handleDelete}>Yes</div>
          <div className="btnNone"
            onClick={() => props.setOpenConfirmBox(false)}>No</div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmBox
