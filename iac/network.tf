resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"

  tags = {
    Name = "${var.app_name} VPC"
  }
}

resource "aws_subnet" "main_public" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.0.1.0/24"

  tags = {
    Name = "${var.app_name} public Subnet"
  }
}

resource "aws_subnet" "main_private" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.0.2.0/24"

  tags = {
    Name = "${var.app_name} private Subnet"
  }
}

resource "aws_internet_gateway" "main" {
  vpc_id   = aws_vpc.main.id

  tags = {
    Name = "${var.app_name} IG"
  }
}

resource "aws_route_table" "main" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main.id
  }

  tags = {
    Name = "${var.app_name} RT"
  }
}

resource "aws_route_table_association" "main" {
  subnet_id      = aws_subnet.main_public.id
  route_table_id = aws_route_table.main.id
}