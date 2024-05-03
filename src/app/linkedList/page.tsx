import { LinkedListComponent } from '@/components';
import React from 'react';

const LinkedListPage = () => {
  return (
    <div className="mx-auto p-4">
      <h1>Linked List</h1>
      <p>
        Linked List is a linear data structure. It is a collection of nodes
        where each node points to the next node in the sequence. It is a data
        structure consisting of a collection of nodes which together represent a
        sequence. Here is a simple implementation of a singly linked list.
      </p>

      <LinkedListComponent />
    </div>
  );
};

export default LinkedListPage;
