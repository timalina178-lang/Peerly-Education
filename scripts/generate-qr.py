from pathlib import Path
import sys

import qrcode
import qrcode.image.svg


def main() -> None:
    if len(sys.argv) != 2 or not sys.argv[1].startswith("https://"):
        raise SystemExit("Usage: python scripts/generate-qr.py https://USERNAME.github.io/peerly-education/")

    url = sys.argv[1]
    output_dir = Path(__file__).resolve().parents[1] / "qr-code"
    output_dir.mkdir(exist_ok=True)

    qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_Q, box_size=16, border=4)
    qr.add_data(url)
    qr.make(fit=True)

    qr.make_image(fill_color="black", back_color="white").save(output_dir / "peerly-education-qr.png")
    svg = qr.make_image(image_factory=qrcode.image.svg.SvgPathImage)
    svg.save(output_dir / "peerly-education-qr.svg")
    (output_dir / "destination.txt").write_text(url + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
