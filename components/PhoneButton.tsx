import { brand, phoneHref } from '@/lib/brand';
import { PhoneIcon } from './Icons';

type Props = {
  variant?: 'primary' | 'outline';
  label?: string;
  ariaLabel?: string;
};

export default function PhoneButton({
  variant = 'primary',
  label,
  ariaLabel,
}: Props) {
  const className = variant === 'primary' ? 'btn-call' : 'btn-call-outline';
  const displayLabel = label ?? brand.phone;
  return (
    <a
      className={className}
      href={phoneHref}
      aria-label={ariaLabel ?? `Call ${brand.phone}`}
    >
      <PhoneIcon size={variant === 'primary' ? 18 : 15} />
      {displayLabel}
    </a>
  );
}
