// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: task.proto

package task

import proto "github.com/gogo/protobuf/proto"
import fmt "fmt"
import math "math"
import _ "../person"
import furo "furo"
import _ "project"

import io "io"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion2 // please upgrade the proto package

// Task data description
type Task struct {
	// Short task description
	Description string `protobuf:"bytes,3,opt,name=description,proto3" json:"description,omitempty"`
	// Localized String representation of a task
	DisplayName string `protobuf:"bytes,2,opt,name=display_name,json=displayName,proto3" json:"display_name,omitempty"`
	// Estimated time in days
	EstimatedTime int32 `protobuf:"varint,4,opt,name=estimated_time,json=estimatedTime,proto3" json:"estimated_time,omitempty"`
	// Identity of a task
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// Owner of a task
	Owner *furo.Reference `protobuf:"bytes,5,opt,name=owner" json:"owner,omitempty"`
	// List of subtasks
	Subtasks             []*Task  `protobuf:"bytes,6,rep,name=subtasks" json:"subtasks,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Task) Reset()         { *m = Task{} }
func (m *Task) String() string { return proto.CompactTextString(m) }
func (*Task) ProtoMessage()    {}
func (*Task) Descriptor() ([]byte, []int) {
	return fileDescriptor_task_064a66c8d7fa32fd, []int{0}
}
func (m *Task) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Task) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Task.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalTo(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (dst *Task) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Task.Merge(dst, src)
}
func (m *Task) XXX_Size() int {
	return m.Size()
}
func (m *Task) XXX_DiscardUnknown() {
	xxx_messageInfo_Task.DiscardUnknown(m)
}

var xxx_messageInfo_Task proto.InternalMessageInfo

func (m *Task) GetDescription() string {
	if m != nil {
		return m.Description
	}
	return ""
}

func (m *Task) GetDisplayName() string {
	if m != nil {
		return m.DisplayName
	}
	return ""
}

func (m *Task) GetEstimatedTime() int32 {
	if m != nil {
		return m.EstimatedTime
	}
	return 0
}

func (m *Task) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *Task) GetOwner() *furo.Reference {
	if m != nil {
		return m.Owner
	}
	return nil
}

func (m *Task) GetSubtasks() []*Task {
	if m != nil {
		return m.Subtasks
	}
	return nil
}

func init() {
	proto.RegisterType((*Task)(nil), "task.Task")
}
func (m *Task) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalTo(dAtA)
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Task) MarshalTo(dAtA []byte) (int, error) {
	var i int
	_ = i
	var l int
	_ = l
	if len(m.Id) > 0 {
		dAtA[i] = 0xa
		i++
		i = encodeVarintTask(dAtA, i, uint64(len(m.Id)))
		i += copy(dAtA[i:], m.Id)
	}
	if len(m.DisplayName) > 0 {
		dAtA[i] = 0x12
		i++
		i = encodeVarintTask(dAtA, i, uint64(len(m.DisplayName)))
		i += copy(dAtA[i:], m.DisplayName)
	}
	if len(m.Description) > 0 {
		dAtA[i] = 0x1a
		i++
		i = encodeVarintTask(dAtA, i, uint64(len(m.Description)))
		i += copy(dAtA[i:], m.Description)
	}
	if m.EstimatedTime != 0 {
		dAtA[i] = 0x20
		i++
		i = encodeVarintTask(dAtA, i, uint64(m.EstimatedTime))
	}
	if m.Owner != nil {
		dAtA[i] = 0x2a
		i++
		i = encodeVarintTask(dAtA, i, uint64(m.Owner.Size()))
		n1, err := m.Owner.MarshalTo(dAtA[i:])
		if err != nil {
			return 0, err
		}
		i += n1
	}
	if len(m.Subtasks) > 0 {
		for _, msg := range m.Subtasks {
			dAtA[i] = 0x32
			i++
			i = encodeVarintTask(dAtA, i, uint64(msg.Size()))
			n, err := msg.MarshalTo(dAtA[i:])
			if err != nil {
				return 0, err
			}
			i += n
		}
	}
	if m.XXX_unrecognized != nil {
		i += copy(dAtA[i:], m.XXX_unrecognized)
	}
	return i, nil
}

func encodeVarintTask(dAtA []byte, offset int, v uint64) int {
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return offset + 1
}
func (m *Task) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Id)
	if l > 0 {
		n += 1 + l + sovTask(uint64(l))
	}
	l = len(m.DisplayName)
	if l > 0 {
		n += 1 + l + sovTask(uint64(l))
	}
	l = len(m.Description)
	if l > 0 {
		n += 1 + l + sovTask(uint64(l))
	}
	if m.EstimatedTime != 0 {
		n += 1 + sovTask(uint64(m.EstimatedTime))
	}
	if m.Owner != nil {
		l = m.Owner.Size()
		n += 1 + l + sovTask(uint64(l))
	}
	if len(m.Subtasks) > 0 {
		for _, e := range m.Subtasks {
			l = e.Size()
			n += 1 + l + sovTask(uint64(l))
		}
	}
	if m.XXX_unrecognized != nil {
		n += len(m.XXX_unrecognized)
	}
	return n
}

func sovTask(x uint64) (n int) {
	for {
		n++
		x >>= 7
		if x == 0 {
			break
		}
	}
	return n
}
func sozTask(x uint64) (n int) {
	return sovTask(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Task) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTask
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Task: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Task: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTask
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= (uint64(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTask
			}
			postIndex := iNdEx + intStringLen
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Id = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DisplayName", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTask
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= (uint64(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTask
			}
			postIndex := iNdEx + intStringLen
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DisplayName = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Description", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTask
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= (uint64(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTask
			}
			postIndex := iNdEx + intStringLen
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Description = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field EstimatedTime", wireType)
			}
			m.EstimatedTime = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTask
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.EstimatedTime |= (int32(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Owner", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTask
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthTask
			}
			postIndex := iNdEx + msglen
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Owner == nil {
				m.Owner = &furo.Reference{}
			}
			if err := m.Owner.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Subtasks", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTask
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthTask
			}
			postIndex := iNdEx + msglen
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Subtasks = append(m.Subtasks, &Task{})
			if err := m.Subtasks[len(m.Subtasks)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTask(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthTask
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			m.XXX_unrecognized = append(m.XXX_unrecognized, dAtA[iNdEx:iNdEx+skippy]...)
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipTask(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowTask
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTask
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
			return iNdEx, nil
		case 1:
			iNdEx += 8
			return iNdEx, nil
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTask
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			iNdEx += length
			if length < 0 {
				return 0, ErrInvalidLengthTask
			}
			return iNdEx, nil
		case 3:
			for {
				var innerWire uint64
				var start int = iNdEx
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return 0, ErrIntOverflowTask
					}
					if iNdEx >= l {
						return 0, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					innerWire |= (uint64(b) & 0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				innerWireType := int(innerWire & 0x7)
				if innerWireType == 4 {
					break
				}
				next, err := skipTask(dAtA[start:])
				if err != nil {
					return 0, err
				}
				iNdEx = start + next
			}
			return iNdEx, nil
		case 4:
			return iNdEx, nil
		case 5:
			iNdEx += 4
			return iNdEx, nil
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
	}
	panic("unreachable")
}

var (
	ErrInvalidLengthTask = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowTask   = fmt.Errorf("proto: integer overflow")
)

func init() { proto.RegisterFile("task.proto", fileDescriptor_task_064a66c8d7fa32fd) }

var fileDescriptor_task_064a66c8d7fa32fd = []byte{
	// 258 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x44, 0x90, 0xd1, 0x4a, 0xc3, 0x30,
	0x14, 0x86, 0xc9, 0xd6, 0x0e, 0x3d, 0x9d, 0x13, 0xa2, 0x17, 0x61, 0x17, 0x25, 0x0a, 0x93, 0x5e,
	0xb5, 0x30, 0xdf, 0xc0, 0x07, 0xf0, 0xa2, 0xec, 0xbe, 0x64, 0xed, 0x19, 0xc4, 0x35, 0x4d, 0x48,
	0x32, 0xc4, 0x37, 0xf4, 0x52, 0xdf, 0x40, 0xfa, 0x24, 0x92, 0xb6, 0xd6, 0xab, 0x13, 0xbe, 0xef,
	0x40, 0xce, 0xff, 0x03, 0x78, 0xe1, 0xce, 0xb9, 0xb1, 0xda, 0x6b, 0x1a, 0x85, 0xf7, 0xf6, 0xce,
	0xa0, 0x75, 0xba, 0x2b, 0xc6, 0x31, 0xaa, 0x2d, 0x37, 0x56, 0xbf, 0x61, 0xed, 0x8b, 0x69, 0x56,
	0xb5, 0x6e, 0x5b, 0xac, 0xbd, 0x9c, 0x37, 0xee, 0x4f, 0x17, 0xab, 0x0b, 0x8b, 0x27, 0xb4, 0xd8,
	0xd5, 0x38, 0xd2, 0xc7, 0x6f, 0x02, 0xd1, 0x41, 0xb8, 0x33, 0xdd, 0xc0, 0x42, 0x36, 0x8c, 0x70,
	0x92, 0x5d, 0x97, 0x0b, 0xd9, 0xd0, 0x07, 0x58, 0x37, 0xd2, 0x99, 0x56, 0x7c, 0x54, 0x9d, 0x50,
	0xc8, 0x16, 0x83, 0x49, 0x26, 0xf6, 0x2a, 0x14, 0x52, 0x0e, 0x49, 0x83, 0xae, 0xb6, 0xd2, 0x84,
	0x6f, 0xd8, 0x72, 0xda, 0xf8, 0x47, 0x74, 0x07, 0x1b, 0x74, 0x5e, 0x2a, 0xe1, 0xb1, 0xa9, 0xbc,
	0x54, 0xc8, 0x22, 0x4e, 0xb2, 0xb8, 0xbc, 0x99, 0xe9, 0x41, 0x2a, 0xa4, 0x3b, 0x88, 0xf5, 0x7b,
	0x87, 0x96, 0xc5, 0x9c, 0x64, 0xc9, 0xfe, 0x36, 0x0f, 0xa7, 0xe6, 0xe5, 0xdf, 0xa9, 0xe5, 0x68,
	0xe9, 0x13, 0x5c, 0xb9, 0xcb, 0x31, 0x74, 0xe0, 0xd8, 0x8a, 0x2f, 0xb3, 0x64, 0x0f, 0xf9, 0xd0,
	0x4e, 0x08, 0x50, 0xce, 0xee, 0x65, 0xfd, 0xd9, 0xa7, 0xe4, 0xab, 0x4f, 0xc9, 0x4f, 0x9f, 0x92,
	0xe3, 0x6a, 0x08, 0xfa, 0xfc, 0x1b, 0x00, 0x00, 0xff, 0xff, 0xa6, 0x74, 0x07, 0xc5, 0x49, 0x01,
	0x00, 0x00,
}
