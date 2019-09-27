import { types, SnapshotIn } from "mobx-state-tree";

const Todo = types
  .model("Todo", {
    title: types.string,
    done: types.optional(types.boolean, false)
  })
  .actions(self => ({
    toggle() {
      self.done = !self.done;
    }
  }));

export const Store = types
  .model("Store", {
    todos: types.array(Todo)
  })
  .actions(self => ({
    toggleAll() {
      self.todos.forEach(todo => {
        todo.toggle();
      });
    },
    add({ title, done }: SnapshotIn<typeof Todo>) {
      self.todos.push({
        title,
        done
      });
    }
  }));
