"use client"

export default function Board() {
  return (
    <div
      role="application"
      aria-label="Kanban app"
      tabIndex={-1}>
      <div
        role="group"
        aria-roledescription="board"
        aria-label="Platform Launch"
        data-type="task-board"
        tabIndex={-1}>
        <div
          role="listbox"
          aria-roledescription="list"
          aria-label="TO DO"
          tabIndex={-1}
          data-type="task-list">
          <div aria-hidden="true">TO DO</div>
          <div
            role="option"
            id="1"
            tabIndex={-1}
            data-type="task-item">
            Build UI for onboarding flow
          </div>
          <div
            role="option"
            id="2"
            tabIndex={-1}
            data-type="task-item">
            Build UI for search
          </div>
          <div
            role="option"
            id="3"
            tabIndex={-1}
            data-type="task-item">
            Search prices
          </div>
        </div>

        <div
          role="listbox"
          aria-roledescription="list"
          aria-label="DOING"
          tabIndex={-1}
          data-type="task-list">
          <div aria-hidden="true">DOING</div>
          <div
            role="option"
            id="100"
            tabIndex={-1}
            data-type="task-item">
            Finish review of WCAG
          </div>
          <div
            role="option"
            id="101"
            tabIndex={-1}
            data-type="task-item">
            Finish review of ARIA
          </div>
          <div
            role="option"
            id="102"
            tabIndex={-1}
            data-type="task-item">
            Learn how to use popular screen readers
          </div>
        </div>

        <div
          role="listbox"
          aria-roledescription="list"
          aria-label="DONE"
          tabIndex={-1}
          data-type="task-list">
          <div aria-hidden="true">DONE</div>
          <div
            role="option"
            id="200"
            tabIndex={-1}
            data-type="task-item">
            Learn ARIA APG
          </div>
          <div
            role="option"
            id="201"
            tabIndex={-1}
            data-type="task-item">
            Read HTML AAM
          </div>
          <div
            role="option"
            id="202"
            tabIndex={-1}
            data-type="task-item">
            Read Core AAM
          </div>
        </div>
      </div>

      {/* <dialog id="dialog-task-details">
        <button commandfor="dialog-task-details" command="close">Close</button>
        <dl>
          <dt><strong>Title</strong></dt>
          <dd>Research pricing points of various competitors and trial different business models</dd>
          <dt><strong>Description</strong></dt>
          <dd>We know what we&apos;re planning to build for version one. Now we need to finalise the first pricing model we&apos;ll use. Keep iterating the subtasks until we have a coherent proposition.</dd>
          <dt><strong>Subtasks</strong></dt>
          <dd><label><input type="checkbox" /> Research competitor pricing and business models</label></dd>
          <dd><label><input type="checkbox" /> Outline a business model that works for our solution</label></dd>
          <dd><label><input type="checkbox" /> Talk to potential customers about our proposed solution and ask for price expectancy</label></dd>
        </dl>

        <button commandfor="dialog-edit-task" command="show-modal">Edit</button>{" "}
        <button commandfor="dialog-delete-task" command="show-modal">Delete</button>

        <dialog id="dialog-edit-task">
          <button commandfor="dialog-edit-task" command="close">Close</button>
          <form method="dialog">
            <p><label>Title <input type="text" /></label></p>
            <p><label>Description <textarea></textarea></label></p>
            <button>Save</button>
          </form>
        </dialog>

        <dialog id="dialog-delete-task">
          <p><strong>Delete this task?</strong></p>
          <p>Are you sure you want to delete the <cite>Build settings UI</cite> task and its subtasks? This action cannot be reversed.</p>
          <form method="dialog">
            <button>Cancel</button>{" "}
            <button>Delete</button>
          </form>
        </dialog>
      </dialog>

      <dialog id="dialog-add-task" aria-label="Add task">
        <button commandfor="dialog-add-task" command="close">Close</button>
        <form method="dialog">
          <p><label>Title <input type="text" /></label></p>
          <p><label>Description <textarea></textarea></label></p>
          <button>Create</button>
        </form>
      </dialog>

      <dialog id="dialog-delete-column">
        <p><strong>Delete this column?</strong></p>
        <p>Are you sure you want to delete the <cite>TO DO</cite> column and its tasks? This action cannot be reversed.</p>
        <form method="dialog">
          <button>Cancel</button>{" "}
          <button>Delete</button>
        </form>
      </dialog> */}
    </div>
  )
}