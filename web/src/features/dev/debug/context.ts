import { ContextMenuProps } from '../../../typings';
import { debugData } from '../../../utils/debugData';

export const debugContext = () => {
  debugData<ContextMenuProps>([
    {
      action: 'showContext',
      data: {
        title: 'Vehicle garage',
        options: [
          { title: 'Empty button' },
          {
            title: 'Karin Kuruma',
            image: '',
            arrow: true,
            colorScheme: 'blue',
            metadata: [
              {
                ['label']: 'Body',
                ['value']: '55%',
                ['progress']: 55,
                colorScheme: 'red',
              },
              {
                ['label']: 'Engine',
                ['value']: '100%',
                ['progress']: 100,
                colorScheme: 'green',
              },
              {
                ['label']: 'Oil',
                ['progress']: 11,
              },
              {
                ['label']: 'Fuel',
                ['progress']: 87,
              },
            ],
          },
          {
            title: 'Example button',
            description: 'Example button description',
            icon: 'inbox',
            image: '',
            metadata: [{ label: 'Value 1', value: 300 }],
            disabled: true,
          },
          {
            title: 'Oil Level',
            description: 'Vehicle oil level',
            progress: 30,
            icon: 'oil-can',
            metadata: [{ label: 'Remaining Oil', value: '30%' }],
            arrow: true,
          },
          {
            title: 'Durability',
            progress: 80,
            icon: 'car-side',
            metadata: [{ label: 'Durability', value: '80%' }],
            colorScheme: 'blue',
          },
          {
            title: 'Menu button',
            icon: 'bars',
            menu: 'other_example_menu',
            arrow: false,
            description: 'Takes you to another menu',
            metadata: ['It also has metadata support'],
          },
          {
            title: 'Event button',
            description: 'Open a menu and send event data',
            icon: 'check',
            arrow: true,
            event: 'some_event',
            args: { value1: 300, value2: 'Other value' },
          },
        ],
      },
    },
  ]);
};
