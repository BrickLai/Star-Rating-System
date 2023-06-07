function Dialog(props) { 
    return (
      <>
        <div>
          <button
            type='button'
            className={props.isOpen ? 'open hide' : 'open'}
            onClick={props.handleDialog}
          >
            OPEN DIALOG
          </button>
        </div>
        {props.isOpen && (
          <dialog open>
            <button
              type='button'
              className='close'
              onClick={props.handleDialog}
            >
              CLOSE DIALOG
            </button>
          </dialog>
        )}
      </>
    );
  }
  
  export default Dialog;