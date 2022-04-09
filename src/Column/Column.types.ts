export type ColumnSizeType = 
  'is-full' | 
  'is-two-thirds' | 
  'is-one-quarter' | 
  'is-one-third' | 
  'is-three-quarters' | 
  'is-half' | 
  'is-four-fifths' | 
  'is-three-fifths' | 
  'is-two-fifths' | 
  'is-one-fifth';

export type Column12SystemGrid =    
  'is-1' |
  'is-2' |
  'is-3' |
  'is-4' |
  'is-5' |
  'is-6' |
  'is-7' |
  'is-8' |
  'is-9' |
  'is-10' |
  'is-11' |
  'is-12'; 

export type ColumnOffsetType = 
  'is-offset-1' | 
  'is-offset-2' | 
  'is-offset-3' | 
  'is-offset-4' | 
  'is-offset-5' | 
  'is-offset-6' | 
  'is-offset-7' | 
  'is-offset-8' | 
  'is-offset-9' | 
  'is-offset-10' | 
  'is-offset-11' | 
  'is-offset-12' |  
  'is-offset-two-thirds' | 
  'is-offset-one-quarter' | 
  'is-offset-one-third' | 
  'is-offset-three-quarters' | 
  'is-offset-half' | 
  'is-offset-four-fifths' | 
  'is-offset-three-fifths' | 
  'is-offset-two-fifths' | 
  'is-offset-one-fifth';

export type ColumnNarrow = 
  'is-narrow' | 
  'is-narrow-mobile' | 
  'is-narrow-tablet' | 
  'is-narrow-touch' | 
  'is-narrow-desktop' | 
  'is-narrow-widescreen' | 
  'is-narrow-fullhd';
  
export type ColumnType = {
  size?: Column12SystemGrid | ColumnSizeType;
  offset?: ColumnOffsetType;
  narrow?: ColumnNarrow;
} 