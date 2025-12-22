import MasterCrudPage, { type MasterField } from '@/pages/masters/shared/MasterCrudPage';
import type { TableColumn } from '@/ui/shared';
import { actionsCol, statusCol } from '../course-master/sharedColumns';

type PostForm = {
  postCode: string;
  postName: string;
  description: string;
  isTeaching: boolean;
  isActive: boolean;
};

type PostRow = PostForm & { id: number };

export default function PostMasterData() {
  const fields: MasterField<PostForm>[] = [
    {
      kind: 'text',
      name: 'postCode',
      label: 'Post Code',
      required: true,
      toUpperCase: true,
      maxLength: 10,
      placeholder: 'e.g. ASTPROF',
    },
    {
      kind: 'text',
      name: 'postName',
      label: 'Post Name',
      required: true,
      placeholder: 'Assistant Professor',
    },
    {
      kind: 'text',
      name: 'description',
      label: 'Description',
      placeholder: 'Short description of the post',
      maxLength: 200,
    },
    { kind: 'checkbox', name: 'isTeaching', label: 'Teaching Post' },
    { kind: 'checkbox', name: 'isActive', label: 'Active' },
  ];

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '70px' } },
    { field: 'postCode', header: 'Post Code', sortable: true },
    { field: 'postName', header: 'Post Name', sortable: true },
    { field: 'description', header: 'Description' },
    {
      field: 'isTeaching',
      header: 'Post Type',
      sortable: true,
      body: (row: PostRow) => (row.isTeaching ? 'Teaching' : 'Non-Teaching'),
    },
    statusCol,
    actionsCol,
  ];

  const rows: PostRow[] = [
    {
      id: 1,
      postCode: 'ASTPROF',
      postName: 'Assistant Professor',
      description: 'Entry level teaching post',
      isTeaching: true,
      isActive: true,
    },
    {
      id: 2,
      postCode: 'PROF',
      postName: 'Professor',
      description: 'Senior teaching post',
      isTeaching: true,
      isActive: true,
    },
    {
      id: 3,
      postCode: 'CLRK',
      postName: 'Clerk',
      description: 'Administrative support staff',
      isTeaching: false,
      isActive: true,
    },
  ];

  return (
    <MasterCrudPage<PostForm, PostRow>
      title="Post Master Data"
      tableTitle="Post Master List"
      defaultForm={{
        postCode: '',
        postName: '',
        description: '',
        isTeaching: true,
        isActive: true,
      }}
      fields={fields}
      rows={rows}
      columns={columns}
    />
  );
}
