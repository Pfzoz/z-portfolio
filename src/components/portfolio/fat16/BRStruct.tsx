import { StructCodePre } from "./contents";

export default function BRStruct() {
  return (
    <StructCodePre>
      <code>
        {`typedef struct root_entry
{
unsigned char file_name[11];
unsigned char attributes;
unsigned char reserved_windows_nt;
unsigned char creation_time;
unsigned short time_creation;
unsigned short date_creation;
unsigned short last_accessed;
unsigned short high_first_cluster;
unsigned short last_modification_time;
unsigned short last_modification_date;
unsigned short low_first_cluster;
unsigned int file_size;
} __attribute__((packed)) root_entry_t;`}
      </code>
    </StructCodePre>
  );
}
