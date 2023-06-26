import { Todo } from '../todo/todo';

export function TodoContainer() {

  return (
    <article>
      <h1>
                Todo-list
      </h1>
      <section>
        <Todo />
        <Todo />
        <Todo />

      </section>
    </article>
  );
}
