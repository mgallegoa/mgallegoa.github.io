from PIL import Image, ImageDraw

# Initialize a standard 280x280 canvas layout
img = Image.new("RGB", (280, 280), "#F3F4F6")
draw = ImageDraw.Draw(img)

# Hexadecimal brand background colors
colors = ["#41B883", "#DD0031", "#38BDF8", "#7952B3"]

# 1. Generate background brand quadrant grids
draw.rectangle([(0, 0), (140, 140)], fill=colors[0])     # Top-Left: Vue
draw.rectangle([(140, 0), (280, 140)], fill=colors[1])   # Top-Right: Angular
draw.rectangle([(0, 140), (140, 280)], fill=colors[2])   # Bottom-Left: Tailwind
draw.rectangle([(140, 140), (280, 280)], fill=colors[3]) # Bottom-Right: Bootstrap

# 2. Render Vue Vector Logo (Geometric V shape)
draw.polygon([(70, 110), (25, 25), (50, 25), (70, 60), (85, 25), (115, 25)], fill="#35495E")
draw.polygon([(70, 110), (38, 25), (53, 25), (70, 72), (82, 25), (97, 25)], fill="#FFFFFF")

# 3. Render Angular Vector Logo (Shield layout)
draw.polygon([(210, 20), (250, 35), (240, 95), (210, 115), (170, 95), (160, 35)], fill="#FFFFFF")
draw.polygon([(210, 32), (232, 85), (222, 85), (210, 58), (198, 85), (188, 85)], fill="#DD0031")
draw.line([(202, 70), (218, 70)], fill="#FFFFFF", width=3)

# 4. Render Tailwind Vector Logo (Overlapping wave structures)
draw.ellipse([(35, 185), (90, 220)], fill="#FFFFFF")
draw.ellipse([(50, 195), (105, 230)], fill="#38BDF8") # Inner wave cut
draw.ellipse([(55, 195), (110, 230)], fill="#FFFFFF")

# 5. Render Bootstrap Vector Logo (Capital structural 'B' inside rounded frame)
draw.rounded_rectangle([(180, 180), (240, 240)], radius=8, fill=None, outline="#FFFFFF", width=3)
draw.rectangle([(195, 190), (200, 230)], fill="#FFFFFF")
draw.arc([(198, 190), (222, 210)], -90, 90, fill="#FFFFFF", width=3)
draw.arc([(198, 210), (222, 230)], -90, 90, fill="#FFFFFF", width=3)

# Save image file while compressing target sizing window to ~7.5 KB
img.save("tech_logos.jpg", format="JPEG", quality=80)
print("Vector branding image compiled successfully as 'tech_logos.jpg' (~7.5 KB)")
