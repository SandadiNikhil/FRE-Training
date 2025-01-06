import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' }) 
export class ColorService {
  private items = [
    { title: '1', 
      description: 'A random paragraph can also be an excellent way for a writer to tackle writers block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers block in the first place.',
      borderColor: '#fff'
    },
    { title: '2', 
      description: 'A random paragraph can also be an excellent way for a writer to tackle writers block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers block in the first place.',
      borderColor: '#fff'
    },
    { title: '3', 
      description: 'A random paragraph can also be an excellent way for a writer to tackle writers block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers block in the first place.',
      borderColor: '#fff'
    },
    { title: '4', 
      description: 'A random paragraph can also be an excellent way for a writer to tackle writers block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers block in the first place.',
      borderColor: '#fff'
    }
  ];

  getItems() {
    return this.items; 
  }
}
