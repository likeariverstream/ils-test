export interface StyledTableProps {
    dataSource: { key: number, route: string }[];
    columns: {
      title: string;
      dataIndex: string;
      key: string;
      render: (text: string, record: { key: number, route: string }) => JSX.Element;
    }[];
  }
