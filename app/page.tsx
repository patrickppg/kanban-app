"use client"

import { FocusEvent, KeyboardEvent } from "react"

export default function Board() {

  function handleKeyDown(e: KeyboardEvent) {
    if (
      e.key !== "ArrowUp" &&
      e.key !== "ArrowDown" &&
      e.key !== "ArrowLeft" &&
      e.key !== "ArrowRight" &&
      e.key !== "Home" &&
      e.key !== "End" &&
      e.key !== "PageUp" &&
      e.key !== "PageDown"
    ) return
    if (e.isComposing) return
    if (!(e.target instanceof HTMLElement)) return
    if (
      e.target.dataset.type !== "task-board" &&
      e.target.dataset.type !== "task-list" &&
      e.target.dataset.type !== "task-item"
    ) return



    e.preventDefault()
    switch (e.key) {
      case "ArrowUp": {
        if (e.target.dataset.type === "task-list") {
          if (e.target.dataset.focusTaskId) {
            document
              .getElementById(e.target.dataset.focusTaskId)
              ?.focus()
          } else {
            e.target
              .querySelector<HTMLElement>("[data-type='task-item']")
              ?.focus()
          }
        }
        
        else if (e.target.dataset.type === "task-item") {
          if (!(e.target.previousElementSibling instanceof HTMLElement)) return
          if (e.target.previousElementSibling.dataset.type === "task-item") {
            e.target.previousElementSibling.focus()
          }
        }
        break
      }



      case "ArrowDown": {
        if (e.target.dataset.type === "task-list") {
          if (e.target.dataset.focusTaskId) {
            document
              .getElementById(e.target.dataset.focusTaskId)
              ?.focus()
          } else {
            e.target
              .querySelector<HTMLElement>("[data-type='task-item']")
              ?.focus()
          }
        }
        
        else if (e.target.dataset.type === "task-item") {
          if (!(e.target.nextElementSibling instanceof HTMLElement)) return
          if (e.target.nextElementSibling.dataset.type === "task-item") {
            e.target.nextElementSibling.focus()
          }
        }
        break
      }



      case "ArrowLeft": {
        if (e.altKey) {
          if (e.currentTarget === e.target) return
          let currentList = e.target.closest<HTMLElement>("[data-type='task-list']")!
          while (currentList.previousElementSibling) {
            const previousList = currentList.previousElementSibling
            if (!(previousList instanceof HTMLElement)) break
            currentList = previousList
            if (currentList.childElementCount === 1) continue
            currentList.focus()
            break
          }
          return
        }

        if (e.target.dataset.type === "task-list") {
          if (!(e.target.previousElementSibling instanceof HTMLElement)) return
          if (e.target.previousElementSibling.dataset.type === "task-list") {
            e.target.previousElementSibling.focus()
          }
        }
        
        else if (e.target.dataset.type === "task-item") {
          const parentList = e.target.closest<HTMLElement>("[data-type='task-list']")!
          if (!(parentList.previousElementSibling instanceof HTMLElement)) return
          if (parentList.previousElementSibling.dataset.type === "task-list") {
            parentList.previousElementSibling.focus()
          }
        }
        break
      }



      case "ArrowRight": {
        if (e.altKey) {
          if (e.currentTarget === e.target) return
          let currentList = e.target.closest<HTMLElement>("[data-type='task-list']")!
          while (currentList.nextElementSibling) {
            const nextList = currentList.nextElementSibling
            if (!(nextList instanceof HTMLElement)) break
            currentList = nextList
            if (currentList.childElementCount === 1) continue
            currentList.focus()
            break
          }
          return
        }

        if (e.target.dataset.type === "task-list") {
          if (!(e.target.nextElementSibling instanceof HTMLElement)) return
          if (e.target.nextElementSibling.dataset.type === "task-list") {
            e.target.nextElementSibling.focus()
          }
        }
        
        else if (e.target.dataset.type === "task-item") {
          const parentList = e.target.closest<HTMLElement>("[data-type='task-list']")!
          if (!(parentList.nextElementSibling instanceof HTMLElement)) return
          if (parentList.nextElementSibling.dataset.type === "task-list") {
            parentList.nextElementSibling.focus()
          }
        }
        break
      }
      


      case "Home": {
        if (e.repeat) return

        if (e.altKey) {
          if (e.currentTarget === e.target) return
          if (e.currentTarget.firstElementChild instanceof HTMLElement) {
            e.currentTarget.firstElementChild.focus()
          }
          return
        }

        if (e.target.dataset.type === "task-list") {
          e.target
            .querySelector<HTMLElement>("[data-type='task-item']")
            ?.focus()
        }
        
        else if (e.target.dataset.type === "task-item") {
          e.target
            .closest<HTMLElement>("[data-type='task-list']")!
            .querySelector<HTMLElement>("[data-type='task-item']")!
            .focus()
        }
        break
      }



      case "End": {
        if (e.repeat) return

        if (e.altKey) {
          if (e.currentTarget === e.target) return
          if (e.currentTarget.lastElementChild instanceof HTMLElement) {
            e.currentTarget.lastElementChild.focus()
          }
          return
        }

        if (e.target.dataset.type === "task-list") {
          if (e.target.childElementCount > 1) {
            (e.target.lastElementChild as HTMLElement).focus()
          }
        }
        
        else if (e.target.dataset.type === "task-item") {
          (e.target
            .closest<HTMLElement>("[data-type='task-list']")!
            .lastElementChild as HTMLElement)
            .focus()
        }
        break
      }
    }
  }

  function handleFocus(e: FocusEvent) {
    if (!(e.target instanceof HTMLElement)) return
    if (
      e.target.dataset.type === "task-list" ||
      e.target.dataset.type === "task-item"
    ) {
      const tabbableObject = e.currentTarget.querySelector<HTMLElement>("[tabindex='0']")
      if (tabbableObject) tabbableObject.tabIndex = -1
      e.target.tabIndex = 0
    }
    if (e.target.dataset.type === "task-item") {
      e.target
        .closest<HTMLElement>("[data-type='task-list']")!
        .dataset.focusTaskId = e.target.id
    }
  }
  
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
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}>
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